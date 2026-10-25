import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { projects } from '../../content';
import Section from '../ui/Section';
import ProjectGroup from '../ui/ProjectGroup';

export default function Projects() {
  const t = useLocalized();
  return (
    <Section id="projects" title={t(ui.sections.projectsTitle)} lead={t(ui.sections.projectsLead)}>
      <div className="space-y-20">
        {projects.map((p) => (
          <ProjectGroup key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}