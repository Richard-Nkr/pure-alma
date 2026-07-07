import Image from "next/image";

const leftLinks = [
  { href: "#formule", label: "À propos" },
  { href: "#kpis", label: "La recette" },
];

const rightLinks = [{ href: "#quotidien", label: "Contact" }];

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-amla-blue"
    >
      <div className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-amla-blue">
        {/* photo 4:3 — moitié haute de l'écran */}
        <div className="relative h-full w-full shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/bg12.png"
            alt="Amlou artisanal ALMA"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%] md:object-center"
          />
        </div>

        {/* dégradé subtil pour la lisibilité de la nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amla-blue/70 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-10 px-5 py-6 sm:px-10">
          <nav className="flex flex-col items-center gap-3 md:flex md:flex-row md:items-center md:justify-between">
            <a
              href="#top"
              className="text-center font-display text-5xl leading-none text-amla-yellow sm:text-6xl lg:text-7xl"
              aria-label="AMLA"
            >
              AMLA
            </a>

            <div className="flex items-center justify-center gap-4 sm:gap-8 md:order-none">
              {[...leftLinks, ...rightLinks].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap font-sans text-xs font-bold uppercase tracking-[0.25em] text-amla-yellow transition-opacity hover:opacity-70 sm:text-sm md:text-lg lg:text-xl"
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
