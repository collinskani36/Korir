import { createFileRoute } from "@tanstack/react-router";

import { RequestForm } from "@/components/site/RequestForm";
import { Reveal } from "@/components/site/Reveal";
import { steps } from "@/lib/site";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Request Something — Korir & Associates" },
      {
        name: "description",
        content:
          "Tell Korir & Associates what you need sourced, collected or delivered in Eldoret and the surrounding region. No account required.",
      },
      { property: "og:title", content: "Request Something — Korir & Associates" },
      {
        property: "og:description",
        content:
          "Submit a sourcing, collection or delivery request and receive a reference number.",
      },
    ],
  }),
  component: RequestPage,
});

function RequestPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="shell py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Request something</p>
            <h1 className="display-lg mt-6 max-w-3xl">
              One request. We take it from there.
            </h1>
            <p className="text-muted-foreground mt-8 max-w-2xl leading-relaxed">
              Describe the item, where it can be found and where it should go. We
              confirm availability, pricing and delivery details before anything is
              arranged.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="shell grid gap-10 py-14 md:py-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <RequestForm />
          </Reveal>

          <aside className="lg:col-span-4">
            <Reveal delay={120}>
              <h2 className="eyebrow">What happens next</h2>
              <ol className="border-border mt-6 border-t">
                {steps.map((step) => (
                  <li key={step.n} className="border-border border-b py-5">
                    <span className="numeral text-muted-foreground text-xs">
                      {step.n}
                    </span>
                    <h3 className="font-display mt-2 text-base font-medium uppercase">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">{step.body}</p>
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground mt-8 text-sm leading-relaxed">
                We never ask for payment before confirming an item, and we do not
                quote delivery costs until the request is reviewed.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
