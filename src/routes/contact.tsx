import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  EMAIL_PLACEHOLDER,
  PHONE_PLACEHOLDER,
  site,
  whatsappHref,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Korir & Associates, Eldoret" },
      {
        name: "description",
        content:
          "Contact Korir & Associates in Eldoret, Kenya by phone or WhatsApp, or submit a sourcing, collection and delivery request online.",
      },
      { property: "og:title", content: "Contact — Korir & Associates" },
      {
        property: "og:description",
        content: "Reach Korir & Associates in Eldoret, Kenya.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const hasPhone = Boolean(site.phone);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        intro="Send a request, call, or message us on WhatsApp. We are based in Eldoret, Kenya."
      />

      {/* Prominent mobile actions */}
      <section className="border-border border-b">
        <div className="shell py-10 md:py-14">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={hasPhone ? `tel:${site.phone.replace(/\s/g, "")}` : "#details"}
              className="border-border hover:border-foreground group flex items-center justify-between border px-6 py-6 transition-colors"
            >
              <span className="flex items-center gap-4">
                <Phone className="size-5" />
                <span className="text-xs font-medium tracking-[0.16em] uppercase">
                  Call us
                </span>
              </span>
              <span className="text-muted-foreground text-sm">
                {hasPhone ? site.phone : "To be confirmed"}
              </span>
            </a>
            <a
              href={whatsappHref("Hello Korir & Associates, I need something from town.")}
              className="bg-foreground text-background flex items-center justify-between px-6 py-6 transition-opacity hover:opacity-85"
            >
              <span className="flex items-center gap-4">
                <MessageCircle className="size-5" />
                <span className="text-xs font-medium tracking-[0.16em] uppercase">
                  WhatsApp Us
                </span>
              </span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="details" className="border-border border-b">
        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="display-md">Business details</h2>
            <dl className="border-border mt-10 border-t">
              <div className="border-border grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b py-5">
                <dt className="eyebrow">Location</dt>
                <dd className="text-sm">{site.location}</dd>
              </div>
              <div className="border-border grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b py-5">
                <dt className="eyebrow">Phone</dt>
                <dd className="text-sm">
                  {site.phone ? (
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">
                      {site.phone}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{PHONE_PLACEHOLDER}</span>
                  )}
                </dd>
              </div>
              <div className="border-border grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b py-5">
                <dt className="eyebrow">Email</dt>
                <dd className="text-sm break-all">
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="link-underline">
                      {site.email}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{EMAIL_PLACEHOLDER}</span>
                  )}
                </dd>
              </div>
              <div className="border-border grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b py-5">
                <dt className="eyebrow">Hours</dt>
                <dd className="text-muted-foreground text-sm">{site.hours}</dd>
              </div>
            </dl>
            <p className="text-muted-foreground mt-8 text-sm leading-relaxed">
         
            </p>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-6">
            <div className="border-border bg-card border p-8 md:p-10">
              <h2 className="display-md">Fastest route</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                The request form captures everything we need in one go — the item,
                where to collect it and where it should be delivered. You receive a
                reference number immediately.
              </p>
              <Link
                to="/request"
                className="bg-foreground text-background group mt-8 inline-flex items-center gap-6 px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase"
              >
                Request Something
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              id="business-enquiry"
              className="border-border bg-foreground text-background mt-6 border p-8 md:p-10"
            >
              <p className="text-background/50 text-[0.6875rem] font-medium tracking-[0.22em] uppercase">
                Business enquiry
              </p>
              <h2 className="display-md mt-5">Procurement for organisations.</h2>
              <p className="text-background/65 mt-6 leading-relaxed">
                For office supplies, equipment, furniture, hardware, electronics and
                recurring requirements, send your list through the request form or
                message us directly and mention that it is a business enquiry.
              </p>
              <a
                href={whatsappHref(
                  "Hello Korir & Associates, I would like to make a business procurement enquiry.",
                )}
                className="border-background/40 hover:border-background mt-8 inline-flex items-center gap-4 border px-8 py-5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
              >
                Business Enquiry <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
