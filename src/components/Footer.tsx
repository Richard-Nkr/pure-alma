export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-amla-blue-deep">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amla-yellow font-display text-lg text-amla-blue">
                A
              </span>
              <span className="font-display text-2xl text-white">Pure Alma</span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-white/70">
              L&apos;amlou marocain artisanal, préparé à la main à partir
              d&apos;amandes, d&apos;huile d&apos;argan et de miel. 100% naturel,
              0% compromis.
            </p>
          </div>

          <div>
            <h3 className="font-condensed text-sm font-semibold uppercase tracking-wider text-amla-yellow">
              Boutique
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#saveurs" className="hover:text-amla-yellow">Nos saveurs</a></li>
              <li><a href="#commander" className="hover:text-amla-yellow">Commander</a></li>
              <li><a href="#bienfaits" className="hover:text-amla-yellow">Bienfaits</a></li>
              <li><a href="#degustation" className="hover:text-amla-yellow">Recettes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-condensed text-sm font-semibold uppercase tracking-wider text-amla-yellow">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>bonjour@purealma.co</li>
              <li>Taroudant · Maroc</li>
              <li className="flex gap-3 pt-2">
                <a href="#top" className="hover:text-amla-yellow">Instagram</a>
                <a href="#top" className="hover:text-amla-yellow">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 font-condensed text-xs uppercase tracking-wide text-white/50 sm:flex-row">
          <p>© {year} Pure Alma. Tous droits réservés.</p>
          <p>Fait avec passion entre l&apos;Atlas et votre table.</p>
        </div>
      </div>
    </footer>
  );
}
