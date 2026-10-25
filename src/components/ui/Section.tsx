import type { ReactNode } from 'react';

interface Props { id: string; title: string; lead?: string; children: ReactNode }

export default function Section({ id, title, lead, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24  px-5 py-20 md:py-28">
      <header className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-night sm:text-4xl">{title}</h2>
        {lead && <p className="mt-3 text-lg text-night/70">{lead}</p>}
      </header>
      {children}
    </section>
  );
}