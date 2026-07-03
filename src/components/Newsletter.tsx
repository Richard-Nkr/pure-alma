"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="commander" className="mx-auto max-w-6xl px-5 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta to-amber-deep px-6 py-16 text-center text-cream sm:px-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-honey/30 blur-2xl" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Recevez votre premier pot.
          </h2>
          <p className="mt-4 text-cream/85">
            Inscrivez-vous et profitez de <strong>-10%</strong> sur votre
            première commande, plus nos recettes exclusives à l&apos;amlou.
          </p>

          {sent ? (
            <p className="mx-auto mt-8 max-w-sm rounded-full bg-cream/15 px-6 py-4 font-semibold">
              Merci&nbsp;! Vérifiez votre boîte mail pour votre code de -10%. 🎉
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full rounded-full border-0 px-6 py-3.5 text-cacao placeholder:text-cacao/40 focus:outline-none focus:ring-2 focus:ring-cream"
              />
              <button
                type="submit"
                className="rounded-full bg-cacao px-7 py-3.5 font-semibold text-cream transition-transform hover:scale-105"
              >
                J&apos;en profite
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-cream/60">
            Livraison offerte dès 3 pots · Paiement sécurisé · Satisfait ou
            remboursé
          </p>
        </div>
      </div>
    </section>
  );
}
