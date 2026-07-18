import Image from "next/image";

const ingredients = [
  {
    number: "01",
    title: "Amandes",
    desc: "Les amandes grillées : riches en protéines, en fibres et en bons lipides.",
  },
  {
    number: "02",
    title: "Huile d'Argan",
    desc: "L'huile d'argan culinaire : source de vitamine E et d'acides gras essentiels.",
  },
  {
    number: "03",
    title: "Miel",
    desc: "Le miel : énergie naturelle et touche de douceur.",
  },
];

const stagger = ["stagger-1", "stagger-2", "stagger-3"];

export default function LaFormule() {
  return (
    <section id="formule" className="bg-amla-blue">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">

        <div className="reveal mx-auto max-w-2xl text-center">
          <p
            className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
            style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
          >
            La recette
          </p>
          <h2
            className="mx-auto mt-4 font-condensed font-bold uppercase tracking-tight text-amla-yellow"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
          >
            <span className="block">3 Ingrédients</span>
            <span className="block">0 Additif</span>
            <span className="block">100 % Naturel</span>
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-10 sm:space-y-14">
            {ingredients.map((i, idx) => (
              <div
                key={i.number}
                className={`reveal ${stagger[idx]} grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10`}
              >
                <span className="font-condensed text-6xl font-bold leading-none text-amla-cream/25 sm:text-7xl">
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

          <div className="reveal-scale relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl order-first md:order-last">
            <Image
              src="/images/img3.png"
              alt="Amlou artisanal AMLA. 3 ingrédients."
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
