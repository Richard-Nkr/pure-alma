const kpis = [
  {
    value: "20g",
    label: "de Protéines",
    desc: "Pour 100g. Issues exclusivement de nos amandes doucement torréfiées. Une source de protéines végétales brutes pour soutenir vos fibres musculaires et prolonger la satiété.",
  },
  {
    value: "+80%",
    label: "de Bons Lipides",
    desc: "Une concentration exceptionnelle en acides gras insaturés (Oméga 6 & 9) provenant de l'huile d'argan et des amandes. Le carburant naturel par excellence pour l'endurance.",
  },
  {
    value: "3×",
    label: "Plus de Vitamine E",
    desc: "L'huile d'argan en contient trois fois plus que l'huile d'olive. Un bouclier antioxydant puissant, essentiel à la récupération cellulaire.",
  },
  {
    value: "0",
    label: "Sucre Raffiné",
    desc: "L'énergie longue durée du miel de montagne. Un apport glucidique naturel, sans l'effondrement glycémique des pâtes à tartiner industrielles.",
  },
];

export default function Kpis() {
  return (
    <section
      id="kpis"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-center font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-yellow">
          La Data Nutritionnelle
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-amla-cream sm:text-5xl">
          L&apos;ÉNERGIE
          <br />
          <span className="text-amla-yellow">EN CHIFFRES</span>
        </h2>

        <div className="mt-16 space-y-14 sm:space-y-20">
          {kpis.map((k) => (
            <div key={k.label} className="grid items-start gap-4 sm:grid-cols-[160px_1fr] sm:gap-12">
              <div>
                <span className="block font-condensed text-7xl font-bold leading-none text-amla-yellow sm:text-8xl">
                  {k.value}
                </span>
                <span className="mt-2 block font-condensed text-lg font-bold uppercase tracking-wide text-amla-cream sm:text-xl">
                  {k.label}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-amla-cream/70 sm:pt-3">
                {k.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
