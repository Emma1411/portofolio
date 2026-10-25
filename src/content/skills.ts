import type { SkillCategory } from '../interfaces/content';

// level : 1 = notions … 5 = expert. Estimation de départ : ajuste-la honnêtement.
export const skills = [
  {
    id: 'data-ml',
    title: { fr: 'Data & Analyse prédictive', en: 'Data & Predictive Analytics' },
    description: {
      fr: 'Explorer, modéliser et évaluer contre une base de référence.',
      en: 'Explore, model and evaluate against a baseline.',
    },
    items: [
      { name: 'Python', level: 4 },
      { name: 'SQL · PostgreSQL', level: 4 },
      { name: 'PySpark', level: 3 },
      { name: 'LightGBM · Random Forest', level: 3 },
      { name: 'Neo4j (graphes)', level: 2 },
    ],
    tags: ['ETL', 'Backtesting', 'Open data'],
  },
  {
    id: 'data-engineering',
    title: { fr: 'Data Engineering & Pipelines', en: 'Data Engineering & Pipelines' },
    description: {
      fr: 'Des flux de données automatisés, déployés et surveillés.',
      en: 'Automated, deployed and monitored data flows.',
    },
    items: [
      { name: 'ETL · ingestion automatisée', level: 4 },
      { name: 'Docker', level: 4 },
      { name: 'AWS · Render · Vercel', level: 3 },
      { name: 'MongoDB · pgvector', level: 3 },
      { name: 'Kafka · Elasticsearch', level: 2 },
    ],
    tags: ['GitHub Actions', 'Cron', 'Cloud'],
  },
  {
    id: 'full-stack',
    title: { fr: 'Full-Stack & Web moderne', en: 'Full-Stack & Modern Web' },
    description: {
      fr: 'Du composant d’interface à l’API qui l’alimente.',
      en: 'From the UI component to the API behind it.',
    },
    items: [
      { name: 'React · TypeScript', level: 4 },
      { name: 'Redux', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'FastAPI · REST', level: 4 },
      { name: 'Vue.js · Flutter', level: 3 },
    ],
    tags: ['MVC', 'REST', 'Responsive'],
  },
  {
    id: 'security-architecture',
    title: { fr: 'Sécurité & Architecture', en: 'Security & Architecture' },
    description: {
      fr: 'Concevoir sûr dès le départ, documenter ensuite.',
      en: 'Design for security first, document next.',
    },
    items: [
      { name: 'RBAC · JWT · MFA', level: 4 },
      { name: 'Architecture MVC', level: 4 },
      { name: 'Modélisation UML', level: 4 },
      { name: 'Conformité Loi 25', level: 3 },
      { name: 'RAG & LLM', level: 3 },
    ],
    tags: ['Audit', 'Defense in depth'],
  },
] satisfies SkillCategory[];
