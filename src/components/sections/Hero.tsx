import { ArrowRight} from 'lucide-react';
import { useLocalized } from '../../hooks/useLocalized';
import { useTypewriter } from '../../hooks/useTypewriter';
import { ui } from '../../i18n/ui';
import { experience, profile,} from '../../content';
import { yearsOfExperience } from '../../utils/content';

export default function Hero() {
  const t = useLocalized();
  const typed = useTypewriter(profile.typed.map(t));
  const [first, ...rest] = profile.name.split(' ');
  const stats = [
    { value: `${yearsOfExperience(experience)}+`, label: t(ui.stats.years) },
  ];

  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16">
     
      <h1 className="font-display text-[clamp(2.25rem,8.5vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-gradient">
        <span className="block">{first}</span>
        <span className="block">{rest.join(' ')}</span>
      </h1>

      <h2 className="mt-6 font-display text-xl font-medium text-night sm:text-2xl">{t(profile.role)}</h2>
      <p className="mt-2 h-7 font-mono text-base text-cobalt" aria-live="off">
        {typed}
        <span className="caret" aria-hidden />
      </p>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-night/75">{t(profile.tagline)}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cobalt to-cyan-electric px-6 py-3 font-semibold text-black shadow-glow transition hover:brightness-110">
          {t(ui.actions.seeProjects)} <ArrowRight size={18} />
        </a>
      </div>

      <dl className="mt-14 grid max-w-xl grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-4 shadow-soft">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-mono text-3xl font-medium text-night">{s.value}</dd>
            <p className="mt-1 text-xs leading-snug text-night/60">{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}