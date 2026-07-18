"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";

const navLinks = [
  { href: "#formule", label: "La recette" },
  { href: "#kpis", label: "Bienfaits" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [preorderCount, setPreorderCount] = useState(137);
  const preorderMax = 500;

  // Fetch du compteur au montage
  useEffect(() => {
    fetch("/api/preorders")
      .then((r) => r.json())
      .then((d) => setPreorderCount(d.count))
      .catch(() => {});
  }, []);

  // Écoute l'événement émis par LeQuotidien après chaque inscription
  useEffect(() => {
    function onUpdate(e: CustomEvent<number>) {
      setPreorderCount(e.detail);
    }
    window.addEventListener("preorder:updated", onUpdate as EventListener);
    return () =>
      window.removeEventListener("preorder:updated", onUpdate as EventListener);
  }, []);

  return (
    <section id="top" className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-amla-blue">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg12.jpg"
          alt="Amlou artisanal AMLA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%] md:object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-amla-blue/80 via-amla-blue/20 to-amla-blue/50" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-amla-blue/70 via-amla-blue/25 to-transparent md:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amla-blue to-transparent" />
      </div>

      {/* Nav */}
      <header className="animate-hero-nav relative z-50 px-5 py-6 sm:px-10">
        <nav className="flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-5xl leading-none text-amla-yellow sm:text-6xl"
            aria-label="AMLA"
          >
            AMLA
          </a>

          {/* Liens desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-amla-yellow/90 transition-all hover:text-amla-yellow hover:tracking-[0.3em] sm:text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quotidien"
              className="rounded-full bg-amla-yellow px-6 py-2.5 font-condensed text-sm font-bold uppercase tracking-wide text-amla-blue shadow-lg shadow-amla-yellow/20 transition-transform hover:scale-105"
            >
              Commander
            </a>
          </div>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-xl md:hidden"
          >
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-amla-yellow transition-transform duration-300 ${
                menuOpen ? "translate-y-[9.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-amla-yellow transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-7 rounded-full bg-amla-yellow transition-transform duration-300 ${
                menuOpen ? "-translate-y-[9.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-amla-blue/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {navLinks.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className={`font-condensed text-3xl font-bold uppercase tracking-[0.15em] text-amla-yellow transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? `${100 + i * 80}ms` : "0ms" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#quotidien"
          onClick={() => setMenuOpen(false)}
          className={`rounded-full bg-amla-yellow px-10 py-4 font-condensed text-2xl font-bold uppercase tracking-wide text-amla-blue shadow-lg shadow-amla-yellow/20 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? `${100 + navLinks.length * 80}ms` : "0ms" }}
        >
          Commander
        </a>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center px-5 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center md:items-start md:text-left">
          <p className="animate-hero-sub font-condensed text-sm font-bold uppercase tracking-[0.35em] text-amla-yellow/80 sm:text-base">
            Pâte à tartiner marocaine · 100% naturel
          </p>
          <h1 className="animate-hero-title mt-4 font-condensed text-6xl font-bold uppercase leading-none tracking-tight text-amla-yellow sm:text-8xl lg:text-[8.5rem]">
            L&apos;Amlou<br />
            <span className="text-amla-cream">de l&apos;Atlas</span>
          </h1>
          <div className="animate-hero-cta mt-10 flex flex-col items-center gap-3 md:items-start">
            <CtaButton
              label="Commander mon pot"
              href="#quotidien"
              size="lg"
              className="btn-shine px-10 py-5 text-lg shadow-xl shadow-amla-yellow/25"
            />
            <p className="font-condensed text-sm font-bold uppercase tracking-[0.3em] text-amla-cream/80">
              Précommande
            </p>
          </div>

          {/* Jauge de précommande */}
          <div
            className="animate-hero-cta mt-8 w-full max-w-sm rounded-2xl border border-amla-yellow/40 bg-amla-blue/70 p-4 backdrop-blur-md sm:max-w-md sm:p-5"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-condensed text-2xl font-bold text-amla-yellow sm:text-3xl">
                {preorderCount}
                <span className="text-base font-normal text-amla-cream/70 sm:text-lg">
                  /{preorderMax}
                </span>
              </span>
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-amla-cream/80">
                pots réservés
              </span>
            </div>
            {/* Jauge */}
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-amla-blue-light/40 sm:h-3">
              <div
                className="h-full rounded-full bg-amla-yellow shadow-[0_0_8px_rgba(242,183,5,0.35)] transition-all duration-1000"
                style={{ width: `${(preorderCount / preorderMax) * 100}%` }}
              />
            </div>
            <p className="mt-2 font-sans text-xs text-amla-cream/50">
              Précommande limitée — plus que {preorderMax - preorderCount} pots disponibles
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-hero-arrow relative z-10 flex justify-center pb-8">
        <a href="#formule" aria-label="Défiler" className="flex flex-col items-center gap-2">
          <span className="font-condensed text-xs uppercase tracking-widest text-amla-yellow/60">
            Découvrir
          </span>
          <svg
            className="animate-scroll-bounce h-6 w-6 text-amla-yellow/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
