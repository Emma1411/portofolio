import type { Profile } from '../interfaces/content';

export const profile = {
  name: 'MBENGALA EMMANUEL VANECH',
  role: { fr: 'Développeur Data & Full-Stack', en: 'Data & Full-Stack Developer' },
  typed: [
    { fr: 'Pipelines de données', en: 'Data pipelines' },
    { fr: 'API et architecture MVC', en: 'APIs and MVC architecture' },
    { fr: 'Interfaces React', en: 'React interfaces' },
    { fr: 'IA avec l’humain aux commandes', en: 'AI with a human in the loop' },
  ],
  location: 'Montréal, QC',
  tagline: {
    fr: 'Je transforme des données brutes en produits concrets : pipelines, API et interfaces, du premier fichier à la mise en production.',
    en: 'I turn raw data into working products: pipelines, APIs and interfaces, from the first file to production.',
  },
  links: {
    github: 'https://github.com/Emma1411',
    linkedin: 'https://www.linkedin.com/in/emmanuel-vanech-mbengala-888b04259/',
    email: 'mbengalaemmanuel@gmail.com',
  },
} satisfies Profile;