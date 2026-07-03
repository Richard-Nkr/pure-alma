import Image from "next/image";
import { Button } from "@astryxdesign/core/Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/img6.png"
        alt="Amlou Pure Alma aux amandes et huile d'argan"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Recette berbère authentique
        </span>

        <h1 className="mt-8 font-title text-7xl leading-[0.95] text-white drop-shadow-2xl sm:text-8xl md:text-9xl">
          Pure Alma
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
          L&apos;or tartinable du Maroc : amandes torréfiées, huile d&apos;argan
          pure et miel doré, broyés à la pierre. 100% naturel, sans additifs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            label="Commander un pot — 12€"
            href="#commander"
            variant="primary"
            size="lg"
          />
          <Button
            label="Découvrir la recette"
            href="#produit"
            variant="secondary"
            size="lg"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
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
