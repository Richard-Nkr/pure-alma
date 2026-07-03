import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src="/images/img6.png"
        alt="Amlou Pure Alma aux amandes et huile d'argan"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/80" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center text-cream">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cream backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Recette berbère authentique
        </span>

        <h1 className="mt-8 font-title text-7xl leading-[0.95] text-cream drop-shadow-2xl sm:text-8xl md:text-9xl">
          Pure Alma
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
          L&apos;or tartinable du Maroc : amandes torréfiées, huile d&apos;argan
          pure et miel doré, broyés à la pierre. 100% naturel, sans additifs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#commander"
            className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-deep shadow-lg shadow-black/20 transition-transform hover:scale-105"
          >
            Commander un pot — 12€
          </a>
          <a
            href="#produit"
            className="rounded-full border border-cream/40 bg-cream/5 px-8 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/15"
          >
            Découvrir la recette
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
