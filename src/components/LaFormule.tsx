import Image from "next/image";

const ingredients = [
  {
    number: "01",
    title: "Les Amandes Torréfiées",
    desc: "La base brute. Riches en protéines végétales et en magnésium, elles offrent une texture onctueuse tout en favorisant la satiété et la récupération.",
  },
  {
    number: "02",
    title: "L'Huile d'Argan Précieuse",
    desc: "L'or du Maroc. Extraite des noix de l'arganier, elle apporte une saveur unique et protège votre système cardiovasculaire.",
  },
  {
    number: "03",
    title: "Le Miel de Montagne",
    desc: "La touche douce. Un sucre brut et naturel pour un regain d'énergie immédiat, sans crash glycémique.",
  },
];

export default function LaFormule() {
  return (
    <section
      id="formule"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-center font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-yellow">
          La Formule
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-amla-cream sm:text-5xl">
          3 TRÉSORS DE LA NATURE.
          <br />
          <span className="text-amla-yellow">0 ARTIFICE.</span>
        </h2>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-10 sm:space-y-14">
            {ingredients.map((i) => (
              <div key={i.number} className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
                <span className="font-condensed text-6xl font-bold leading-none text-amla-yellow/30 sm:text-7xl">
                  {i.number}
                </span>
                <div>
                  <h3 className="font-condensed text-2xl font-bold uppercase tracking-wide text-amla-yellow">
                    {i.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-amla-cream/80">
                    {i.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border-[6px] border-amla-yellow sm:border-[10px] md:order-none">
            <Image
              src="/images/img3.png"
              alt="Amlou artisanal ALMA — 3 ingrédients"
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center border-t border-amla-yellow/20 pt-10">
          <p className="text-center font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-yellow">
            3 Ingrédients &nbsp;•&nbsp; 0 Additif &nbsp;•&nbsp; 100 % Naturel
          </p>
        </div>
      </div>
    </section>
  );
}
