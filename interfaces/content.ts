export type Lang = 'fr' | 'en';
export type Localized = Record<Lang, string>;

export interface Profile {
  name: string;
  role: Localized;
  typed: Localized[];     // phrases de la machine à écrire
  location: string;
  tagline: Localized;
  links: { github: string; linkedin: string; email: string };
}

export interface About {
  paragraphs: Localized[];
  targets: string[];      // rôles visés
}

/** 1 = notions, 5 = expert. Estimation à ajuster dans content/skills.ts */
export type Proficiency = 1 | 2 | 3 | 4 | 5;
export interface SkillItem { name: string; level: Proficiency }
export interface SkillCategory {
  id: string;
  title: Localized;
  description: Localized;
  items: SkillItem[];
  tags: string[];
}

export type RepoKind = 'front' | 'api' | 'data' | 'ai';
export interface Demo { url: string; label: Localized }
export interface Repo {
  id: string;
  name: string;
  kind: RepoKind;
  url: string;
  summary: Localized;
  stack: string[];
  image: string;          // capture d'écran ou illustration d'architecture
  demo?: Demo;
}
export interface Metric { value: string; label: Localized }
export interface Project {
  id: string;
  order: number;          // position dans la grille
  sysTag: string;
  badge: Localized;
  title: string;
  subtitle: Localized;
  pitch: Localized;
  metrics: Metric[];
  stack: { label: string; value: string }[];
  tags: string[];
  repos: Repo[];
}

/** Sert pour Parcours ET Formation : un seul composant TimelineItem. */
export interface TimelineEntry {
  id: string;
  start: string;          // 'YYYY-MM'
  end: string | null;     // null = toujours en poste
  organization: string;
  location: string;
  title: Localized;
  bullets?: Localized[];
  tags?: string[];
}
