import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { steps } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Korir & Associates" },
      {
        name: "description",
        content:
          "Four steps: tell us what you need, we source it, we confirm availability and pricing, then we deliver. Sourcing and delivery from Eldoret.",
      },
      { property: "og:title", content: "How It Works — Korir & Associates" },
      {
        property: "og:description",
        content:
          "From request to delivery in four clear steps, with confirmation before anything is arranged.",
      },
    ],
  }),
  component: HowItWorks,
});

const detail = [
  "Send your request through the form, or message us on WhatsApp. Describe the item as precisely as you can — brand, size, quantity and budget all help.",
  "We locate the item with sellers we know, or coordinate directly with the seller you have already chosen. If something is unavailable, we tell you and suggest alternatives.",
  "Before anything is bought or moved, we confirm availability, pricing and delivery arrangements with you. Nothing proceeds without your go-ahead.",
  "The item is collected and delivered to the destination you gave us. We stay reachable until it is in your hands.",
];

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A simple, accountable process."
        intro="One request moves through four stages. You are informed at every point and nothing is committed without your approval."
      />

      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <ol className="border-border border-t">
            {steps.map((step, i) => (
              <li key={step.n} className="border-border border-b">
                <Reveal delay={i * 70}>
                  <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-8">
                    <span className="numeral text-muted-foreground md:col-span-2 text-sm">
                      {step.n}
                    </span>
                    <h2 className="display-md md:col-span-4">{step.title}</h2>
                    <div className="md:col-span-6">
                      <p className="text-base leading-relaxed">{step.body}</p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {detail[i]}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <h2 className="display-lg max-w-2xl">Ready when you are.</h2>
            <Link
              to="/request"
              className="bg-background text-foreground group mt-10 inline-flex items-center gap-6 px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase"
            >
              Request Something
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
