import { useState } from 'react';
import { useLocalized } from '../../hooks/useLocalized';
import { pipeline } from '../../content';

export default function Architecture() {
  const t = useLocalized();
  const last = pipeline.stages.length - 1;
  const [hover, setHover] = useState<number | null>(null);
  const current = hover ?? last;

  return (
    <section id="architecture" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-10">
      <div className="hud-grid border border-azure/25 bg-white/70 p-5 sm:p-6">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-azure/15 pb-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cobalt">
              {`00 // ${t(pipeline.kicker)}`}
            </p>
            <h2 className="mt-1.5 font-display text-base font-medium text-night sm:text-lg">
              {t(pipeline.title)}
            </h2>
          </div>
          <span className="border border-azure/25 bg-ice/60 px-3 py-1.5 font-mono text-[11px] text-cobalt">
            {t(pipeline.tag)}
          </span>
        </header>

        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pipeline.stages.map((s, i) => {
            const on = i === current;
            return (
              <li
                key={s.id}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`flex flex-col border p-4 transition-colors duration-200 ${
                  on ? 'border-[#1e3a8a] bg-[#1e3a8a]' : 'border-azure/25 bg-white'
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider ${on ? 'text-sky' : 'text-cobalt'}`}
                >
                  {String(i + 1).padStart(2, '0')}. {t(s.title)}
                </span>
                <span
                  className={`mt-2 font-display text-[15px] font-bold leading-tight ${on ? 'text-white' : 'text-night'}`}
                >
                  {t(s.headline)}
                </span>
                <span
                  className={`mt-2 font-mono text-[11px] leading-relaxed ${on ? 'text-white/75' : 'text-night/55'}`}
                >
                  {s.tech.join(', ')}
                </span>
              </li>
            );
          })}
        </ol>

        <footer className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-azure/15 pt-4 font-mono text-[11px]">
          <p className="text-night/60">
            {t(pipeline.sourcesLabel)} : {pipeline.sources.join(', ')}
          </p>
          <p className="text-cobalt">{t(pipeline.footer)}</p>
        </footer>
      </div>
    </section>
  );
}