import Image from "next/image";

const leftLinks = [
  { href: "#superfood", label: "À propos" },
  { href: "#superfood", label: "La recette" },
];

const rightLinks = [{ href: "#", label: "Contact" }];

export default function Hero() {
  return (
    <section
      id="top"
      className="rounded-t-[28px] border-[16px] border-amla-yellow bg-amla-blue sm:rounded-t-[40px] sm:border-[22px]"
    >
      <div className="relative flex h-[calc(100svh-32px)] w-full flex-col overflow-hidden rounded-t-[14px] bg-amla-blue sm:h-[calc(100svh-44px)] sm:rounded-t-[22px]">
        {/* photo 4:3 — moitié haute de l'écran */}
        <div className="relative h-full w-full shrink-0 overflow-hidden">
          <Image
            src="/images/bg12.png"
            alt="Amlou artisanal ALMA"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>

        {/* dégradé subtil pour la lisibilité de la nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amla-blue/70 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-10 px-5 py-6 sm:px-10">
          <nav className="grid grid-cols-3 items-center gap-4">
            <div className="flex items-center justify-end gap-6 sm:gap-10">
              {leftLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap font-sans text-sm font-bold uppercase tracking-[0.25em] text-amla-yellow transition-opacity hover:opacity-70 sm:text-xl"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#top"
              className="text-center font-display text-5xl leading-none text-amla-yellow sm:text-6xl lg:text-7xl"
              aria-label="AMLA"
            >
              AMLA
            </a>

            <div className="flex items-center justify-start gap-6 sm:gap-10">
              {rightLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap font-sans text-sm font-bold uppercase tracking-[0.25em] text-amla-yellow transition-opacity hover:opacity-70 sm:text-xl"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        </header>
      </div>
    </section>
  );
}
