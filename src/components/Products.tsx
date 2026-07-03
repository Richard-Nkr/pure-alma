import Image from "next/image";

const products = [
  {
    name: "Amlou Traditionnel",
    tagline: "L'original doré",
    desc: "Amandes torréfiées, huile d'argan et miel. La recette ancestrale, équilibrée et onctueuse.",
    price: "12€",
    img: "/images/img4.png",
    featured: false,
  },
  {
    name: "Amlou Intense",
    tagline: "Plus de cacao",
    desc: "Notre traditionnel relevé d'une pointe de cacao cru pour une gourmandise profonde.",
    price: "14€",
    img: "/images/img6.png",
    featured: true,
  },
  {
    name: "Amlou Nature",
    tagline: "Sans miel",
    desc: "Uniquement amandes et huile d'argan. Idéal pour les recettes salées et le sport.",
    price: "13€",
    img: "/images/img5.png",
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="saveurs" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
          Nos saveurs
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold text-ink md:text-5xl">
          Trois pots, une même exigence.
        </h2>
        <p className="mt-4 text-ink-soft">
          Chaque variété est préparée en petits lots pour préserver les arômes.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col overflow-hidden rounded-3xl border transition-all hover:-translate-y-2 ${
              p.featured
                ? "border-navy bg-white shadow-xl shadow-navy/10"
                : "border-almond bg-white/60"
            }`}
          >
            {p.featured && (
              <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-navy px-4 py-1 text-xs font-semibold text-cream">
                Le plus aimé
              </span>
            )}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <Image
                src={p.img}
                alt={`Pot ${p.name} — Pure Alma`}
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 text-center">
              <h3 className="font-display text-2xl font-bold text-ink">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-deep">
                {p.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
              <div className="mt-6 flex w-full items-center justify-between">
                <span className="font-display text-2xl font-bold text-ink">
                  {p.price}
                </span>
                <a
                  href="#commander"
                  className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-deep"
                >
                  Ajouter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
