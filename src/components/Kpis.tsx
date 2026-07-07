import Image from "next/image";

const bienfaits = [
  {
    title: "Boost Protéiné",
    desc: "20g de protéines végétales pour 100g, issues des amandes torréfiées. Soutien musculaire et satiété.",
  },
  {
    title: "Lipides Sains",
    desc: "Oméga 6 & 9 de l'huile d'argan et des amandes. Carburant naturel pour l'endurance.",
  },
  {
    title: "Vitamine E",
    desc: "L'huile d'argan en concentre des niveaux exceptionnels. Bouclier antioxydant puissant.",
  },
  {
    title: "Zéro Sucre Raffiné",
    desc: "Uniquement le miel de montagne. Énergie longue durée sans crash glycémique.",
  },
];

const stagger = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export default function Kpis() {
  return (
    <section id="kpis" className="relative overflow-hidden bg-amla-blue">
      <Image
        src="/images/img16.png"
        alt="Amlou ALMA"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* voile pour la lisibilité des cartes */}
      <div className="absolute inset-0 bg-gradient-to-b from-amla-blue/70 via-transparent to-amla-blue/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <h2
          className="reveal mx-auto max-w-2xl text-center font-condensed font-bold uppercase tracking-tight text-amla-yellow"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
        >
          <span className="block">Le superfood</span>
          <span className="block">Marocain</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {bienfaits.map((b, idx) => (
            <div
              key={b.title}
              className={`reveal ${stagger[idx]} group rounded-3xl border border-amla-yellow/10 bg-amla-blue/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amla-yellow/40 hover:bg-amla-blue/80 hover:shadow-xl hover:shadow-amla-blue-deep/40 sm:p-8`}
            >
              <h3 className="font-condensed text-3xl font-bold uppercase leading-tight tracking-wide text-amla-yellow sm:text-4xl">
                {b.title}
              </h3>
              <p className="mt-3 leading-relaxed text-amla-cream/80">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
