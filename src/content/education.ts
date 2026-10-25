import type { TimelineEntry } from '../interfaces/content';

// Pour ajouter une formation : ajoute un objet. Le tri est automatique.
export const education = [
  {
    id: 'aec-big-data',
    start: '2025-10',
    end: '2027-06',
    organization: 'Collège de Bois-de-Boulogne',
    location: 'Montréal, QC',
    title: { fr: 'AEC en Big Data (Mégadonnées)', en: 'AEC in Big Data' },
  },
  {
    id: 'iut-baccalaureat',
    start: '2022-09',
    end: '2023-07',
    organization: 'IUT de Douala',
    location: 'Douala, Cameroun',
    title: { fr: 'Baccalauréat · Sciences de l’informatique', en: 'Bachelor’s · Computer Science' },
  },
  {
    id: 'iut-dec',
    start: '2020-09',
    end: '2022-07',
    organization: 'IUT de Douala',
    location: 'Douala, Cameroun',
    title: {
      fr: 'Diplôme d’études collégiales · Techniques de l’informatique',
      en: 'College diploma · Computer Technology',
    },
  },
] satisfies TimelineEntry[];
