import Image from "next/image";
import CtaButton from "./CtaButton";
import Blob from "./Blob";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-amla-blue"
    >
      <Image
        src="/images/img6.png"
        alt="Amlou Pure Alma aux amandes et huile d'argan"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amla-blue/80 via-amla-blue/55 to-amla-blue/90" />

      <Blob className="left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 opacity-20 blur-2xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amla-yellow/50 bg-amla-yellow/10 px-4 py-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-amla-yellow">
          <span className="h-1.5 w-1.5 rounded-full bg-amla-yellow" />
          Le carburant naturel des sportifs
        </span>

        <h1 className="mt-8 font-display text-7xl leading-[0.95] text-white drop-shadow-2xl sm:text-8xl md:text-9xl">
          Pure Alma
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
          L&apos;amlou marocain, ta réserve d&apos;énergie 100% naturelle :
          amandes torréfiées, huile d&apos;argan pure et miel. Avant le run,
          après l&apos;effort, ou juste pour le plaisir.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton label="Commander un pot — 12€" href="#commander" />
          <CtaButton label="Découvrir la recette" href="#produit" variant="outline" />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-condensed text-sm font-medium uppercase tracking-wider text-white/80">
          <span>340g</span>
          <span className="h-3 w-px bg-white/30" />
          <span>100% naturel</span>
          <span className="h-3 w-px bg-white/30" />
          <span>Sans sucre ajouté</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-amla-yellow/80">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
