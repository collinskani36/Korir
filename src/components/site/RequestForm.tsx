import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Paperclip, X } from "lucide-react";

import { Mark } from "@/components/brand/Logo";
import { whatsappHref } from "@/lib/site";

const actions = [
  "Find it for me",
  "Source/buy it for me",
  "Collect an item I already bought",
  "Deliver an item I already have",
  "Source and deliver",
] as const;

const fieldClass =
  "w-full border-b border-input bg-transparent py-3 text-base placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors";

const labelClass =
  "text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-muted-foreground";

function makeReference() {
  return `KA-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function RequestForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReference(makeReference());
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }

  if (reference) {
    return (
      <div className="border-border bg-card border p-8 md:p-14">
        <div className="flex items-center gap-4">
          <span className="bg-foreground text-background flex size-10 items-center justify-center">
            <Check className="size-5" />
          </span>
          <p className="eyebrow">Request received</p>
        </div>

        <h2 className="display-md mt-8">Thank you. We have your request.</h2>

        <div className="border-border mt-10 border-y py-8">
          <p className={labelClass}>Your reference</p>
          <p className="numeral mt-3 text-4xl md:text-5xl">{reference}</p>
        </div>

        <p className="text-muted-foreground mt-8 max-w-xl leading-relaxed">
          Korir &amp; Associates will review your request, confirm availability and
          pricing, and contact you with the next steps. Please keep this reference
          for any follow-up. No account is needed.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref(`Hello Korir & Associates, my request reference is ${reference}.`)}
            className="bg-foreground text-background px-6 py-4 text-center text-xs font-medium tracking-[0.16em] uppercase"
          >
            Follow up on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setReference(null);
              setFileName(null);
            }}
            className="border-border hover:border-foreground border px-6 py-4 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
          >
            Submit another request
          </button>
        </div>

        <p className="text-muted-foreground mt-8 text-sm">
          Prefer to talk first? <Link to="/contact" className="link-underline text-foreground">Contact us</Link>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-card border p-6 md:p-12"
      noValidate={false}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <p className="eyebrow">Request form</p>
          <h2 className="display-md mt-4">Tell us what you need</h2>
        </div>
        <Mark className="size-10 shrink-0 md:size-12" />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="item" className={labelClass}>
            What do you need?
          </label>
          <input
            id="item"
            name="item"
            required
            placeholder="Example: Samsung 55-inch TV"
            className={`${fieldClass} mt-3`}
          />
        </div>

        <fieldset className="md:col-span-2">
          <legend className={labelClass}>What would you like us to do?</legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {actions.map((action, i) => (
              <label
                key={action}
                className="border-border hover:border-foreground has-checked:border-foreground has-checked:bg-secondary flex cursor-pointer items-center gap-3 border px-4 py-4 text-sm transition-colors"
              >
                <input
                  type="radio"
                  name="action"
                  value={action}
                  required
                  defaultChecked={i === 0}
                  className="accent-foreground size-4"
                />
                <span>{action}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="from" className={labelClass}>
            Where should we source/collect it?
          </label>
          <input
            id="from"
            name="from"
            placeholder="Shop, seller, or area in town"
            className={`${fieldClass} mt-3`}
          />
        </div>

        <div>
          <label htmlFor="to" className={labelClass}>
            Where should we deliver it?
          </label>
          <input
            id="to"
            name="to"
            required
            placeholder="Estate, town or landmark"
            className={`${fieldClass} mt-3`}
          />
        </div>

        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" required className={`${fieldClass} mt-3`} />
        </div>

        <div>
          <label htmlFor="contact" className={labelClass}>
            Phone or WhatsApp number
          </label>
          <input
            id="contact"
            name="contact"
            required
            inputMode="tel"
            className={`${fieldClass} mt-3`}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Additional details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Brand, size, quantity, budget, etc."
            className={`${fieldClass} mt-3 resize-none`}
          />
        </div>

        <div className="md:col-span-2">
          <p className={labelClass}>Image or screenshot (optional)</p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="border-border hover:border-foreground inline-flex items-center gap-2 border px-5 py-3 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
            >
              <Paperclip className="size-4" /> Attach file
            </button>
            <input
              ref={fileInput}
              id="attachment"
              name="attachment"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
            {fileName ? (
              <span className="text-muted-foreground inline-flex items-center gap-2 text-sm">
                {fileName}
                <button
                  type="button"
                  aria-label="Remove attachment"
                  onClick={() => {
                    setFileName(null);
                    if (fileInput.current) fileInput.current.value = "";
                  }}
                  className="hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-border mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground max-w-sm text-sm">
          No account needed. We reply with availability, pricing and delivery
          details.
        </p>
        <button
          type="submit"
          className="bg-foreground text-background px-8 py-4 text-xs font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-85"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
