import { useLang } from '../../i18n/LanguageContext';
import { useLocalized } from '../../hooks/useLocalized';
import { useTilt } from '../../hooks/useTilt';
import { ui } from '../../i18n/ui';
import { formatPeriod, isOngoing } from '../../utils/content';
import type { TimelineEntry } from '../../interfaces/content';

interface Props { entry: TimelineEntry; shown: boolean; index: number }

export default function TimelineItem({ entry, shown, index }: Props) {
  const t = useLocalized();
  const { lang } = useLang();
  const tilt = useTilt<HTMLDivElement>(3);
  const ongoing = isOngoing(entry);
  const delay = `${index * 220}ms`;

  return (
    <li className="relative pl-11 sm:pl-14">
      <span
        aria-hidden
        className={`absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border bg-white transition duration-500 ${
          ongoing ? 'border-azure shadow-glow' : 'border-azure/40'
        } ${shown ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
        style={{ transitionDelay: `${index * 220 + 150}ms` }}
      >
        <span className="relative flex h-2.5 w-2.5">
          {ongoing && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-electric opacity-75" />
          )}
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cobalt to-cyan-electric" />
        </span>
      </span>

      <article
        className={`transition duration-500 ${shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
        style={{ transitionDelay: delay }}
      >
        <div
          ref={tilt.ref}
          {...tilt.handlers}
          className="glass rounded-2xl p-5 shadow-soft transition-[transform,box-shadow] duration-150 will-change-transform hover:shadow-glow sm:p-6"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <p className="font-mono text-xs text-cobalt">
              {formatPeriod(entry, lang, t(ui.timeline.present))}
            </p>
            {ongoing && (
              <span className="rounded-full border border-azure/30 bg-ice px-2.5 py-0.5 font-mono text-[11px] text-cobalt">
                {t(ui.timeline.ongoing)}
              </span>
            )}
          </div>

          <h3 className="mt-2 font-display text-lg font-bold leading-snug text-night sm:text-xl">
            {t(entry.title)}
          </h3>
          <p className="mt-1 font-mono text-xs text-night/60">
            {entry.organization} · {entry.location}
          </p>

          {entry.bullets && (
            <ul className="mt-4 space-y-2">
              {entry.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-night/75">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-azure" />
                  {t(b)}
                </li>
              ))}
            </ul>
          )}

          {entry.tags && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-night/10 bg-white/70 px-2 py-0.5 font-mono text-xs text-night/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </li>
  );
}