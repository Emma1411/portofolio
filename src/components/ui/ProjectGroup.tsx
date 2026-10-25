import { useLocalized } from '../../hooks/useLocalized';
import type { Project } from '../../interfaces/content';
import ProjectCard from './ProjectCard';

export default function ProjectGroup({ project }: { project: Project }) {
  const t = useLocalized();
  const single = project.repos.length === 1;

  const header = (
    <header
      className={
        single
          ? 'lg:col-span-2 lg:self-center lg:pr-10'
          : 'mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-5'
      }
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-cobalt">{t(project.subtitle)}</p>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-night sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-night/75">{t(project.pitch)}</p>
      </div>

      <dl className={`grid grid-cols-3 gap-2 ${single ? 'mt-6 max-w-lg' : 'w-full max-w-md'}`}>
        {project.metrics.map((m, i) => (
          <div key={i} className="glass flex flex-col-reverse rounded-xl px-3 py-2.5">
            <dt className="mt-0.5 text-[11px] leading-tight text-night/60">{t(m.label)}</dt>
            <dd className="font-mono text-lg font-medium text-night">{m.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );

  if (single) {
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        {header}
        <ProjectCard repo={project.repos[0]} />
      </div>
    );
  }

  return (
    <div>
      {header}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {project.repos.map((r) => (
          <ProjectCard key={r.id} repo={r} />
        ))}
      </div>
    </div>
  );
}