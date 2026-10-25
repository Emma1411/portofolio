import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { experience } from '../../content';
import Section from '../ui/Section';
import Timeline from '../ui/Timeline';

export default function Experience() {
  const t = useLocalized();
  return (
    <Section id="experience" title={t(ui.sections.experienceTitle)} lead={t(ui.sections.experienceLead)}>
      <Timeline entries={experience} />
    </Section>
  );
}