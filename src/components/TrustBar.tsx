const items = [
  { title: "100% naturel", desc: "3 ingrédients, rien d'autre" },
  { title: "Sans additifs", desc: "Ni conservateur, ni sucre raffiné" },
  { title: "Huile d'argan", desc: "Pressée à froid, coopérative" },
  { title: "Fait main", desc: "Broyé à la meule de pierre" },
];

export default function TrustBar() {
  return (
    <section className="bg-amla-blue">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 pb-14 pt-28 md:grid-cols-4 md:pt-32">
        {items.map((it) => (
          <div key={it.title} className="text-center md:text-left">
            <p className="font-condensed text-xl font-semibold uppercase tracking-wide text-amla-yellow">
              {it.title}
            </p>
            <p className="mt-1 text-sm text-amla-cream/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
