import Image from "next/image";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";

export default function Story() {
  return (
    <section id="produit" className="bg-body">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <Text as="p" type="label" color="accent">
            NOTRE HISTOIRE
          </Text>
          <Heading level={2} type="display-2" className="mt-4">
            Une recette gardée depuis des générations.
          </Heading>
          <Text as="p" type="large" color="secondary" className="mt-6 block">
            Dans les montagnes de l&apos;Atlas, l&apos;amlou se prépare à la
            main, comme autrefois. Nous avons noué un partenariat direct avec une
            coopérative féminine d&apos;huile d&apos;argan de la région de
            Taroudant, garantissant une qualité irréprochable et une juste
            rémunération.
          </Text>
          <Text as="p" color="secondary" className="mt-4 block">
            Chaque pot de Pure Alma est le fruit d&apos;un broyage lent à la
            meule de pierre — amandes grillées, huile d&apos;argan et miel de
            montagne — sans aucun ajout. Juste la pureté de la terre marocaine.
          </Text>

          <div className="mt-8 flex gap-8">
            {[
              { emoji: "🥜", label: "Amandes" },
              { emoji: "🫒", label: "Argan" },
              { emoji: "🍯", label: "Miel" },
            ].map((i) => (
              <div key={i.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{i.emoji}</span>
                <Text type="supporting" color="secondary">
                  {i.label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-lg border border-border shadow-lg">
          <Image
            src="/images/img3.png"
            alt="Amlou Pure Alma servi à table"
            fill
            sizes="(max-width: 768px) 90vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
