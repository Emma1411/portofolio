import type { Pipeline } from '../interfaces/content';

export const pipeline = {
  kicker: { fr: 'Architecture standard', en: 'Standard architecture' },
  title: {
    fr: 'Pipeline distribué • Du signal brut à l’interface décisionnelle',
    en: 'Distributed pipeline • From raw signal to decision interface',
  },
  tag: { fr: 'Batch ETL • Automatisé', en: 'Batch ETL • Automated' },
  sourcesLabel: { fr: 'Sources publiques', en: 'Public sources' },
  sources: ['Ville de Montréal', 'Données Québec', 'Loto-Québec'],
  footer: {
    fr: 'Journal d’audit append-only • PIA Loi 25',
    en: 'Append-only audit log • Law 25 PIA',
  },
  stages: [
    {
      id: 'ingestion',
      title: { fr: 'Ingestion', en: 'Ingestion' },
      headline: { fr: 'Open Data & APIs', en: 'Open Data & APIs' },
      tech: ['Multi-sources / JSON / SQL'],
    },
    {
      id: 'processing',
      title: { fr: 'Traitement', en: 'Processing' },
      headline: { fr: 'Pipelines ETL', en: 'ETL pipelines' },
      tech: ['Python', 'PySpark', 'Nettoyage'],
    },
    {
      id: 'modeling',
      title: { fr: 'Modélisation', en: 'Modeling' },
      headline: { fr: 'IA & Probabilités', en: 'AI & Probability' },
      tech: ['LightGBM', 'Random Forest', 'Vector RAG'],
    },
    {
      id: 'security',
      title: { fr: 'Sécurisation', en: 'Security' },
      headline: { fr: 'API REST & RBAC', en: 'REST API & RBAC' },
      tech: ['FastAPI', 'JWT', 'Audit log'],
    },
    {
      id: 'delivery',
      title: { fr: 'Restitution', en: 'Delivery' },
      headline: { fr: 'App Réactive', en: 'Reactive App' },
      tech: ['React', 'Web UX & BI'],
    },
  ],
} satisfies Pipeline;