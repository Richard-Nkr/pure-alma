import { Text } from "@astryxdesign/core/Text";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-title text-lg text-[var(--color-on-accent)]">
                A
              </span>
              <span className="font-title text-2xl text-primary">Pure Alma</span>
            </div>
            <Text as="p" color="secondary" className="mt-4 block max-w-sm">
              L&apos;amlou marocain artisanal, préparé à la main à partir
              d&apos;amandes, d&apos;huile d&apos;argan et de miel. 100% naturel,
              0% compromis.
            </Text>
          </div>

          <div>
            <Text as="p" type="label" className="uppercase">
              Boutique
            </Text>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#saveurs", label: "Nos saveurs" },
                { href: "#commander", label: "Commander" },
                { href: "#bienfaits", label: "Bienfaits" },
                { href: "#degustation", label: "Recettes" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-secondary hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text as="p" type="label" className="uppercase">
              Contact
            </Text>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              <li>bonjour@purealma.co</li>
              <li>Taroudant · Maroc</li>
              <li className="flex gap-3 pt-2">
                <a href="#top" className="hover:text-primary">Instagram</a>
                <a href="#top" className="hover:text-primary">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <Text type="supporting" color="secondary">
            © {year} Pure Alma. Tous droits réservés.
          </Text>
          <Text type="supporting" color="secondary">
            Fait avec passion entre l&apos;Atlas et votre table.
          </Text>
        </div>
      </div>
    </footer>
  );
}
