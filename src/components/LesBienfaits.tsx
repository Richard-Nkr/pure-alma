const bienfaits = [
  {
    title: "Soutien Cardiovasculaire",
    desc: "Les acides gras insaturés de l'huile d'argan et des amandes contribuent à fluidifier la circulation sanguine.",
  },
  {
    title: "Récupération Musculaire",
    desc: "L'apport combiné en protéines végétales et en magnésium naturel aide à la reconstruction post-effort et réduit la fatigue.",
  },
  {
    title: "Bouclier Cellulaire",
    desc: "La richesse exceptionnelle en Vitamine E et en antioxydants protège l'organisme du stress oxydatif.",
  },
  {
    title: "Vitalité Durable",
    desc: "Le miel cru offre une énergie immédiate, tandis que les bons lipides assurent une diffusion lente et constante.",
  },
];

export default function LesBienfaits() {
  return (
    <section
      id="bienfaits"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <p
          className="text-center font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
        >
          Corps & Performance
        </p>
        <h2
          className="mx-auto mt-4 max-w-2xl text-center font-sans font-extrabold leading-[1.05] tracking-tight text-amla-cream"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3rem)" }}
        >
          LA PERFORMANCE
          <br />
          <span className="text-amla-yellow">AU NATUREL</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-amla-cream/80">
          L&apos;amlou est bien plus qu&apos;une gourmandise, c&apos;est une synergie
          nutritionnelle ancestrale qui répond aux besoins du corps.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {bienfaits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-amla-yellow/20 bg-amla-blue-light p-6 sm:p-8"
            >
              <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-amla-yellow">
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
