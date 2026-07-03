import Image from "next/image";

const links = [
  { href: "#", label: "À propos" },
  { href: "#", label: "La recette" },
  { href: "#", label: "Contact" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="border-[16px] border-amla-yellow bg-amla-blue sm:border-[22px]"
    >
      <div className="relative h-[calc(100svh-32px)] w-full overflow-hidden bg-amla-blue sm:h-[calc(100svh-44px)]">
        <Image
          src="/images/img9.png"
          alt="Amlou artisanal ALMA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* dégradé subtil pour la lisibilité de la nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amla-blue/70 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-10 px-5 py-6 sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="font-display text-4xl leading-none text-amla-yellow sm:text-5xl"
              aria-label="AMLA"
            >
              AMLA
            </a>

            <nav className="flex items-center gap-4 sm:gap-8">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="whitespace-nowrap font-sans text-sm font-bold uppercase tracking-tight text-amla-yellow transition-opacity hover:opacity-70 sm:text-lg"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
      </div>
    </section>
  );
}
