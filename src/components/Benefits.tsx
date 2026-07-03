const benefits = [
  {
    title: "Riche en bonnes graisses",
    desc: "L'huile d'argan et les amandes apportent des acides gras insaturés et de la vitamine E.",
    icon: "M12 3v18M5 8l7-5 7 5",
  },
  {
    title: "Source d'énergie",
    desc: "Un carburant naturel idéal au petit-déjeuner ou avant l'effort, sans coup de barre.",
    icon: "M13 2L3 14h7l-1 8 11-13h-7z",
  },
  {
    title: "Antioxydants naturels",
    desc: "La vitamine E de l'argan aide à protéger les cellules du stress oxydatif.",
    icon: "M12 21c-4-2-7-5-7-10a7 7 0 0114 0c0 5-3 8-7 10z",
  },
  {
    title: "Sans sucre raffiné",
    desc: "Seul le miel apporte une douceur naturelle. Aucun sucre blanc ajouté.",
    icon: "M20 12a8 8 0 11-16 0 8 8 0 0116 0zM9 12h6",
  },
];

export default function Benefits() {
  return (
    <section id="bienfaits" className="bg-sand/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-deep">
            Bienfaits
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-cacao md:text-5xl">
            Gourmand et bon pour vous.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-almond bg-cream p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey/20 text-terracotta">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={b.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-cacao">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cacao-soft">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
