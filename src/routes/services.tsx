import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Mark } from "@/components/brand/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { categories, coreServices } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sourcing, Collection & Delivery | Korir & Associates" },
      {
        name: "description",
        content:
          "Source, collect and deliver. Korir & Associates handle household items, groceries, electronics, office supplies and hardware across Eldoret and the region.",
      },
      { property: "og:title", content: "Services — Korir & Associates" },
      {
        property: "og:description",
        content:
          "Three services: we source what you need, collect what you bought and coordinate delivery.",
      },
    ],
  }),
  component: Services,
});

const serviceDetail = [
  "Tell us the item and we look for it — comparing what is available, checking condition and reporting back before anything is bought.",
  "If you have already paid for or agreed on an item, we collect it from the shop, seller or pickup point on your behalf.",
  "We arrange the movement of the item to the destination you give us, whether that is a home, office, shop or site.",
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Source. Collect. Deliver."
        intro="Korir & Associates is a sourcing, procurement, collection and delivery service. You can use one of the services or all three in a single request."
      />

      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <ul className="border-border border-t">
            {coreServices.map((service, i) => (
              <li key={service.n} className="border-border border-b">
                <Reveal delay={i * 80}>
                  <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-8">
                    <span className="numeral text-muted-foreground text-sm md:col-span-2">
                      {service.n}
                    </span>
                    <h2 className="display-md md:col-span-4">{service.title}</h2>
                    <div className="md:col-span-6">
                      <p className="text-base leading-relaxed">{service.body}</p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {serviceDetail[i]}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <Reveal>
            <h2 className="display-lg max-w-3xl">What Can We Help You Get?</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              These are categories of requests we handle — not products for sale.
            </p>
          </Reveal>
          <ul className="border-border mt-12 grid border-t border-l sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <li
                key={category.title}
                className="border-border hover:bg-secondary border-r border-b transition-colors"
              >
                <Reveal delay={(i % 3) * 70} className="h-full p-8">
                  <span className="numeral text-muted-foreground text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-6 text-lg font-medium uppercase">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {category.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="shell grid gap-10 py-14 md:py-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Mark className="size-10" />
            <h2 className="display-lg mt-8">Procurement Without The Hassle.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="leading-relaxed md:text-lg">
              Businesses can use Korir &amp; Associates to source, collect and
              coordinate delivery of office supplies, equipment, furniture,
              hardware, electronics and other purchases.
            </p>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Send a list, a single item or a recurring requirement. We report back
              with availability, pricing and delivery details so your team stays in
              the office.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                hash="business-enquiry"
                className="border-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-4 border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
              >
                Business Enquiry <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/request"
                className="bg-foreground text-background inline-flex items-center gap-4 px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase"
              >
                Request Something <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
