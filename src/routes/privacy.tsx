import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Korir & Associates" },
      {
        name: "description",
        content:
          "How Korir & Associates handles the information you share when requesting sourcing, collection or delivery services.",
      },
      { property: "og:title", content: "Privacy Policy — Korir & Associates" },
      {
        property: "og:description",
        content: "How we handle the information you share with us.",
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Information we collect",
    body: "When you submit a request we collect the details you provide: your name, phone or WhatsApp number, the item requested, collection and delivery locations, any additional notes and any image you choose to attach.",
  },
  {
    title: "How we use it",
    body: "We use your information only to source, collect and deliver what you asked for, and to contact you about that request. We do not sell your information.",
  },
  {
    title: "Sharing",
    body: "Where necessary to fulfil a request, we may share relevant details — such as an item description or a delivery location — with a seller or a transport provider. We share no more than is needed.",
  },
  {
    title: "Retention",
    body: "Request details are kept only as long as needed for the request, follow-up and normal business records.",
  },
  {
    title: "Your choices",
    body: "You may ask us to correct or delete the details held about a request by contacting us using the details on the contact page.",
  },
  {
    title: "Changes",
    body: "This policy may be updated as the service develops. The current version is always the one published on this page.",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`This policy explains how ${site.name} handles the information you share with us.`}
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
              Questions about this policy can be sent through the contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
