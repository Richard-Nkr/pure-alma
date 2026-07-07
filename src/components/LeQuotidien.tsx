import Image from "next/image";

const images = [
  { src: "/images/img12.png", alt: "Amlou ALMA" },
  { src: "/images/img1.png", alt: "Amlou ALMA" },
  { src: "/images/img5.png", alt: "Amlou ALMA" },
  { src: "/images/img6.png", alt: "Amlou ALMA" },
];

export default function LeQuotidien() {
  return (
    <section
      id="quotidien"
      className="rounded-b-[28px] border-x-[16px] border-b-[16px] border-amla-yellow bg-amla-blue sm:rounded-b-[40px] sm:border-x-[22px] sm:border-b-[22px]"
    >
      <div className="mx-auto max-w-3xl px-6 pt-20 text-center sm:px-10 sm:pt-28">
        <p
          className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
        >
          Le Quotidien
        </p>
        <h2
          className="mx-auto mt-4 max-w-2xl text-center font-condensed font-bold uppercase tracking-tight text-amla-yellow"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
        >
          <span className="block">Dans Votre</span>
          <span className="block">Quotidien</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-amla-cream/80">
          L&apos;alternative saine pour vos rituels culinaires.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-amla-cream/80">
          Étalez-le généreusement sur du pain chaud ou des crêpes au
          petit-déjeuner. Glissez-en une cuillère dans vos yaourts et smoothies,
          ou utilisez-le pour sublimer vos pâtisseries maison. Une expérience
          gustative authentique à chaque cuillère.
        </p>

        <a
          href="#"
          className="mt-12 inline-block rounded-xl bg-amla-yellow px-10 py-4 font-condensed text-xl font-bold uppercase tracking-wide text-amla-blue transition-transform hover:scale-105"
        >
          Je commande mon pot
        </a>
      </div>

      {/* Défilé d'images */}
      <div className="mt-16 overflow-hidden pb-14 sm:pb-20">
        <div className="flex">
          <div className="animate-marquee flex shrink-0 gap-6 sm:gap-8">
            {images.map((img, i) => (
              <div
                key={`a-${i}`}
                className="relative aspect-[4/5] h-48 shrink-0 overflow-hidden rounded-2xl border-[4px] border-amla-yellow sm:h-64 sm:border-[6px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
            ))}
            {images.map((img, i) => (
              <div
                key={`b-${i}`}
                className="relative aspect-[4/5] h-48 shrink-0 overflow-hidden rounded-2xl border-[4px] border-amla-yellow sm:h-64 sm:border-[6px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
