import Image from "next/image";

export default function Story() {
  return (
    <section id="produit" className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Notre histoire
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Une recette gardée
            <br />
            <span className="text-gold">depuis des générations.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            Dans les montagnes de l&apos;Atlas, l&apos;amlou se prépare à la
            main, comme autrefois. Nous avons noué un partenariat direct avec
            une coopérative féminine d&apos;huile d&apos;argan de la région de
            Taroudant, garantissant une qualité irréprochable et une juste
            rémunération.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            Chaque pot de Pure Alma est le fruit d&apos;un broyage lent à la
            meule de pierre — amandes grillées, huile d&apos;argan et miel de
            montagne — sans aucun ajout. Juste la pureté de la terre marocaine.
          </p>

          <div className="mt-8 flex gap-8">
            {[
              { emoji: "🥜", label: "Amandes" },
              { emoji: "🫒", label: "Argan" },
              { emoji: "🍯", label: "Miel" },
            ].map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{i.emoji}</span>
                <span className="text-xs text-cream/60">{i.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-cream/10 shadow-2xl">
          <Image
            src="/images/img3.png"
            alt="Amlou Pure Alma servi à table"
            fill
            sizes="(max-width: 768px) 90vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
