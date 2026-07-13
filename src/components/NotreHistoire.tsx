import Image from "next/image";

export default function NotreHistoire() {
  return (
    <section id="histoire" className="bg-amla-blue">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-40">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="reveal-left relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl">
            <Image
              src="/images/img15.png"
              alt="AMLA au cœur du Maroc"
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="reveal-right">
            <p
              className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
              style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
            >
              Notre histoire
            </p>
            <h2
              className="mt-4 font-condensed font-bold uppercase tracking-tight text-amla-yellow"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.25rem)", lineHeight: 1.05 }}
            >
              Trop bon pour<br />rester secret
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-amla-cream/85 sm:text-2xl sm:leading-relaxed">
              Chez elle, dans le Souss, l&apos;amlou était sur la table{" "}
              <strong className="text-amla-yellow">chaque matin, tiède sur le pain</strong>.
              Le jour où il y a goûté — ce parfum d&apos;amande grillée, cette
              douceur de miel — <strong className="text-amla-yellow">il a compris pourquoi</strong>.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-amla-cream/85 sm:text-2xl sm:leading-relaxed">
              AMLA est né de cette envie simple :{" "}
              <strong className="text-amla-yellow">partager ce rituel avec vous, sans le trahir</strong>.
              Des amandes grillées, de l&apos;huile d&apos;argan, du miel de
              montagne. Rien d&apos;autre, comme là-bas.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-amla-cream/85 sm:text-2xl sm:leading-relaxed">
              <strong className="text-amla-yellow">Demain matin, il peut être sur votre table.</strong>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
