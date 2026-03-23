import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  /** Optional note under the main description (e.g. bilingual / moderation stance). */
  note?: string;
  children?: ReactNode;
};

export function ExploreHero({ eyebrow, title, description, note, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b bg-hero-mesh-subtle">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="text-primary text-xs font-semibold tracking-widest uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="text-text-strong mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
          {description}
        </p>
        {note ? (
          <p className="text-muted-foreground mt-3 max-w-xl text-xs leading-relaxed">{note}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
