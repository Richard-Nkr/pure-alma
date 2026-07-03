import CtaButton from "./CtaButton";

const ideas = [
  {
    step: "01",
    title: "Sur du pain chaud",
    desc: "La façon la plus authentique : nappez une tranche de pain traditionnel encore tiède.",
  },
  {
    step: "02",
    title: "Dans un porridge",
    desc: "Une cuillère fondue dans un bol d'avoine ou de yaourt pour un petit-déj de champion.",
  },
  {
    step: "03",
    title: "Avant le sport",
    desc: "Une cuillère 30 min avant l'effort pour une énergie longue durée, sans pic de sucre.",
  },
  {
    step: "04",
    title: "En sauce salée",
    desc: "La version Nature sublime les tajines, les légumes rôtis et les marinades.",
  },
];

export default function Usage() {
  return (
    <section id="degustation" className="bg-amla-blue">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-amla-yellow">
              Comment le déguster
            </p>
            <h2 className="mt-4 font-display text-5xl text-amla-yellow md:text-6xl">
              Du matin au run, à toutes les sauces.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-amla-cream/85">
              L&apos;amlou n&apos;est pas qu&apos;une pâte à tartiner :
              c&apos;est un allié de performance et de cuisine. Sucré ou salé, il
              révèle des saveurs de noisette grillée dans toutes tes préparations.
            </p>
            <div className="mt-8">
              <CtaButton label="J'essaie chez moi" href="#commander" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ideas.map((i) => (
              <div
                key={i.step}
                className="rounded-md border border-amla-yellow/15 bg-amla-blue-light p-6"
              >
                <span className="font-condensed text-4xl font-bold text-amla-yellow">
                  {i.step}
                </span>
                <h3 className="mt-3 font-condensed text-xl font-semibold uppercase tracking-wide text-amla-yellow">
                  {i.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-amla-cream/75">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
