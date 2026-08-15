import type { ReactNode } from "react";

export function PolicyPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-navy-deep pb-16 pt-40">
        <div className="shell">
          <h1 className="display-xl text-white">{title}</h1>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="shell max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </>
  );
}
