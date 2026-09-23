import { Link } from "@tanstack/react-router";

import { Wordmark } from "@/components/brand/Logo";
import { nav, site, whatsappHref, PHONE_PLACEHOLDER, EMAIL_PLACEHOLDER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-border bg-foreground text-background border-t">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark markClassName="size-11 bg-background/10" />
            <p className="text-background/60 mt-6 max-w-xs text-sm leading-relaxed">
              {site.tagline}
            </p>
            <p className="text-background/45 mt-8 text-xs tracking-[0.16em] uppercase">
              {site.location}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h2 className="text-background/45 text-[0.6875rem] font-medium tracking-[0.22em] uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/request"
                  className="text-background/80 hover:text-background text-sm transition-colors"
                >
                  Request Something
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-background/45 text-[0.6875rem] font-medium tracking-[0.22em] uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-background/80">
                {site.phone ? (
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                ) : (
                  <span className="text-background/50">{PHONE_PLACEHOLDER}</span>
                )}
              </li>
              <li className="text-background/80">
                {site.email ? (
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                ) : (
                  <span className="text-background/50">{EMAIL_PLACEHOLDER}</span>
                )}
              </li>
              <li>
                <a
                  href={whatsappHref("Hello Korir & Associates.")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <Link
                  to="/service-areas"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-background/15 mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-background/45 text-xs">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link to="/privacy" className="text-background/60 hover:text-background">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-background">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
