import AmlouJar from "./AmlouJar";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-honey/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-almond bg-sand/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Recette berbère authentique
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-cacao sm:text-6xl">
            L&apos;amlou,
            <br />
            <span className="text-terracotta">l&apos;or tartinable</span> du Maroc.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-cacao-soft">
            Amandes torréfiées, huile d&apos;argan pure et miel doré, broyés à la
            pierre. Une pâte à tartiner 100% naturelle, sans sucre ajouté ni
            additifs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#commander"
              className="rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-terracotta/20 transition-transform hover:scale-105"
            >
              Commander un pot — 12€
            </a>
            <a
              href="#produit"
              className="rounded-full border border-cacao/20 px-7 py-3.5 text-base font-semibold text-cacao transition-colors hover:bg-sand"
            >
              Découvrir la recette
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#e0a32e", "#b0532f", "#7c7a3f", "#5b4636"].map((c) => (
                <span
                  key={c}
                  className="h-9 w-9 rounded-full border-2 border-cream"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-cacao-soft">
              <span className="font-bold text-cacao">+2 400 gourmands</span>
              <br />
              conquis cette année
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-br from-honey/40 to-terracotta/20 blur-2xl" />
          <AmlouJar className="animate-float relative h-[420px] w-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
