import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { education } from '../../content';
import Section from '../ui/Section';
import Timeline from '../ui/Timeline';

export default function Education() {
  const t = useLocalized();
  return (
    <Section id="education" title={t(ui.sections.educationTitle)} lead={t(ui.sections.educationLead)}>
      <Timeline entries={education} />
    </Section>
  );
}