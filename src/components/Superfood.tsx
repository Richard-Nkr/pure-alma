import Image from "next/image";

const nutrients = [
  {
    title: "Vitamine E",
    desc: "L'huile d'argan, l'une des plus riches en tocophérols antioxydants.",
  },
  {
    title: "Bonnes graisses",
    desc: "Oméga 6 & 9 des amandes et de l'argan pour un cœur en forme.",
  },
  {
    title: "Magnésium & protéines",
    desc: "Les amandes torréfiées, alliées de la récupération et de l'énergie.",
  },
  {
    title: "Énergie longue durée",
    desc: "Le miel de montagne, un sucre naturel sans pic glycémique.",
  },
];

const stats = [
  { value: "3", label: "Ingrédients" },
  { value: "0", label: "Additif" },
  { value: "100%", label: "Naturel" },
];

export default function Superfood() {
  return (
    <section
      id="superfood"
      className="border-x-[16px] border-b-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px] sm:border-b-[22px]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="order-1 md:order-none">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden border-[8px] border-amla-yellow sm:border-[12px]">
              <Image
                src="/images/img3.png"
                alt="Amlou ALMA, superfood marocain"
                fill
                sizes="(max-width: 768px) 90vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-yellow">
              Le superfood marocain
            </p>
            <h2 className="mt-4 font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-amla-cream sm:text-5xl">
              Un superfood ancestral,{" "}
              <span className="text-amla-yellow">trois trésors.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-amla-cream/80">
              Bien avant les tendances, les berbères de l&apos;Atlas broyaient
              amandes, huile d&apos;argan et miel pour une pâte dense en
              nutriments. Une bombe d&apos;énergie 100% naturelle : bonnes
              graisses, vitamine E, magnésium et antioxydants, dans chaque
              cuillère.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {nutrients.map((n) => (
                <div key={n.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 h-3 w-3 shrink-0 rounded-full bg-amla-yellow"
                  />
                  <div>
                    <p className="font-condensed text-lg font-bold uppercase tracking-wide text-amla-cream">
                      {n.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-amla-cream/70">
                      {n.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-8 border-t border-amla-yellow/20 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-condensed text-4xl font-bold text-amla-yellow">
                    {s.value}
                  </p>
                  <p className="mt-1 font-condensed text-xs uppercase tracking-widest text-amla-cream/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
