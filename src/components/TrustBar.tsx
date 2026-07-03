const items = [
  { title: "100% naturel", desc: "3 ingrédients, rien d'autre" },
  { title: "Sans additifs", desc: "Ni conservateur, ni sucre raffiné" },
  { title: "Huile d'argan pure", desc: "Pressée à froid, coopérative" },
  { title: "Fait main", desc: "Broyé à la meule de pierre" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-almond/60 bg-sand/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-navy">
              {it.title}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
