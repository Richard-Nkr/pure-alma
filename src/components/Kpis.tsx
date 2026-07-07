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

export default function Kpis() {
 return (
  <section
   id="kpis"
   className="relative bg-amla-blue"
  >
   <Image
    src="/images/img14.png"
        alt="Amlou ALMA"
        fill
        sizes="100vw"
        className="rounded-3xl object-cover"
      />

   <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14">
    <h2
     className="mx-auto mt-4 max-w-2xl text-center font-condensed font-bold uppercase tracking-tight text-amla-yellow"
     style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", lineHeight: 1.05 }}
    >
     <span className="block">Quelques</span>
     <span className="block">Bienfaits</span>
    </h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
     {bienfaits.map((b) => (
      <div
       key={b.title}
       className="rounded-3xl bg-amla-blue/60 p-6 backdrop-blur-sm sm:p-8"
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
