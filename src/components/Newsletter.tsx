"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";
import Blob from "./Blob";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="commander" className="bg-amla-blue">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="relative overflow-hidden rounded-md bg-amla-blue-light px-6 py-16 text-center ring-1 ring-amla-yellow/20 sm:px-16">
          <Blob className="-right-16 -top-16 h-64 w-64 opacity-25" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-5xl leading-tight text-amla-yellow md:text-6xl">
              Reçois ton premier pot.
            </h2>
            <p className="mt-4 text-lg text-amla-cream/85">
              Inscris-toi et profite de <strong className="text-amla-yellow">-10%</strong>{" "}
              sur ta première commande, plus nos recettes et routines à
              l&apos;amlou.
            </p>

            {sent ? (
              <p className="mx-auto mt-8 max-w-sm rounded-md bg-white/10 px-6 py-4 font-condensed font-semibold uppercase tracking-wide text-amla-yellow">
                Merci ! Vérifie ta boîte mail pour ton code de -10%.
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
                  placeholder="ton@email.com"
                  className="w-full rounded-md border-0 px-6 py-4 text-amla-text placeholder:text-amla-text/40 focus:outline-none focus:ring-2 focus:ring-amla-yellow"
                />
                <CtaButton label="J'en profite" type="submit" />
              </form>
            )}

            <p className="mt-4 font-condensed text-xs uppercase tracking-wide text-amla-cream/60">
              Livraison offerte dès 3 pots · Paiement sécurisé · Satisfait ou remboursé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
