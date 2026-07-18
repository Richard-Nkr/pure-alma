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

const packs = [
  {
    id: "x1",
    pots: 1,
    label: "1 pot · 200 g",
    price: "9,90 €",
    old: "12,90 €",
    note: "-23 % précommande",
    save: "3,00 €",
    featured: false,
    img: "/images/pack-x1.jpg",
  },
  {
    id: "x2",
    pots: 2,
    label: "Pack ×2",
    price: "17,90 €",
    old: "25,80 €",
    note: "-31 % · 8,95 € le pot",
    save: "7,90 €",
    featured: false,
    img: "/images/pack-x2.jpg",
  },
  {
    id: "x3",
    pots: 3,
    label: "Pack ×3",
    price: "24,90 €",
    old: "38,70 €",
    note: "-36 % · 8,30 € le pot",
    save: "13,80 €",
    featured: true,
    img: "/images/pack-x3.jpg",
  },
];

export default function LeQuotidien() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedPack, setSelectedPack] = useState(packs[0]);
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
          body: JSON.stringify({
            email,
            pack: selectedPack.label,
            pots: selectedPack.pots,
          }),
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

      {/* ── Bloc précommande : offres + image produit ── */}
      <div className="mx-auto pt-20 grid max-w-6xl items-center gap-12 px-6 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="text-left">
          <h2
            className="reveal text-center font-condensed font-bold uppercase tracking-tight md:text-left"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.02 }}
          >
            <span className="block md:inline text-amla-yellow">Réserve </span>
            <span className="block md:inline text-amla-cream">un pot.</span>
          </h2>

          {/* Rien à payer. Juste un email pour être notifié au lancement. */}
          <div className="reveal stagger-1 mt-6 flex items-center gap-4 rounded-2xl border-2 border-amla-yellow bg-amla-yellow/10 p-4 sm:p-5">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-amla-yellow font-condensed text-4xl font-bold text-amla-blue shadow-lg shadow-amla-yellow/30 sm:h-24 sm:w-24 sm:text-5xl">
              0&nbsp;€
            </span>
            <p className="text-left leading-snug text-amla-cream/90">
              <strong className="text-amla-yellow">Rien à payer.</strong>{" "}
              Juste un email pour être notifié lors du lancement.
            </p>
          </div>

          {/* Cartes de packs */}
          <div className="reveal stagger-2 mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            {packs.map((p) => {
              const active = selectedPack.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPack(p)}
                  aria-pressed={active}
                  className={`relative rounded-2xl border p-3 text-left transition-all duration-200 sm:p-5 ${
                    active
                      ? "border-amla-yellow bg-amla-yellow/10 shadow-lg shadow-amla-yellow/10"
                      : "border-amla-cream/20 bg-amla-blue-light/30 hover:border-amla-yellow/50"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-2 rounded-full bg-amla-yellow px-2 py-0.5 font-condensed text-[10px] font-bold uppercase tracking-wide text-amla-blue sm:left-4 sm:px-3 sm:text-xs">
                      Meilleure offre
                    </span>
                  )}
                  <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-amla-cream/90 sm:text-xs sm:tracking-[0.15em]">
                    {p.label}
                  </span>
                  <span className="mt-1 block font-condensed text-xl font-bold text-amla-yellow sm:text-3xl">
                    {p.price}
                  </span>
                  <span className="mt-1 block text-xs text-amla-cream/50 line-through sm:text-sm">
                    {p.old}
                  </span>
                  <span className="block text-xs text-amla-cream/75 sm:text-sm">{p.note}</span>
                  <span className="mt-2 block font-condensed text-xs font-bold uppercase tracking-wide text-amla-yellow sm:text-sm">
                    Économise {p.save}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Image produit — suit le pack sélectionné (toutes préchargées, fondu) */}
        <div className="reveal-right relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
          {packs.map((p) => (
            <Image
              key={p.id}
              src={p.img}
              alt={`AMLA. ${p.label}`}
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className={`object-cover transition-opacity duration-500 ${
                selectedPack.id === p.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        {sent ? (
          <p className="mt-12 text-center font-condensed text-2xl font-bold uppercase tracking-wide text-amla-yellow sm:text-3xl">
            Merci ! On vous tient informé au lancement.
          </p>
        ) : (
          <>
          <p className="reveal stagger-2 mt-12 font-condensed text-lg font-bold uppercase tracking-wide text-amla-yellow">
            {selectedPack.label} · {selectedPack.price} au lancement
          </p>
          <form
            onSubmit={handleSubmit}
            className="reveal stagger-2 mx-auto mt-4 flex max-w-2xl flex-col gap-3 sm:flex-row"
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
              placeholder="email"
              className="w-full flex-1 rounded-xl border-0 bg-amla-bg px-5 py-4 text-amla-blue placeholder:text-amla-blue/40 focus:outline-none focus:ring-2 focus:ring-amla-yellow"
            />
            <button
              type="submit"
              disabled={sending}
              className="relative shrink-0 rounded-xl btn-shine px-8 py-4 font-condensed text-lg font-bold uppercase tracking-wide text-amla-blue shadow-lg shadow-amla-yellow/20 transition-transform hover:scale-105 active:scale-95 disabled:opacity-60"
            >
              {/* le libellé reste dans le flux pour figer la largeur du bouton */}
              <span className={sending ? "invisible" : ""}>
                Précommander · 0 € à payer
              </span>
              {sending && (
                <span className="absolute inset-0 flex items-center justify-center">
                  Envoi...
                </span>
              )}
            </button>
          </form>
          </>
        )}

        <p className="reveal stagger-3 mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amla-cream/70">
          Zéro paiement aujourd&apos;hui. Alerte au lancement.
        </p>
        <ul className="reveal stagger-4 mx-auto mt-4 flex flex-col items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amla-cream/60 sm:flex-row sm:justify-center sm:gap-6">
          <li>✓ Paiement sécurisé au lancement</li>
          <li>✓ Expédition France &amp; Belgique</li>
        </ul>
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
