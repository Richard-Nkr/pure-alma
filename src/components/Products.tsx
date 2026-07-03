import Image from "next/image";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Card } from "@astryxdesign/core/Card";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";

const products = [
  {
    name: "Amlou Traditionnel",
    tagline: "L'original doré",
    desc: "Amandes torréfiées, huile d'argan et miel. La recette ancestrale, équilibrée et onctueuse.",
    price: "12€",
    img: "/images/img4.png",
    featured: false,
  },
  {
    name: "Amlou Intense",
    tagline: "Plus de cacao",
    desc: "Notre traditionnel relevé d'une pointe de cacao cru pour une gourmandise profonde.",
    price: "14€",
    img: "/images/img1.png",
    featured: true,
  },
  {
    name: "Amlou Nature",
    tagline: "Sans miel",
    desc: "Uniquement amandes et huile d'argan. Idéal pour les recettes salées et le sport.",
    price: "13€",
    img: "/images/img5.png",
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="saveurs" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Text as="p" type="label" color="accent">
            NOS SAVEURS
          </Text>
          <Heading level={2} type="display-2" className="mt-4">
            Trois pots, une même exigence.
          </Heading>
          <Text as="p" type="large" color="secondary" className="mt-4 block">
            Chaque variété est préparée en petits lots pour préserver les arômes.
          </Text>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.name}
              padding={0}
              variant={p.featured ? "blue" : "default"}
              className="flex flex-col overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-body">
                <Image
                  src={p.img}
                  alt={`Pot ${p.name} — Pure Alma`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
                {p.featured && (
                  <div className="absolute left-4 top-4">
                    <Badge variant="info" label="Le plus aimé" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6 text-center">
                <Heading level={3} className="text-xl">
                  {p.name}
                </Heading>
                <Text type="label" color="accent">
                  {p.tagline}
                </Text>
                <Text color="secondary" className="mt-2 block flex-1">
                  {p.desc}
                </Text>
                <div className="mt-4 flex items-center justify-between">
                  <Text type="large" weight="bold">
                    {p.price}
                  </Text>
                  <Button label="Ajouter" href="#commander" variant="primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
