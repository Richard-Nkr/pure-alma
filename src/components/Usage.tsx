const ideas = [
  {
    step: "01",
    title: "Sur du pain chaud",
    desc: "La façon la plus authentique : nappez une tranche de pain traditionnel encore tiède.",
  },
  {
    step: "02",
    title: "Dans un porridge",
    desc: "Une cuillère fondue dans un bol d'avoine ou de yaourt pour un petit-déj réconfortant.",
  },
  {
    step: "03",
    title: "En topping de crêpes",
    desc: "Remplacez la pâte à tartiner classique par une gourmandise sans sucre raffiné.",
  },
  {
    step: "04",
    title: "En sauce salée",
    desc: "La version Nature sublime les tajines, les légumes rôtis et les marinades.",
  },
];

export default function Usage() {
  return (
    <section id="degustation" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
            Comment le déguster
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink md:text-5xl">
            Du matin au soir, à toutes les sauces.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            L&apos;amlou n&apos;est pas qu&apos;une pâte à tartiner : c&apos;est
            un allié de cuisine. Sucré ou salé, il révèle des saveurs de
            noisette grillée dans toutes vos préparations.
          </p>
          <a
            href="#commander"
            className="mt-8 inline-block rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-navy/20 transition-transform hover:scale-105"
          >
            J&apos;essaie chez moi
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ideas.map((i) => (
            <div
              key={i.step}
              className="rounded-2xl border border-almond bg-white/60 p-6"
            >
              <span className="font-display text-3xl font-bold text-gold">
                {i.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">
                {i.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
