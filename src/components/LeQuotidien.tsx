"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/img12.png", alt: "Amlou ALMA" },
  { src: "/images/img1.png", alt: "Amlou ALMA" },
  { src: "/images/img5.png", alt: "Amlou ALMA" },
  { src: "/images/img15.png", alt: "Amlou ALMA" },
  { src: "/images/img3.png", alt: "Amlou ALMA" },
];

const SHEET_WEBHOOK_URL = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL;

export default function LeQuotidien() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || sending) return;
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

      {/* Défilé d'images — pause au survol */}
      <div className="group/marquee mt-16 overflow-hidden pb-14 sm:pb-20">
        <div className="flex">
          <div className="animate-marquee flex shrink-0 gap-6 group-hover/marquee:[animation-play-state:paused] sm:gap-8">
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
