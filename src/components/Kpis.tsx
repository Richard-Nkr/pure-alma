"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
};

const kpis: Stat[] = [
  {
    value: 20,
    suffix: "g",
    label: "Protéines",
    sub: "par 100g",
  },
  {
    value: 80,
    prefix: "+",
    suffix: "%",
    label: "Bons Lipides",
    sub: "Oméga 6 & 9",
  },
  {
    value: 3,
    prefix: "",
    suffix: "×",
    label: "Vitamine E",
    sub: "vs huile d'olive",
  },
  {
    value: 0,
    label: "Sucre Raffiné",
    sub: "miel pur uniquement",
  },
];

export default function Kpis() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="kpis"
      className="border-x-[16px] border-amla-yellow bg-amla-blue sm:border-x-[22px]"
    >
      <div ref={ref} className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <p
          className="text-center font-condensed font-bold uppercase tracking-[0.3em] text-amla-yellow"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.875rem)" }}
        >
          L&apos;ÉNERGIE EN CHIFFRES
        </p>
        <h2
          className="mx-auto mt-4 max-w-2xl text-center font-condensed font-bold uppercase tracking-tight text-amla-yellow"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
        >
          <span className="block">Quelques</span>
          <span className="block">Chiffres clés</span>
        </h2>

        <div className="mx-auto mt-14 max-w-sm overflow-hidden rounded-3xl border-[6px] border-amla-yellow sm:border-[10px]">
          <div className="relative aspect-square">
            <Image
              src="/images/img12.png"
              alt="Amlou artisanal ALMA"
              fill
              sizes="(max-width: 768px) 90vw, 384px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="text-center">
              <span className="block font-condensed text-5xl font-bold leading-none text-amla-yellow sm:text-7xl lg:text-8xl">
                {start ? (
                  <CountUp
                    end={k.value}
                    prefix={k.prefix ?? ""}
                    suffix={k.suffix ?? ""}
                    duration={1}
                    useEasing
                  />
                ) : (
                  <>{k.prefix ?? ""}0{k.suffix ?? ""}</>
                )}
              </span>
              <span className="mt-2 block font-condensed text-xl font-bold uppercase tracking-wide text-amla-cream sm:text-2xl">
                {k.label}
              </span>
              <span className="mt-1 block font-condensed text-base uppercase tracking-wider text-amla-cream/50 sm:text-lg">
                {k.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
