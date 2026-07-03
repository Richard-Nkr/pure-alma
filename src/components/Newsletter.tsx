"use client";

import { useState } from "react";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Card } from "@astryxdesign/core/Card";
import { Button } from "@astryxdesign/core/Button";
import { TextInput } from "@astryxdesign/core/TextInput";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="commander" className="bg-body">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <Card variant="blue" padding={10} className="text-center">
          <div className="mx-auto max-w-xl">
            <Heading level={2} type="display-2">
              Recevez votre premier pot.
            </Heading>
            <Text as="p" type="large" color="secondary" className="mt-4 block">
              Inscrivez-vous et profitez de -10% sur votre première commande,
              plus nos recettes exclusives à l&apos;amlou.
            </Text>

            {sent ? (
              <div className="mt-8">
                <Text as="p" type="large" weight="semibold" color="accent">
                  Merci ! Vérifiez votre boîte mail pour votre code de -10%.
                </Text>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSent(true);
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1">
                  <TextInput
                    label="Adresse email"
                    isLabelHidden
                    type="email"
                    value={email}
                    onChange={(v) => setEmail(v)}
                    placeholder="votre@email.com"
                    size="lg"
                    isRequired
                  />
                </div>
                <Button
                  label="J'en profite"
                  type="submit"
                  variant="primary"
                  size="lg"
                />
              </form>
            )}

            <Text as="p" type="supporting" color="secondary" className="mt-4 block">
              Livraison offerte dès 3 pots · Paiement sécurisé · Satisfait ou
              remboursé
            </Text>
          </div>
        </Card>
      </div>
    </section>
  );
}
