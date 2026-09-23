import type { ReactNode } from "react";

import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-border border-b">
      <div className="shell py-16 md:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-lg mt-6 max-w-4xl">{title}</h1>
          {intro ? (
            <p className="text-muted-foreground mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
              {intro}
            </p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
