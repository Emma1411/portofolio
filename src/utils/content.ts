import type { Lang, Project, TimelineEntry } from '../interfaces/content';

export const coverOf = (p: Project) => (p.repos.find((r) => r.kind === 'front') ?? p.repos[0]).image;
export const demoOf = (p: Project) => p.repos.find((r) => r.demo)?.demo;

const monthIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};
const nowYm = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

export const isOngoing = (e: TimelineEntry) => e.end === null || e.end > nowYm();

export const formatMonth = (ym: string, lang: Lang) => {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(y, m - 1, 1));
};

export const formatPeriod = (e: TimelineEntry, lang: Lang, presentLabel: string) =>
  `${formatMonth(e.start, lang)} – ${e.end ? formatMonth(e.end, lang) : presentLabel}`;

/** Années d'expérience calculées depuis les dates (chevauchements ignorés). */
export const yearsOfExperience = (entries: TimelineEntry[]) => {
  const now = monthIndex(nowYm());
  const spans = entries
    .map((e) => [monthIndex(e.start), e.end ? Math.min(monthIndex(e.end), now) : now] as const)
    .sort((a, b) => a[0] - b[0]);
  let total = 0;
  let [s, e] = spans[0] ?? [0, -1];
  for (const [ns, ne] of spans.slice(1)) {
    if (ns <= e + 1) e = Math.max(e, ne);
    else { total += e - s + 1; [s, e] = [ns, ne]; }
  }
  total += e - s + 1;
  return Math.floor(total / 12);
};
