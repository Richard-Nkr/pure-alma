import Image from "next/image";

const leftLinks = [
  { href: "#produit", label: "À propos" },
  { href: "#degustation", label: "La recette" },
];

const rightLinks = [
  { href: "#saveurs", label: "Points de vente" },
  { href: "#commander", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-amla-yellow transition-opacity hover:opacity-70"
    >
      {label}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="border-[16px] border-amla-yellow bg-amla-blue sm:border-[22px]"
    >
      <div className="relative h-[calc(100svh-32px)] w-full overflow-hidden bg-amla-blue sm:h-[calc(100svh-44px)]">
        <Image
          src="/images/img8.png"
          alt="Une cuillère en bois dégoulinante d'amlou ALMA au-dessus du pot"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />

        {/* dégradé subtil pour la lisibilité de la nav */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amla-blue/60 to-transparent" />

        <header className="absolute inset-x-0 top-0 z-10 px-6 py-6 sm:px-10">
          {/* Desktop : liens de part et d'autre du logo centré */}
          <nav className="hidden grid-cols-3 items-center md:grid">
            <div className="flex items-center gap-8">
              {leftLinks.map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </div>

            <a
              href="#top"
              className="text-center font-display text-5xl leading-none text-amla-yellow lg:text-6xl"
              aria-label="AMLA"
            >
              AMLA
            </a>

            <div className="flex items-center justify-end gap-8">
              {rightLinks.map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </div>
          </nav>

          {/* Mobile : logo centré + liens en dessous */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <a
              href="#top"
              className="font-display text-5xl leading-none text-amla-yellow"
              aria-label="AMLA"
            >
              AMLA
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[...leftLinks, ...rightLinks].map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
