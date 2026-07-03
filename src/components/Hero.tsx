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
        {/* image centrée */}
        <div className="absolute inset-0 flex items-center justify-center px-6 pb-10 pt-28 sm:pt-32">
          <Image
            src="/images/img9.png"
            alt="Amlou artisanal ALMA"
            width={2752}
            height={1536}
            priority
            sizes="100vw"
            className="h-auto max-h-full w-full max-w-5xl object-contain"
          />
        </div>

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
