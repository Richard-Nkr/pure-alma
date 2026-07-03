import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Card } from "@astryxdesign/core/Card";

const reviews = [
  {
    quote:
      "Je retrouve enfin le goût de l'amlou de ma grand-mère à Agadir. Texture parfaite, ni trop sucré ni trop liquide.",
    name: "Yasmine B.",
    role: "Cliente depuis 2023",
  },
  {
    quote:
      "La version Intense au cacao est devenue un incontournable de mes petits-déjeuners. On sent la qualité de l'argan.",
    name: "Thomas L.",
    role: "Chroniqueur food",
  },
  {
    quote:
      "Enfin une tartinade saine que mes enfants adorent. Trois ingrédients, zéro cochonnerie. Bravo Pure Alma !",
    name: "Sofia M.",
    role: "Maman de deux gourmands",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--color-warning)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="bg-body">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Text as="p" type="label" color="accent">
            ILS EN RAFFOLENT
          </Text>
          <Heading level={2} type="display-2" className="mt-4">
            Noté 4,9/5 par nos gourmands.
          </Heading>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} padding={6} className="flex flex-col">
              <Stars />
              <Text as="p" type="large" className="mt-4 block flex-1">
                “{r.quote}”
              </Text>
              <div className="mt-6">
                <Text as="p" weight="semibold">
                  {r.name}
                </Text>
                <Text as="p" type="supporting" color="secondary">
                  {r.role}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
