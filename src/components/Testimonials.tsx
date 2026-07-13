const reviews = [
  {
    quote:
      "Je retrouve enfin le goût de l'amlou de ma grand-mère à Agadir. Texture parfaite, ni trop sucré ni trop liquide.",
    name: "Yasmine B.",
    role: "Cliente depuis 2023",
  },
  {
    quote:
      "Ma cuillère d'avant-course. Énergie longue durée sans lourdeur, et la version Intense au cacao est top.",
    name: "Thomas L.",
    role: "Traileur amateur",
  },
  {
    quote:
      "Enfin une tartinade saine que mes enfants adorent. Trois ingrédients, zéro cochonnerie. Bravo AMLA !",
    name: "Sofia M.",
    role: "Maman de deux gourmands",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amla-yellow">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="bg-amla-blue">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p
            className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
            style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
          >
            Ils en raffolent
          </p>
          <h2
            className="mt-4 font-condensed font-bold uppercase tracking-tight text-amla-yellow"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
          >
            Noté 4,9/5 par nos gourmands
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <figure
              key={r.name}
              className={`reveal stagger-${idx + 1} flex flex-col rounded-3xl border border-amla-yellow/15 bg-amla-blue-light p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-amla-yellow/40 hover:shadow-xl hover:shadow-amla-blue-deep/40`}
            >
              <Stars />
              <blockquote className="mt-4 flex-1 leading-relaxed text-amla-cream/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-condensed font-semibold uppercase tracking-wide text-amla-yellow">
                  {r.name}
                </p>
                <p className="text-sm text-amla-cream/50">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
