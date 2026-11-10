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
    id: 'generative-ai',
    title: { fr: 'IA générative & LLM', en: 'Generative AI & LLMs' },
    description: {
      fr: 'Des assistants qui citent leurs sources et assistent l’humain.',
      en: 'Assistants that cite their sources and support the human.',
    },
    items: [
      { name: 'LLM · ingénierie des prompts', level: 3 },
      { name: 'RAG · embeddings · pgvector', level: 3 },
      { name: 'Recherche BM25 (MiniSearch)', level: 3 },
      { name: 'Sorties structurées · garde-fous', level: 3 },
      { name: 'DeepSeek API', level: 3 },
    ],
    tags: ['RAG', 'Citations', 'Anonymisation'],
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
      { name: 'GitHub Actions · cron', level: 4 },
      { name: 'MongoDB · Supabase · Aiven', level: 3 },
      { name: 'Kafka · Elasticsearch', level: 2 },
    ],
    tags: ['GitHub Actions', 'Cron', 'ETL'],
  },
  {
    id: 'cloud-devops',
    title: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    description: {
      fr: 'Conteneurs, orchestration et déploiements reproductibles.',
      en: 'Containers, orchestration and reproducible deployments.',
    },
    items: [
      { name: 'Docker · Dockerfiles', level: 4 },
      { name: 'Kubernetes', level: 2 },
      { name: 'Nginx', level: 3 },
      { name: 'AWS (EC2)', level: 3 },
      { name: 'Google Cloud Run', level: 3 },
      { name: 'Vercel · Render', level: 4 },
    ],
    tags: ['Conteneurs', 'Déploiement', 'Cloud'],
  },
  {
    id: 'frontend-ux',
    title: { fr: 'Front-end & UI/UX', en: 'Front-end & UI/UX' },
    description: {
      fr: 'Des interfaces claires, responsives et lisibles par tous.',
      en: 'Clear, responsive interfaces anyone can read.',
    },
    items: [
      { name: 'React · TypeScript', level: 4 },
      { name: 'Next.js', level: 3 },
      { name: 'Angular', level: 3 },
      { name: 'Redux · Tailwind CSS', level: 4 },
      { name: 'Vue.js · Flutter', level: 3 },
      { name: 'UI/UX Design', level: 3 },
    ],
    tags: ['Responsive', 'UI/UX', 'Design d’interface'],
  },
  {
    id: 'backend-security',
    title: { fr: 'Back-end, sécurité & architecture', en: 'Back-end, Security & Architecture' },
    description: {
      fr: 'Concevoir sûr dès le départ, documenter ensuite.',
      en: 'Design for security first, document next.',
    },
    items: [
      { name: 'FastAPI · REST', level: 4 },
      { name: 'Node.js', level: 3 },
      { name: 'PHP · Laravel/Lumen', level: 3 },
      { name: 'RBAC · JWT · MFA', level: 4 },
      { name: 'Architecture MVC · UML', level: 4 },
      { name: 'Conformité Loi 25', level: 3 },
    ],
    tags: ['MVC', 'Audit', 'REST'],
  },
] satisfies SkillCategory[];