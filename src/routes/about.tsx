import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BrandLockup } from "@/components/brand/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Korir & Associates, Eldoret" },
      {
        name: "description",
        content:
          "Korir & Associates is a sourcing, procurement, collection and delivery service based in Eldoret, Kenya. If you need something, just ask.",
      },
      { property: "og:title", content: "About — Korir & Associates" },
      {
        property: "og:description",
        content:
          "A sourcing, procurement, collection and delivery service based in Eldoret, Kenya.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    n: "01",
    title: "Confirm first",
    body: "Availability, pricing and delivery details are agreed with you before anything is bought or moved.",
  },
  {
    n: "02",
    title: "Plain answers",
    body: "If we cannot get an item or reach a destination, we say so and offer an alternative.",
  },
  {
    n: "03",
    title: "One point of contact",
    body: "From the first message to the final handover, you deal with us — not a queue.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="If you need something, just ask."
        intro="Korir & Associates is a sourcing, procurement, collection and delivery service based in Eldoret, Kenya."
      />

      <section className="border-border border-b">
        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-relaxed md:text-xl">
              The idea is simple. Getting something from town takes time — finding
              the right shop, comparing what is available, arranging transport and
              waiting around. We do that part for you.
            </p>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Tell us what you need and where you want it delivered. We help source
              it, collect it and get it to you. If you have already bought the item,
              we can simply collect it from the seller and deliver it. We work with
              households, individuals and businesses across Eldoret and the
              surrounding region, with outreach toward Kisumu.
            </p>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              We are not a shop and we do not hold stock. We are the people who go
              and get it.
            </p>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <div className="bg-foreground p-10">
              <BrandLockup className="mx-auto max-w-[220px]" />
            </div>
            <dl className="border-border mt-8 border-t">
              <div className="border-border flex items-baseline justify-between border-b py-4">
                <dt className="eyebrow">Based in</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
              <div className="border-border flex items-baseline justify-between border-b py-4">
                <dt className="eyebrow">Discipline</dt>
                <dd className="text-sm">Sourcing &amp; procurement</dd>
              </div>
              <div className="border-border flex items-baseline justify-between border-b py-4">
                <dt className="eyebrow">Hours</dt>
                <dd className="text-muted-foreground text-sm">{site.hours}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <Reveal>
            <h2 className="display-lg max-w-2xl">How we work.</h2>
          </Reveal>
          <ul className="border-border mt-12 grid border-t md:grid-cols-3">
            {principles.map((principle, i) => (
              <li
                key={principle.n}
                className="border-border border-b md:border-r md:last:border-r-0"
              >
                <Reveal delay={i * 80} className="h-full p-8 md:p-10">
                  <span className="numeral text-muted-foreground text-sm">
                    {principle.n}
                  </span>
                  <h3 className="font-display mt-8 text-xl font-medium uppercase">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {principle.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <h2 className="display-lg max-w-3xl">
              Tell us what you need from town.
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/request"
                className="bg-background text-foreground group inline-flex items-center gap-6 px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase"
              >
                Request Something
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="border-background/40 hover:border-background border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
