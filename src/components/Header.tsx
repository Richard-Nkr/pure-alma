"use client";

import { useState } from "react";

const links = [
  { href: "#produit", label: "Le produit" },
  { href: "#saveurs", label: "Nos saveurs" },
  { href: "#bienfaits", label: "Bienfaits" },
  { href: "#degustation", label: "Dégustation" },
  { href: "#avis", label: "Avis" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-almond/60 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-cream">
            A
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Pure&nbsp;Alma
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-navy"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#commander"
          className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-transform hover:scale-105 md:inline-block"
        >
          Commander
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-almond/60 bg-cream md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#commander"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-cream"
              >
                Commander
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
