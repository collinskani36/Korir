import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Mark } from "@/components/brand/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Eldoret, Surrounding Areas & Kisumu" },
      {
        name: "description",
        content:
          "Korir & Associates operate from Eldoret, serving surrounding areas with regional outreach toward Kisumu. Coverage is confirmed per request.",
      },
      { property: "og:title", content: "Service Areas — Korir & Associates" },
      {
        property: "og:description",
        content:
          "From Eldoret, across the region: primary coverage in Eldoret, selected nearby destinations and outreach to Kisumu.",
      },
    ],
  }),
  component: ServiceAreas,
});

const areas = [
  {
    n: "01",
    place: "Eldoret",
    note: "Primary service area",
    body: "Our base. Sourcing, collection and delivery within Eldoret town and its estates is our day-to-day work.",
  },
  {
    n: "02",
    place: "Surrounding Areas",
    note: "Selected nearby destinations",
    body: "Deliveries to selected destinations around Eldoret. Feasibility depends on the item, the route and timing — we confirm before committing.",
  },
  {
    n: "03",
    place: "Kisumu",
    note: "Regional outreach",
    body: "Regional outreach toward Kisumu for suitable requests. Ask us and we will tell you whether we can serve your destination.",
  },
];

function ServiceAreas() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="From Eldoret, Across the Region."
        intro="We do not claim to cover everywhere. We tell you plainly what we can reach, and confirm each request before anything is arranged."
      />

      <section className="border-border border-b">
        <div className="shell py-0">
          <div className="border-border grid md:grid-cols-3">
            {areas.map((area, i) => (
              <div
                key={area.place}
                className="border-border border-b md:border-r md:border-b-0 md:last:border-r-0"
              >
                <Reveal delay={i * 90} className="h-full px-6 py-14 md:px-10 md:py-20">
                  <div className="flex items-center justify-between">
                    <Mark className="size-9" />
                    <span className="numeral text-muted-foreground text-sm">
                      {area.n}
                    </span>
                  </div>
                  <h2 className="display-md mt-10">{area.place}</h2>
                  <p className="eyebrow mt-4">{area.note}</p>
                  <p className="text-muted-foreground mt-8 leading-relaxed">
                    {area.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="shell grid gap-8 py-14 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-5">
            <h2 className="display-md">Pricing and coverage</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <p className="text-muted-foreground leading-relaxed">
              Costs depend on the item, its size, the seller and the destination, so
              we do not publish fixed delivery prices. Send your request and we will
              confirm availability, cost and delivery details before proceeding.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <h2 className="display-lg max-w-2xl">
              Tell us where it needs to go.
            </h2>
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
