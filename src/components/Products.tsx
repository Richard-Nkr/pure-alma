import Image from "next/image";
import CtaButton from "./CtaButton";
import Blob from "./Blob";

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
    img: "/images/img1.png",
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
    <section id="saveurs" className="relative overflow-hidden bg-amla-blue">
      <Blob className="-right-24 top-24 h-80 w-80 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-amla-yellow">
            Nos saveurs
          </p>
          <h2 className="mt-4 font-sans text-4xl font-bold tracking-tight text-amla-yellow md:text-5xl">
            Trois pots, une même exigence.
          </h2>
          <p className="mt-4 text-lg text-amla-cream/80">
            Chaque variété est préparée en petits lots pour préserver les arômes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col overflow-hidden rounded-md bg-amla-blue-light shadow-lg transition-transform hover:-translate-y-2 ${
                p.featured
                  ? "ring-2 ring-amla-yellow"
                  : "border border-amla-yellow/15"
              }`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-amla-blue-deep">
                <Image
                  src={p.img}
                  alt={`Pot ${p.name} — AMLA`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
                {p.featured && (
                  <span className="absolute left-4 top-4 rounded-md bg-amla-yellow px-3 py-1 font-condensed text-xs font-semibold uppercase tracking-wide text-amla-blue">
                    Le plus aimé
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="font-sans text-xl font-bold tracking-tight text-amla-yellow">
                  {p.name}
                </h3>
                <p className="mt-1 font-condensed text-sm font-semibold uppercase tracking-wide text-amla-yellow/80">
                  {p.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-amla-cream/75">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-condensed text-3xl font-bold text-amla-yellow">
                    {p.price}
                  </span>
                  <CtaButton label="Ajouter" href="#commander" size="md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
