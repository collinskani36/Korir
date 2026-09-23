import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Korir & Associates" },
      {
        name: "description",
        content:
          "The terms that apply when you ask Korir & Associates to source, collect or deliver an item.",
      },
      { property: "og:title", content: "Terms of Service — Korir & Associates" },
      {
        property: "og:description",
        content: "Terms applying to sourcing, collection and delivery requests.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    title: "What we do",
    body: `${site.name} is a sourcing, procurement, collection and delivery service. We help locate items, buy them on your instruction, collect items you have already purchased, and coordinate delivery to your destination.`,
  },
  {
    title: "Requests are not orders",
    body: "Submitting a request starts a conversation. Nothing is bought, collected or moved until we have confirmed availability, cost and delivery details with you.",
  },
  {
    title: "Pricing",
    body: "We do not publish fixed item or delivery prices. Costs depend on the item, the seller and the destination, and are confirmed with you before anything is arranged.",
  },
  {
    title: "Your responsibilities",
    body: "Please give accurate item details, collection and delivery locations and a reachable contact number. We rely on the information you provide, and we cannot source items that are illegal or unsafe to transport.",
  },
  {
    title: "Items and condition",
    body: "Where an item is bought from a third-party seller, that seller's warranty or return policy applies to the item itself. We take reasonable care while an item is in our hands.",
  },
  {
    title: "Coverage",
    body: "Our primary service area is Eldoret and surrounding areas, with regional outreach toward Kisumu. Availability for any particular destination is confirmed per request.",
  },
  {
    title: "Changes",
    body: "These terms may be updated as the service develops. The version published on this page is the current one.",
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro={`These terms apply when you ask ${site.name} to source, collect or deliver something.`}
      />
      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <article key={section.title} className="border-border border-b py-8">
                <span className="numeral text-muted-foreground text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-4 text-xl font-medium uppercase">
                  {section.title}
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {section.body}
                </p>
              </article>
            ))}
            <p className="text-muted-foreground mt-10 text-sm">
              Questions about these terms can be sent through the contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
