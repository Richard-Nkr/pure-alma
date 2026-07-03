"use client";

import { Leaf, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";

const benefits = [
  {
    title: "Riche en bonnes graisses",
    desc: "L'huile d'argan et les amandes apportent des acides gras insaturés et de la vitamine E.",
    Icon: Leaf,
  },
  {
    title: "Source d'énergie",
    desc: "Un carburant naturel idéal au petit-déjeuner ou avant l'effort, sans coup de barre.",
    Icon: Zap,
  },
  {
    title: "Antioxydants naturels",
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
    <section id="bienfaits" className="bg-body">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Text as="p" type="label" color="accent">
            BIENFAITS
          </Text>
          <Heading level={2} type="display-2" className="mt-4">
            Gourmand et bon pour vous.
          </Heading>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-accent-muted)] text-[var(--color-accent)]">
                <b.Icon size={24} strokeWidth={2} />
              </div>
              <Heading level={3} className="mt-5 text-lg">
                {b.title}
              </Heading>
              <Text color="secondary" className="mt-2 block">
                {b.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
