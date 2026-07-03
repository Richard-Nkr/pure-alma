export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-almond/60 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-cream">
                A
              </span>
              <span className="font-display text-xl font-bold text-ink">
                Pure Alma
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              L&apos;amlou marocain artisanal, préparé à la main à partir
              d&apos;amandes, d&apos;huile d&apos;argan et de miel. 100%
              naturel, 0% compromis.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Boutique
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href="#saveurs" className="hover:text-navy">Nos saveurs</a></li>
              <li><a href="#commander" className="hover:text-navy">Commander</a></li>
              <li><a href="#bienfaits" className="hover:text-navy">Bienfaits</a></li>
              <li><a href="#degustation" className="hover:text-navy">Recettes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>bonjour@purealma.co</li>
              <li>Taroudant · Maroc</li>
              <li className="flex gap-3 pt-2">
                <a href="#top" aria-label="Instagram" className="hover:text-navy">Instagram</a>
                <a href="#top" aria-label="Facebook" className="hover:text-navy">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-almond/60 pt-6 text-xs text-ink-soft sm:flex-row">
          <p>© {year} Pure Alma. Tous droits réservés.</p>
          <p>Fait avec passion entre l&apos;Atlas et votre table.</p>
        </div>
      </div>
    </footer>
  );
}
