"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/img12.png", alt: "Amlou AMLA" },
  { src: "/images/img1.png", alt: "Amlou AMLA" },
  { src: "/images/img5.png", alt: "Amlou AMLA" },
  { src: "/images/img15.png", alt: "Amlou AMLA" },
  { src: "/images/img3.png", alt: "Amlou AMLA" },
];

const SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL;

const MIN_FORM_TIME_MS = 2000; // anti-bot : rejette une soumission en < 2s

export default function LeQuotidien() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mountedAt = useRef(Date.now());  // time gate
  const [honeypot, setHoneypot] = useState(""); // invisible field

  // Boucle infinie du swipe mobile : le contenu étant dupliqué, on
  // téléporte le scroll d'une moitié quand on atteint une extrémité.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !window.matchMedia("(max-width: 767px)").matches) return;
    el.scrollLeft = 1;
    const onScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 1) el.scrollLeft += half;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || sending) return;

    // 🧿 Honeypot — les bots remplissent ce champ invisible
    if (honeypot) return;

    // ⏱️ Time gate — rejette les soumissions trop rapides
    if (Date.now() - mountedAt.current < MIN_FORM_TIME_MS) return;

    setSending(true);
    try {
      if (SHEET_WEBHOOK_URL) {
        // mode no-cors : Apps Script ne renvoie pas les en-têtes CORS
        await fetch(SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ email }),
        });
      }
      // Rafraîchit le compteur : on laisse au Sheet le temps d'enregistrer la
      // ligne, puis on relit le total réel (pas d'incrément local → pas de double)
      setTimeout(async () => {
        try {
          const res = await fetch("/api/preorders", { cache: "no-store" });
          if (res.ok) {
            const data = await res.json();
            window.dispatchEvent(
              new CustomEvent("preorder:updated", { detail: data.count })
            );
          }
        } catch {
          // silencieux — le compteur se mettra à jour au prochain chargement
        }
      }, 1500);
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="quotidien" className="bg-amla-blue">
      <div className="mx-auto max-w-3xl px-6 pt-20 text-center sm:px-10 sm:pt-28">
        <p
          className="reveal font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
        >
          À savourer de mille façons
        </p>

        <p className="reveal stagger-1 mx-auto mt-8 max-w-2xl text-center font-condensed text-xl font-bold uppercase tracking-wide text-amla-yellow sm:text-2xl">
          Avec vos yaourts et smoothies, sur vos crêpes, sur du pain chaud ou
          dans vos pâtisseries maison.
        </p>

        {sent ? (
          <p className="mt-12 text-center font-condensed text-lg font-bold uppercase tracking-wide text-amla-yellow">
            Merci ! On vous tient au courant.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal stagger-2 mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            {/* 🧿 Honeypot : invisible pour les humains, rempli par les bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute -left-[9999px] opacity-0"
              aria-hidden="true"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full rounded-xl border-0 bg-amla-bg px-5 py-4 text-amla-blue placeholder:text-amla-blue/40 focus:outline-none focus:ring-2 focus:ring-amla-yellow"
            />
            <button
              type="submit"
              disabled={sending}
              className="relative shrink-0 rounded-xl btn-shine px-8 py-4 font-condensed text-lg font-bold uppercase tracking-wide text-amla-blue shadow-lg shadow-amla-yellow/20 transition-transform hover:scale-105 active:scale-95 disabled:opacity-60"
            >
              {/* le libellé reste dans le flux pour figer la largeur du bouton */}
              <span className={`flex flex-col items-center leading-tight ${sending ? "invisible" : ""}`}>
                Je commande mon pot
                <span className="text-xs font-semibold tracking-[0.2em] opacity-70">
                  (Précommande)
                </span>
              </span>
              {sending && (
                <span className="absolute inset-0 flex items-center justify-center">
                  Envoi...
                </span>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Défilé d'images — swipe au doigt sur mobile, défilement auto + pause au survol sur desktop */}
      <div
        ref={carouselRef}
        className="group/marquee no-scrollbar mt-16 overflow-x-auto pb-14 sm:pb-20 md:overflow-hidden"
      >
        <div className="flex">
          <div className="animate-marquee flex shrink-0 gap-6 pr-6 group-hover/marquee:[animation-play-state:paused] sm:gap-8 sm:pr-8 md:pr-0">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] h-72 shrink-0 overflow-hidden rounded-3xl sm:h-96"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
