import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-azure/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center md:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-almond bg-sand/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-navy" />
          Recette berbère authentique
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl">
          L&apos;amlou,
          <br />
          <span className="text-gold-deep">l&apos;or tartinable</span> du Maroc.
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          Amandes torréfiées, huile d&apos;argan pure et miel doré, broyés à la
          pierre. Une pâte à tartiner 100% naturelle, sans sucre ajouté ni
          additifs.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#commander"
            className="rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-navy/20 transition-transform hover:scale-105"
          >
            Commander un pot — 12€
          </a>
          <a
            href="#produit"
            className="rounded-full border border-navy/25 px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-sand"
          >
            Découvrir la recette
          </a>
        </div>

        <div className="relative mt-14 flex w-full justify-center">
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-br from-azure/30 to-gold/25 blur-2xl" />
          <div className="animate-float relative aspect-square w-full max-w-2xl overflow-hidden rounded-[2rem] border-4 border-cream shadow-2xl">
            <Image
              src="/images/img6.png"
              alt="Pot d'amlou Pure Alma aux amandes et huile d'argan"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 672px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="flex -space-x-2">
            {["#c9a227", "#123a7e", "#2f6fbf", "#0a1f47"].map((c) => (
              <span
                key={c}
                className="h-9 w-9 rounded-full border-2 border-cream"
                style={{ background: c }}
              />
            ))}
          </div>
          <p className="text-left text-sm text-ink-soft">
            <span className="font-bold text-ink">+2 400 gourmands</span>
            <br />
            conquis cette année
          </p>
        </div>
      </div>
    </section>
  );
}
