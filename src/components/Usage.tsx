import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";

const ideas = [
  {
    step: "01",
    title: "Sur du pain chaud",
    desc: "La façon la plus authentique : nappez une tranche de pain traditionnel encore tiède.",
  },
  {
    step: "02",
    title: "Dans un porridge",
    desc: "Une cuillère fondue dans un bol d'avoine ou de yaourt pour un petit-déj réconfortant.",
  },
  {
    step: "03",
    title: "En topping de crêpes",
    desc: "Remplacez la pâte à tartiner classique par une gourmandise sans sucre raffiné.",
  },
  {
    step: "04",
    title: "En sauce salée",
    desc: "La version Nature sublime les tajines, les légumes rôtis et les marinades.",
  },
];

export default function Usage() {
  return (
    <section id="degustation" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <Text as="p" type="label" color="accent">
              COMMENT LE DÉGUSTER
            </Text>
            <Heading level={2} type="display-2" className="mt-4">
              Du matin au soir, à toutes les sauces.
            </Heading>
            <Text as="p" type="large" color="secondary" className="mt-5 block">
              L&apos;amlou n&apos;est pas qu&apos;une pâte à tartiner :
              c&apos;est un allié de cuisine. Sucré ou salé, il révèle des saveurs
              de noisette grillée dans toutes vos préparations.
            </Text>
            <div className="mt-8">
              <Button
                label="J'essaie chez moi"
                href="#commander"
                variant="primary"
                size="lg"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ideas.map((i) => (
              <div
                key={i.step}
                className="rounded-lg border border-border bg-body p-6"
              >
                <Text type="display-3" color="accent" weight="bold">
                  {i.step}
                </Text>
                <Heading level={3} className="mt-3 text-lg">
                  {i.title}
                </Heading>
                <Text color="secondary" className="mt-2 block">
                  {i.desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
