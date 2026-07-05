const kpis = [
  {
    value: "20g",
    label: "Protéines",
    sub: "par 100g",
  },
  {
    value: "+80%",
    label: "Bons Lipides",
    sub: "Oméga 6 & 9",
  },
  {
    value: "3×",
    label: "Vitamine E",
    sub: "vs huile d'olive",
  },
  {
    value: "0",
    label: "Sucre Raffiné",
    sub: "miel pur uniquement",
  },
];

export default function Kpis() {
  return (
    <section
      id="kpis"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
        <p className="text-center font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-yellow">
          L&apos;ÉNERGIE EN CHIFFRES
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="text-center">
              <span className="block font-condensed text-5xl font-bold leading-none text-amla-yellow sm:text-6xl">
                {k.value}
              </span>
              <span className="mt-2 block font-condensed text-sm font-bold uppercase tracking-wide text-amla-cream">
                {k.label}
              </span>
              <span className="mt-1 block font-condensed text-xs uppercase tracking-wider text-amla-cream/50">
                {k.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
