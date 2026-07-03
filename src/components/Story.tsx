import Image from "next/image";
import Blob from "./Blob";

export default function Story() {
  return (
    <section id="produit" className="relative overflow-hidden bg-amla-blue">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-amla-yellow">
            Notre histoire
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-amla-yellow md:text-6xl">
            Née dans l&apos;Atlas, taillée pour l&apos;effort.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-amla-cream/85">
            Dans les montagnes de l&apos;Atlas, l&apos;amlou se prépare à la
            main, comme autrefois. Nous travaillons en direct avec une
            coopérative féminine d&apos;huile d&apos;argan de la région de
            Taroudant, pour une qualité irréprochable et une juste rémunération.
          </p>
          <p className="mt-4 leading-relaxed text-amla-cream/70">
            Chaque pot Pure Alma naît d&apos;un broyage lent à la meule de pierre
            — amandes grillées, huile d&apos;argan et miel de montagne — sans
            aucun ajout. Une énergie brute, directement de la terre marocaine.
          </p>

          <div className="mt-8 flex gap-8">
            {[
              { emoji: "🥜", label: "Amandes" },
              { emoji: "🫒", label: "Argan" },
              { emoji: "🍯", label: "Miel" },
            ].map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{i.emoji}</span>
                <span className="font-condensed text-xs uppercase tracking-wide text-amla-cream/80">
                  {i.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <Blob className="inset-0 m-auto h-[26rem] w-[26rem] opacity-90" color="var(--color-amla-yellow)" />
          <div
            className="relative aspect-square w-full max-w-md overflow-hidden shadow-2xl"
            style={{ borderRadius: "42% 58% 63% 37% / 42% 44% 56% 58%" }}
          >
            <Image
              src="/images/img3.png"
              alt="Amlou Pure Alma servi à table"
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
