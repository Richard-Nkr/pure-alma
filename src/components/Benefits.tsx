"use client";

import { Leaf, Zap, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Bonnes graisses",
    desc: "L'huile d'argan et les amandes apportent des acides gras insaturés et de la vitamine E.",
    Icon: Leaf,
  },
  {
    title: "Énergie durable",
    desc: "Un carburant naturel idéal au petit-déjeuner ou avant l'effort, sans coup de barre.",
    Icon: Zap,
  },
  {
    title: "Antioxydants",
    desc: "La vitamine E de l'argan aide à protéger les cellules du stress oxydatif.",
    Icon: ShieldCheck,
  },
  {
    title: "Sans sucre raffiné",
    desc: "Seul le miel apporte une douceur naturelle. Aucun sucre blanc ajouté.",
    Icon: Sparkles,
  },
];

export default function Benefits() {
  return (
    <section id="bienfaits" className="bg-amla-blue">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-amla-yellow">
            Bienfaits
          </p>
          <h2 className="mt-4 font-display text-5xl text-amla-yellow md:text-6xl">
            Gourmand. Et bon pour toi.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="text-center sm:text-left">
              <div className="relative inline-flex h-16 w-16 items-center justify-center">
                <span
                  aria-hidden
                  className="absolute inset-0 animate-blob bg-amla-yellow"
                  style={{ borderRadius: "42% 58% 63% 37% / 42% 44% 56% 58%" }}
                />
                <b.Icon size={28} strokeWidth={2.25} className="relative text-amla-blue" />
              </div>
              <h3 className="mt-5 font-condensed text-xl font-semibold uppercase tracking-wide text-amla-yellow">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amla-cream/75">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
