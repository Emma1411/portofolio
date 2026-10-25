import { useLocalized } from '../../hooks/useLocalized';
import { useInView } from '../../hooks/useInView';
import { ui } from '../../i18n/ui';
import { skills } from '../../content';
import Section from '../ui/Section';

const SEGMENTS = [1, 2, 3, 4, 5];

export default function Skills() {
  const t = useLocalized();
  const [ref, seen] = useInView<HTMLDivElement>();

  return (
    <Section id="skills" title={t(ui.sections.skillsTitle)} lead={t(ui.sections.skillsLead)}>
      <div ref={ref} className="grid gap-5 md:grid-cols-2">
        {skills.map((cat, ci) => (
          <article key={cat.id} className="glass flex flex-col rounded-3xl p-6 shadow-soft">
            <h3 className="font-display text-xl font-bold text-night">{t(cat.title)}</h3>
            <p className="mt-1 text-sm text-night/65">{t(cat.description)}</p>

            <ul className="mt-5 space-y-3.5">
              {cat.items.map((item, i) => (
                <li key={item.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-night">{item.name}</span>
                  <span role="img" aria-label={`${item.level}/5`} className="flex shrink-0 gap-1">
                    {SEGMENTS.map((n) => (
                      <span key={n} className="h-1.5 w-6 overflow-hidden rounded-full bg-sky/50">
                        <span
                          className={`block h-full origin-left rounded-full bg-gradient-to-r from-cobalt to-cyan-electric transition-transform duration-500 ${
                            seen && n <= item.level ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ transitionDelay: `${ci * 120 + i * 70 + n * 45}ms` }}
                        />
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="mt-auto flex flex-wrap gap-2 pt-6">
              {cat.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-ice px-2.5 py-1 font-mono text-xs text-cobalt">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}