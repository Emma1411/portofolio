import type { Localized } from '../interfaces/content';

// Textes d'interface uniquement (contenu du portfolio : voir src/content/)
export const ui = {
  nav: {
    about: { fr: 'À propos', en: 'About' },
    skills: { fr: 'Compétences', en: 'Skills' },
    projects: { fr: 'Projets', en: 'Projects' },
    experience: { fr: 'Parcours', en: 'Experience' },
    education: { fr: 'Formation', en: 'Education' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  sections: {
    aboutTitle: { fr: 'Là où le web rencontre les données', en: 'Where the web meets data' },
    skillsTitle: { fr: 'Compétences techniques', en: 'Technical skills' },
    skillsLead: {
      fr: 'Les outils que j’utilise dans mes projets, du pipeline à l’interface.',
      en: 'The tools I use across my projects, from pipeline to interface.',
    },
  },
  about: {
    current: { fr: 'En ce moment', en: 'Right now' },
    latest: { fr: 'Dernier poste', en: 'Latest role' },
    targets: { fr: 'Rôles visés', en: 'Roles I’m targeting' },
    until: { fr: 'jusqu’en', en: 'until' },
  },
  actions: {
    code: { fr: 'Code source', en: 'Source code' },
    cv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
    seeProjects: { fr: 'Voir mes projets', en: 'See my projects' },
  },
  repoKind: {
    front: { fr: 'Interface', en: 'Front-end' },
    api: { fr: 'API', en: 'API' },
    data: { fr: 'Données', en: 'Data' },
    ai: { fr: 'IA', en: 'AI' },
  },
  timeline: {
    present: { fr: 'Aujourd’hui', en: 'Present' },
    ongoing: { fr: 'En cours', en: 'In progress' },
  },
  stats: {
    years: { fr: 'ans d’expérience', en: 'years of experience' },
    projects: { fr: 'projets livrés', en: 'projects shipped' },
    repos: { fr: 'dépôts GitHub', en: 'GitHub repositories' },
  },
} satisfies Record<string, Record<string, Localized>>;
