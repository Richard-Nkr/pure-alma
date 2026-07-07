import Image from "next/image";

const images = [
  { src: "/images/img12.png", alt: "Amlou ALMA" },
  { src: "/images/img1.png", alt: "Amlou ALMA" },
  { src: "/images/img5.png", alt: "Amlou ALMA" },
  { src: "/images/img6.png", alt: "Amlou ALMA" },
];

export default function MarqueImages() {
  return (
    <section className="overflow-hidden border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]">
      <div className="flex py-10 sm:py-14">
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
    </section>
  );
}
