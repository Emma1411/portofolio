import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';
import { useLocalized } from '../../hooks/useLocalized';
import { ui } from '../../i18n/ui';
import { profile } from '../../content';
import logo from '../../assets/logo.svg';
import type { Lang } from '../../interfaces/content';

const links = ['about', 'skills', 'projects', 'experience', 'education'] as const;
const langs: Lang[] = ['fr', 'en'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useLocalized();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 shadow-soft">
        <a href="#top" className="flex items-center" aria-label={profile.name}>
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="rounded-lg px-3 py-2 text-sm font-medium text-night/70 transition hover:bg-ice hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-azure">
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-azure/20 p-0.5 font-mono text-xs" role="group" aria-label="Langue / Language">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-md px-2.5 py-1 uppercase transition ${lang === l ? 'bg-night text-white' : 'text-night/60 hover:text-cobalt'}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-lg bg-gradient-to-r from-cobalt to-cyan-electric px-4 py-2 text-sm font-semibold text-black shadow-glow transition hover:brightness-110 sm:block">
            {t(ui.nav.contact)}
          </a>
          <button className="grid h-9 w-9 place-items-center rounded-lg md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 shadow-soft md:hidden">
          {[...links, 'contact' as const].map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-ice">
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}