import AmlouJar from "./AmlouJar";

const products = [
  {
    name: "Amlou Traditionnel",
    tagline: "L'original doré",
    desc: "Amandes torréfiées, huile d'argan et miel. La recette ancestrale, équilibrée et onctueuse.",
    price: "12€",
    lid: "#3a2a1e",
    featured: false,
  },
  {
    name: "Amlou Intense",
    tagline: "Plus de cacao",
    desc: "Notre traditionnel relevé d'une pointe de cacao cru pour une gourmandise profonde.",
    price: "14€",
    lid: "#5b4636",
    featured: true,
  },
  {
    name: "Amlou Nature",
    tagline: "Sans miel",
    desc: "Uniquement amandes et huile d'argan. Idéal pour les recettes salées et le sport.",
    price: "13€",
    lid: "#7c7a3f",
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="saveurs" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-deep">
          Nos saveurs
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold text-cacao md:text-5xl">
          Trois pots, une même exigence.
        </h2>
        <p className="mt-4 text-cacao-soft">
          Chaque variété est préparée en petits lots pour préserver les arômes.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col items-center rounded-3xl border p-8 text-center transition-all hover:-translate-y-2 ${
              p.featured
                ? "border-terracotta bg-sand shadow-xl shadow-terracotta/10"
                : "border-almond bg-white/60"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 rounded-full bg-terracotta px-4 py-1 text-xs font-semibold text-cream">
                Le plus aimé
              </span>
            )}
            <AmlouJar className="h-44 w-auto" lidColor={p.lid} />
            <h3 className="mt-6 font-display text-2xl font-bold text-cacao">
              {p.name}
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber-deep">
              {p.tagline}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-cacao-soft">
              {p.desc}
            </p>
            <div className="mt-6 flex w-full items-center justify-between">
              <span className="font-display text-2xl font-bold text-cacao">
                {p.price}
              </span>
              <a
                href="#commander"
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-terracotta text-cream hover:bg-amber-deep"
                    : "bg-cacao text-cream hover:bg-cacao-soft"
                }`}
              >
                Ajouter
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
