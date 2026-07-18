// Compteur de précommandes — source de vérité : le Google Sheet.
// Chaque inscription ajoute une ligne au Sheet ; le compteur = base + nb de lignes.
import { headers } from "next/headers";

const SCRIPT_URL = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL;
const BASE_COUNT = 137; // point de départ affiché avant les premières inscriptions
const MAX = 500;

// ── Rate limiting (in-memory, partagé entre requêtes sur la même instance) ──
const ipHits = new Map<string, number[]>(); // IP → timestamps[]
const MAX_HITS = 3;     // max 3 tentatives
const WINDOW_MS = 60000; // par fenêtre de 60 secondes
const CLEANUP_INTERVAL = 5 * 60000; // nettoie les vieilles IPs toutes les 5 min

// Nettoyage périodique
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of ipHits) {
      const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) ipHits.delete(ip);
      else ipHits.set(ip, fresh);
    }
  }, CLEANUP_INTERVAL);
}

async function getClientIp(): Promise<string> {
  try {
    const h = await headers();
    return (
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      h.get("x-real-ip") ||
      "127.0.0.1"
    );
  } catch {
    return "127.0.0.1";
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = ipHits.get(ip)?.filter((t) => now - t < WINDOW_MS) ?? [];
  if (hits.length >= MAX_HITS) return true;
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
}

// ── Compteur ──

async function readCount(): Promise<{ count: number; max: number }> {
  if (SCRIPT_URL) {
    try {
      const res = await fetch(`${SCRIPT_URL}?action=count`, {
        redirect: "follow",
        cache: "no-store",
      });
      const data = await res.json();
      if (typeof data.count === "number") {
        return { count: Math.min(BASE_COUNT + data.count, MAX), max: MAX };
      }
    } catch {
      // Sheet injoignable : on retombe sur la base
    }
  }
  return { count: BASE_COUNT, max: MAX };
}

export async function GET() {
  return Response.json(await readCount());
}

export async function POST() {
  // 🚦 Rate limit
  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Trop de tentatives. Réessaie dans une minute." },
      { status: 429 }
    );
  }

  // Le compteur dérive uniquement des lignes du Sheet : on renvoie le total
  // réel, sans incrément local (sinon double comptage avec la ligne ajoutée).
  return Response.json(await readCount());
}
