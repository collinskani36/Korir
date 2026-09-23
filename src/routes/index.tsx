import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { BrandLockup, Mark } from "@/components/brand/Logo";
import { Reveal } from "@/components/site/Reveal";
import { categories, coreServices, steps, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Korir & Associates — Sourcing, Collection & Delivery in Eldoret",
      },
      {
        name: "description",
        content:
          "Need something ? Korir & Associates source, collect and deliver goods across Eldoret, surrounding areas and Kisumu. Tell us what you need.",
      },
      {
        property: "og:title",
        content: "Korir & Associates — Need Something From Town?",
      },
      {
        property: "og:description",
        content:
          "Sourcing, procurement, collection and delivery from Eldoret, across the region.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-border border-b">
        <div className="shell grid gap-12 py-16 md:py-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">Eldoret, Kenya — Sourcing &amp; Delivery</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-xl mt-8">
                Need Something?
                <br />
                We got you!
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-muted-foreground mt-10 max-w-2xl text-base leading-relaxed md:text-xl">
                Tell us what you need, where it is, and where you want it delivered.
                We’ll help source it, collect it and get it to you.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/request"
                  className="bg-foreground text-background group inline-flex items-center justify-between gap-6 px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-85"
                >
                  Request Something
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={whatsappHref(
                    "Hello Korir & Associates, I need something from town.",
                  )}
                  className="border-foreground hover:bg-foreground hover:text-background inline-flex items-center justify-between gap-6 border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
                >
                  WhatsApp Us
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:flex lg:items-end">
            <Reveal delay={320} className="w-full">
              <div className="bg-foreground p-8">
                <BrandLockup className="mx-auto max-w-[240px]" />
              </div>
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                Sourcing. Procurement. Collection. Delivery. One request is all it
                takes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="border-border border-b">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Core services</p>
          </Reveal>
          <ul className="border-border mt-10 grid border-t md:grid-cols-3">
            {coreServices.map((service, i) => (
              <li
                key={service.n}
                className="border-border border-b md:border-r md:last:border-r-0"
              >
                <Reveal delay={i * 90} className="h-full p-8 md:p-10">
                  <span className="numeral text-muted-foreground text-sm">
                    {service.n}
                  </span>
                  <h2 className="display-md mt-8">{service.title}</h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {service.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-border border-b">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <h2 className="display-lg md:col-span-8">
                What Can We Help You Get?
              </h2>
              <p className="text-muted-foreground md:col-span-4 md:text-right">
                Service categories — not a shop. If it can be bought in town, we can
                help you get it.
              </p>
            </div>
          </Reveal>

          <ul className="border-border mt-14 grid border-t border-l sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <li
                key={category.title}
                className="border-border hover:bg-secondary border-r border-b transition-colors"
              >
                <Reveal delay={(i % 3) * 70} className="h-full p-8">
                  <span className="numeral text-muted-foreground text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-6 text-lg font-medium tracking-[-0.01em] uppercase">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {category.body}
                  </p>
                </Reveal>
              </li>
            ))}
            <li className="border-border bg-foreground text-background border-r border-b">
              <Link to="/request" className="group flex h-full flex-col justify-between p-8">
                <span className="text-background/50 text-[0.6875rem] tracking-[0.22em] uppercase">
                  Start here
                </span>
                <span className="font-display mt-10 flex items-center gap-3 text-lg font-medium uppercase">
                  Request Something
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-border bg-foreground text-background border-b">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="text-background/50 text-[0.6875rem] font-medium tracking-[0.22em] uppercase">
              How it works
            </p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Four steps from request to doorstep.
            </h2>
          </Reveal>
          <ol className="border-background/15 mt-14 grid border-t sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.n}
                className="border-background/15 border-b lg:border-r lg:last:border-r-0"
              >
                <Reveal delay={i * 80} className="h-full p-8">
                  <span className="numeral text-background/45 text-sm">{step.n}</span>
                  <h3 className="font-display mt-8 text-xl font-medium uppercase">
                    {step.title}
                  </h3>
                  <p className="text-background/60 mt-3 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={200}>
            <Link
              to="/how-it-works"
              className="text-background/80 hover:text-background link-underline mt-12 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase"
            >
              Read the full process <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="border-border border-b">
        <div className="shell py-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Service areas</p>
            <h2 className="display-lg mt-6 max-w-3xl">
              From Eldoret, Across the Region.
            </h2>
          </Reveal>
          <div className="border-border mt-14 grid border-t md:grid-cols-3">
            {[
              { place: "Eldoret", note: "Primary service area" },
              { place: "Surrounding Areas", note: "Selected nearby destinations" },
              { place: "Kisumu", note: "Regional outreach" },
            ].map((area, i) => (
              <div
                key={area.place}
                className="border-border border-b md:border-r md:last:border-r-0"
              >
                <Reveal delay={i * 90} className="h-full p-8 md:p-10">
                  <Mark className="size-8" />
                  <h3 className="display-md mt-8">{area.place}</h3>
                  <p className="eyebrow mt-4">{area.note}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="text-muted-foreground mt-10 max-w-2xl text-sm leading-relaxed">
              Coverage depends on the item and destination. Send us your request and
              we will confirm what is possible before anything is arranged.
            </p>
          </Reveal>
        </div>
      </section>

      {/* B2B */}
      <section className="border-border border-b">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">For business</p>
            <h2 className="display-lg mt-6">Procurement Without The Hassle.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <p className="text-muted-foreground leading-relaxed md:text-lg">
              Businesses, schools, clinics and site teams can use Korir &amp;
              Associates to source, collect and coordinate delivery of office
              supplies, equipment, furniture, hardware, electronics and other
              purchases — without sending staff into town.
            </p>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Send a single list or a recurring requirement. We handle the running
              around and report back with availability, pricing and delivery
              details.
            </p>
            <Link
              to="/contact"
              hash="business-enquiry"
              className="border-foreground hover:bg-foreground hover:text-background mt-10 inline-flex items-center gap-6 border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
            >
              Business Enquiry <ArrowUpRight className="size-4" />
            </Link>

          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-foreground text-background">
        <div className="shell py-20 text-center md:py-32">
          <Reveal>
            <Mark className="mx-auto size-12 bg-background/10" />
            <p className="display-lg mt-10">
              If you need something,
              <br />
              just ask Korir &amp; Associates.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/request"
                className="bg-background text-foreground px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase"
              >
                Request Something
              </Link>
              <a
                href={whatsappHref("Hello Korir & Associates.")}
                className="border-background/40 hover:border-background border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
