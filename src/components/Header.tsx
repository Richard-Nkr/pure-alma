"use client";

import { useState } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

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
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2" aria-label="ALMA">
          <span className="block h-12 w-12 overflow-hidden rounded-full ring-1 ring-amla-yellow/30">
            <Image
              src="/logo.png"
              alt="ALMA"
              width={48}
              height={48}
              className="h-12 w-12 object-cover"
              priority
            />
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-condensed text-sm font-medium uppercase tracking-wide text-amla-yellow/85 transition-colors hover:text-amla-yellow"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CtaButton label="Commander" href="#commander" size="md" />
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-amla-yellow md:hidden"
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
        <div className="border-t border-amla-yellow/15 bg-amla-blue-deep md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-condensed text-sm font-medium uppercase tracking-wide text-amla-yellow/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CtaButton label="Commander" href="#commander" size="md" className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
