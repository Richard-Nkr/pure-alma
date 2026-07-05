export default function LeQuotidien() {
  return (
    <section
      id="quotidien"
      className="rounded-b-[28px] border-x-[16px] border-b-[16px] border-amla-yellow bg-amla-blue sm:rounded-b-[40px] sm:border-x-[22px] sm:border-b-[22px]"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
        <p
          className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
        >
          Le Quotidien
        </p>
        <h2
          className="mx-auto mt-4 max-w-2xl font-sans font-extrabold leading-[1.05] tracking-tight text-amla-cream"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3rem)" }}
        >
          DANS VOTRE
          <br />
          <span className="text-amla-yellow">QUOTIDIEN</span>
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
          className="mt-12 inline-block rounded-md bg-amla-yellow px-10 py-4 font-condensed text-xl font-bold uppercase tracking-wide text-amla-blue transition-transform hover:scale-105"
        >
          Je commande mon pot
        </a>
      </div>
    </section>
  );
}
