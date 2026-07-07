"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
 { src: "/images/img12.png", alt: "Amlou ALMA" },
 { src: "/images/img1.png", alt: "Amlou ALMA" },
 { src: "/images/img5.png", alt: "Amlou ALMA" },
 { src: "/images/img6.png", alt: "Amlou ALMA" },
 { src: "/images/img3.png", alt: "Amlou ALMA" },
];

export default function LeQuotidien() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
  <section
   id="quotidien"
   className="bg-amla-blue"
  >
   <div className="mx-auto max-w-3xl px-6 pt-20 text-center sm:px-10 sm:pt-28">
    <p
     className="font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
     style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
    >
     Le Quotidien
    </p>

    <p className="mx-auto mt-8 max-w-2xl text-center font-condensed text-xl font-bold uppercase tracking-wide text-amla-yellow sm:text-2xl">
     Avec vos yaourts et smoothies, sur vos crêpes, sur du pain chaud ou
     dans vos pâtisseries maison.
    </p>

        {sent ? (
          <p className="mt-12 text-center font-condensed text-lg font-bold uppercase tracking-wide text-amla-yellow">
            Merci ! On vous tient au courant.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full rounded-xl border-0 px-5 py-4 text-amla-blue placeholder:text-amla-blue/40 focus:outline-none focus:ring-2 focus:ring-amla-yellow"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-amla-blue px-8 py-4 font-condensed text-lg font-bold uppercase tracking-wide text-amla-yellow transition-transform hover:scale-105"
            >
              Je commande mon pot
            </button>
          </form>
        )}
   </div>

   {/* Défilé d'images */}
   <div className="mt-16 overflow-hidden pb-14 sm:pb-20">
    <div className="flex">
     <div className="animate-marquee flex shrink-0 gap-6 sm:gap-8">
      {images.map((img, i) => (
       <div
        key={`a-${i}`}
                className="relative aspect-[4/5] h-72 shrink-0 overflow-hidden rounded-3xl sm:h-96"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            ))}
            {images.map((img, i) => (
              <div
                key={`b-${i}`}
                className="relative aspect-[4/5] h-72 shrink-0 overflow-hidden rounded-3xl sm:h-96"
       >
        <Image
         src={img.src}
         alt={img.alt}
         fill
         sizes="288px"
         className="object-cover"
        />
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}
