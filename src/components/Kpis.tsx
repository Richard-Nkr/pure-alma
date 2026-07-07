const bienfaits = [
  {
    title: "Richesse Nutritionnelle",
    desc: "Des protéines végétales, du magnésium et des acides gras essentiels dans chaque cuillère. Un concentré naturel de nutriments.",
  },
  {
    title: "Énergie Longue Durée",
    desc: "Les bons lipides et le miel de montagne diffusent une énergie constante, sans pic ni crash glycémique.",
  },
  {
    title: "Protection Cardiovasculaire",
    desc: "Les oméga 6 & 9 de l'huile d'argan et des amandes contribuent à fluidifier la circulation sanguine.",
  },
  {
    title: "Zéro Additif",
    desc: "Trois ingrédients seulement. Aucun conservateur, aucun sucre raffiné, aucun artifice. Juste la pureté de la terre marocaine.",
  },
];

export default function Kpis() {
  return (
    <section
      id="kpis"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14">
        <h2
          className="mx-auto mt-4 max-w-2xl text-center font-condensed font-bold uppercase tracking-tight text-amla-yellow"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
        >
          <span className="block">Quelques</span>
          <span className="block">Bienfaits</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {bienfaits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-amla-yellow/20 bg-amla-blue-light p-6 sm:p-8"
            >
              <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-amla-yellow sm:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 leading-relaxed text-amla-cream/80">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
