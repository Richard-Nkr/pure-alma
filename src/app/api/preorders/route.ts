// Stocke le compteur dans un simple fichier JSON (pas besoin de BDD)
import { promises as fs } from "fs";
import path from "path";
import { headers } from "next/headers";

const DATA_FILE = path.join(process.cwd(), "data", "preorders.json");

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

function getClientIp(): string {
  try {
    const h = headers();
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
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { count: 137, max: 500 };
  }
}

async function writeCount(data: { count: number; max: number }) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await readCount();
  return Response.json(data);
}

export async function POST() {
  // 🚦 Rate limit
  const ip = getClientIp();
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Trop de tentatives. Réessaie dans une minute." },
      { status: 429 }
    );
  }

  const data = await readCount();
  if (data.count < data.max) {
    data.count += 1;
    await writeCount(data);
  }
  return Response.json(data);
}
