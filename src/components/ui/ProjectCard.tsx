import { Globe } from 'lucide-react';
import { useLocalized } from '../../hooks/useLocalized';
import { useTilt } from '../../hooks/useTilt';
import { ui } from '../../i18n/ui';
import type { Repo } from '../../interfaces/content';
import git from '../../../assets/lucide-github.png'


export default function ProjectCard({ repo }: { repo: Repo }) {
  const t = useLocalized();
  const tilt = useTilt<HTMLElement>();

  return (
    <article
      ref={tilt.ref}
      {...tilt.handlers}
      className="glass flex flex-col overflow-hidden rounded-3xl shadow-soft  transition-[transform,box-shadow] duration-150 will-change-transform hover:shadow-glow"
    >
      <div className="relative aspect-[2/1] overflow-hidden bg-ice">
        <img
          src={repo.image}
          alt={t(repo.title)}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-medium text-cobalt shadow-soft backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-azure" />
          {t(repo.badge)}
        </span>

        <span className="absolute right-3 top-3 rounded-lg bg-night/90 px-2.5 py-1 font-mono text-[11px] text-cyan-electric">
          {repo.sysTag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h4 className="font-display text-xl font-bold text-night">
            {t(repo.title)}
          </h4>
          <p className="mt-1 font-mono text-xs text-cobalt">
            {repo.name} · {t(ui.repoKind[repo.kind])}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-night/75">
          {t(repo.summary)}
        </p>

        <dl className="space-y-1.5 rounded-xl border border-azure/15 bg-ice/50 p-3 font-mono text-xs">
          {repo.stack.map((s) => (
            <div key={s.label} className="flex gap-2">
              <dt className="w-11 shrink-0 font-medium text-cobalt">
                {s.label}:
              </dt>
              <dd className="text-night/75">{s.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-1.5">
          {repo.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-night/10 bg-white/70 px-2 py-0.5 font-mono text-xs text-night/75"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-1">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(ui.actions.code)} : ${repo.name}`}
            className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-night transition hover:text-cobalt"
          >
            <img
              src={git}
              alt=""
              aria-hidden="true"
              className="h-[18px] w-[18px] object-contain"
            />
            GitHub
          </a>

          {repo.demo && (
            <a
              href={repo.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(repo.demo.label)} : ${repo.name}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cobalt to-cyan-electric px-4 py-2.5 text-sm font-semibold text-black shadow-glow transition hover:brightness-110"
            >
              <Globe size={18} />
              {t(repo.demo.label)}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
