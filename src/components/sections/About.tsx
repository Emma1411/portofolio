import { useLang } from '../../i18n/LanguageContext';
import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { about, education, experience } from '../../content';
import { formatMonth, formatPeriod, isOngoing } from '../../utils/content';
import Section from '../ui/Section';

interface InfoProps { label: string; title: string; sub: string; meta: string }

const Info = ({ label, title, sub, meta }: InfoProps) => (
  <div className="glass rounded-2xl p-5 shadow-soft">
    <p className="font-mono text-xs text-cobalt">{label}</p>
    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-night">{title}</h3>
    <p className="mt-1 text-sm text-night/70">{sub}</p>
    <p className="mt-3 font-mono text-xs text-night/60">{meta}</p>
  </div>
);

export default function About() {
  const t = useLocalized();
  const { lang } = useLang();
  const current = education.find(isOngoing);
  const latest = experience[0];

  return (
    <Section id="about" title={t(ui.sections.aboutTitle)}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-night/80">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>

        <aside className="space-y-4">
          {current && (
            <Info
              label={t(ui.about.current)}
              title={t(current.title)}
              sub={`${current.organization} · ${current.location}`}
              meta={current.end ? `${t(ui.about.until)} ${formatMonth(current.end, lang)}` : t(ui.timeline.ongoing)}
            />
          )}
          {latest && (
            <Info
              label={t(ui.about.latest)}
              title={t(latest.title)}
              sub={`${latest.organization} · ${latest.location}`}
              meta={formatPeriod(latest, lang, t(ui.timeline.present))}
            />
          )}
          <div className="glass rounded-2xl p-5 shadow-soft">
            <p className="font-mono text-xs text-cobalt">{t(ui.about.targets)}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.targets.map((r) => (
                <li key={r} className="rounded-full border border-azure/30 bg-ice px-3 py-1 font-mono text-xs text-cobalt">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}