import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Wordmark } from "@/components/brand/Logo";
import { nav, whatsappHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:py-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="min-w-0"
          aria-label="Korir & Associates — home"
        >
          <Wordmark markClassName="size-9 md:size-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline text-[0.8125rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappHref("Hello Korir & Associates, I need something from town.")}
            className="border-border hover:border-foreground border px-5 py-3 text-[0.6875rem] font-medium tracking-[0.16em] uppercase transition-colors"
          >
            WhatsApp Us
          </a>
          <Link
            to="/request"
            className="bg-foreground text-background px-5 py-3 text-[0.6875rem] font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-85"
          >
            Request Something
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="border-border flex size-11 shrink-0 items-center justify-center border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      </header>

      {open ? (
        <div className="border-border bg-background fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto border-t md:top-[81px] lg:hidden">
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-border display-md flex items-baseline justify-between border-b py-5"
              >
                <span>{item.label}</span>
                <span className="numeral text-muted-foreground text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
            <div className="mt-8 grid gap-3 pb-12">
              <Link
                to="/request"
                onClick={() => setOpen(false)}
                className="bg-foreground text-background px-6 py-4 text-center text-xs font-medium tracking-[0.16em] uppercase"
              >
                Request Something
              </Link>
              <a
                href={whatsappHref(
                  "Hello Korir & Associates, I need something from town.",
                )}
                className="border-foreground border px-6 py-4 text-center text-xs font-medium tracking-[0.16em] uppercase"
              >
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
