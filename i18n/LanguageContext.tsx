import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '../interfaces/content';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void }
const Ctx = createContext<LangCtx>({ lang: 'fr', setLang: () => {} });

const readInitial = (): Lang => {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch { /* stockage indisponible */ }
  return 'fr';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitial);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch { /* ignore */ }
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);