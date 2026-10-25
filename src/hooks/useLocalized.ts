import { useLang } from '../i18n/LanguageContext';
import type { Localized } from '../interfaces/content';

/** const t = useLocalized();  t(project.pitch) */
export const useLocalized = () => {
  const { lang } = useLang();
  return (text: Localized) => text[lang];
};
