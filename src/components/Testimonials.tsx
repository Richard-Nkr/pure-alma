const reviews = [
  {
    quote:
      "Je retrouve enfin le goût de l'amlou de ma grand-mère à Agadir. Texture parfaite, ni trop sucré ni trop liquide.",
    name: "Yasmine B.",
    role: "Cliente depuis 2023",
  },
  {
    quote:
      "La version Intense au cacao est devenue un incontournable de mes petits-déjeuners. On sent la qualité de l'argan.",
    name: "Thomas L.",
    role: "Chroniqueur food",
  },
  {
    quote:
      "Enfin une tartinade saine que mes enfants adorent. Trois ingrédients, zéro cochonnerie. Bravo Pure Alma !",
    name: "Sofia M.",
    role: "Maman de deux gourmands",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-honey">
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
    <section id="avis" className="bg-cacao text-cream">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-honey">
            Ils en raffolent
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Noté 4,9/5 par nos gourmands.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-cream/10 bg-cream/5 p-7"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-cream/85 leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-cream">{r.name}</p>
                <p className="text-sm text-cream/50">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
