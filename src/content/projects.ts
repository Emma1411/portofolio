import type { Project } from '../interfaces/content';
import lottoFront from '../assets/projects/lotto-front.png';
import lottoApi from '../assets/projects/lotto-api.svg';
import lottoData from '../assets/projects/lotto-data.svg';
import ragApi from '../assets/projects/rag-api.svg';
import emmaIa from '../assets/projects/emma-ia.svg';
import emmaDemoApi from '../assets/projects/emma-demo-api.svg';
import emmaDemoFront from '../assets/projects/emma-demo-front.png';
import collisions from '../assets/projects/collisions.png';

const GH = 'https://github.com/Emma1411';

// Pour ajouter un projet : ajoute un objet (et ses images dans assets/projects).
// Pour ajouter un dépôt à un projet : ajoute un objet dans son tableau `repos`.
export const projects = [
  {
    id: 'lotto-intelligence',
    order: 1,
    title: 'Lotto Intelligence',
    subtitle: { fr: 'Analyse probabiliste & prédictions IA', en: 'Probabilistic analysis & AI predictions' },
    pitch: {
      fr: 'Plus de 40 ans de tirages, un pipeline qui se met à jour tout seul et des modèles jugés contre le hasard. Le backtesting reste honnête : AUC 0.61 face à une base aléatoire.',
      en: 'Over 40 years of draws, a pipeline that updates itself and models judged against pure chance. The backtesting stays honest: AUC 0.61 against a random baseline.',
    },
    metrics: [
      { value: '1982→', label: { fr: 'historique complet des tirages', en: 'complete draw history' } },
      { value: '0.61', label: { fr: 'AUC vs baseline aléatoire', en: 'AUC vs random baseline' } },
      { value: '2×/sem.', label: { fr: 'ingestion automatique', en: 'automatic ingestion' } },
    ],
    repos: [
      {
        id: 'lotto649-front',
        name: 'lotto649-front',
        kind: 'front',
        badge: { fr: 'DÉPLOYÉ • PROD', en: 'DEPLOYED • PROD' },
        sysTag: 'SYS: LOTTO-UI',
        title: { fr: 'Tableau de bord Lotto', en: 'Lotto dashboard' },
        summary: {
          fr: 'Quarante ans de tirages rendus lisibles : numéros chauds, prédictions IA, suivi de tickets et backtesting contre le hasard.',
          en: 'Forty years of draws made readable: hot numbers, AI predictions, ticket tracking and backtesting against pure chance.',
        },
        stack: [
          { label: 'UI', value: 'React · TypeScript · Redux' },
          { label: 'Web', value: 'Responsive · Vercel' },
        ],
        tags: ['React', 'Redux', 'Vercel'],
        url: `${GH}/lotto649-front`,
        image: lottoFront,
        demo: {
          url: 'https://lotto649-front.vercel.app/',
          label: { fr: 'Tester la démo', en: 'Try the demo' },
        },
      },
      {
        id: 'lotto649-api',
        name: 'lotto649-api',
        kind: 'api',
        badge: { fr: 'API REST • MVC', en: 'REST API • MVC' },
        sysTag: 'SYS: LOTTO-API',
        title: { fr: 'API de prédiction', en: 'Prediction API' },
        summary: {
          fr: 'Le moteur du service : une API REST en architecture MVC qui sert les prédictions, suit les tickets et expose l’historique des tirages.',
          en: 'The service engine: an MVC REST API that serves predictions, tracks tickets and exposes the draw history.',
        },
        stack: [
          { label: 'API', value: 'FastAPI · architecture MVC' },
          { label: 'DB', value: 'PostgreSQL · MongoDB' },
        ],
        tags: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Docker'],
        url: `${GH}/lotto649-api`,
        image: lottoApi,
      },
      {
        id: 'lotto649-data',
        name: 'lotto649-data',
        kind: 'data',
        badge: { fr: 'ETL • 2×/SEMAINE', en: 'ETL • TWICE A WEEK' },
        sysTag: 'SYS: LOTTO-DATA',
        title: { fr: 'Pipeline de données', en: 'Data pipeline' },
        summary: {
          fr: 'Il se met à jour tout seul : deux fois par semaine, il ingère les nouveaux tirages depuis 1982 et prépare les données pour les modèles de machine learning.',
          en: 'It updates itself: twice a week it ingests new draws going back to 1982 and prepares the data for machine learning models.',
        },
        stack: [
          { label: 'ETL', value: 'Python · PySpark' },
          { label: 'ML', value: 'LightGBM · Random Forest' },
          { label: 'Cron', value: 'GitHub Actions' },
        ],
        tags: ['PySpark', 'LightGBM', 'GitHub Actions'],
        url: `${GH}/lotto649-data`,
        image: lottoData,
      },
    ],
  },
  {
    id: 'emma-ia',
    order: 2,
    title: 'Emma IA',
    subtitle: { fr: 'Assistante d’analyse de crédit', en: 'Credit analysis assistant' },
    pitch: {
      fr: 'Emma lit, structure et analyse les dossiers financiers pour accélérer les analystes. Elle recommande, l’humain décide. Testez-la en direct : fournissez un dossier et obtenez un rapport détaillé.',
      en: 'Emma reads, structures and analyzes financial files to speed up analysts. She recommends, the human decides. Try her live: provide a file and get a detailed report.',
    },
    metrics: [
      { value: '0', label: { fr: 'décision autonome', en: 'autonomous decisions' } },
      { value: '1:1', label: { fr: 'conversation par dossier', en: 'conversation per file' } },
      { value: '0', label: { fr: 'donnée conservée en démo', en: 'data kept in the demo' } },
    ],
    repos: [
      {
        id: 'emma-ia-demo-front',
        name: 'emma-IA-demo-Front',
        kind: 'front',
        badge: { fr: 'DÉMO PUBLIQUE', en: 'PUBLIC DEMO' },
        sysTag: 'SYS: EMMA-DEMO',
        title: { fr: 'Testez Emma IA', en: 'Try Emma IA' },
        summary: {
          fr: 'Discutez avec Emma, fournissez un dossier financier et consultez le rapport détaillé généré après une analyse complète.',
          en: 'Chat with Emma, provide a financial file and read the detailed report generated after a full analysis.',
        },
        stack: [
          { label: 'UI', value: 'React · Redux' },
          { label: 'Web', value: 'Responsive · Vercel' },
        ],
        tags: ['React', 'Redux', 'Vercel'],
        url: `${GH}/emma-IA-demo-Front`,
        image: emmaDemoFront,
        demo: {
          url: 'https://emma-ia-demo-front.vercel.app/',
          label: { fr: 'Tester Emma IA', en: 'Test Emma IA' },
        },
      },
      {
        id: 'emma-ia-demo-api',
        name: 'emma-IA-demo-API',
        kind: 'api',
        badge: { fr: 'API PUBLIQUE', en: 'PUBLIC API' },
        sysTag: 'SYS: EMMA-RELAY',
        title: { fr: 'Relais de démonstration', en: 'Demo relay' },
        summary: {
          fr: 'Le garde-barrière entre le public et l’IA : une API limitée et stateless qui valide, protège, limite le débit et ne conserve aucune donnée entre deux requêtes.',
          en: 'The gatekeeper between the public and the AI: a limited, stateless API that validates, protects, rate-limits and keeps no data between requests.',
        },
        stack: [
          { label: 'Sec', value: 'Validation · limitation de débit' },
          { label: 'API', value: 'Publique · stateless' },
        ],
        tags: ['Stateless', 'Rate limiting', 'Relais'],
        url: `${GH}/emma-IA-demo-API`,
        image: emmaDemoApi,
      },
      
{
  id: 'emma-ia-service',
  name: 'emma-IA',
  kind: 'ai',
  badge: { fr: 'DÉPLOYÉ • GOOGLE CLOUD', en: 'DEPLOYED • GOOGLE CLOUD' },
  sysTag: 'SYS: EMMA-IA',
  title: { fr: 'Service d’analyse Emma IA', en: 'Emma IA analysis service' },
 
summary: {
  fr: 'Un service d’analyse de crédit propulsé par un LLM, déployé sur Google Cloud Run. Il structure les dossiers financiers et formule des recommandations pour assister les analystes.',
  en: 'An LLM-powered credit analysis service deployed on Google Cloud Run. It structures financial files and generates recommendations to assist analysts.',
},

  stack: [
    { label: 'IA', value: 'LLM · DeepSeek API · prompts versionnés' },
    { label: 'API', value: 'Python · FastAPI · Docker' },
    { label: 'Cloud', value: 'Google Cloud Run · Artifact Registry' },
    { label: 'CI/CD', value: 'GitHub · Cloud Build' },
  ],
  tags: ['FastAPI', 'LLM', 'Docker', 'Google Cloud Run', 'Cloud Build'],
  url: `${GH}/emma-IA`,
  image: emmaIa,
  demo: {
    url: 'https://emma-ia-419943434355.northamerica-northeast1.run.app/api/v1/docs',
    label: { fr: 'Explorer l’API', en: 'Explore the API' },
  },
},

    ],
  },
  {
    id: 'securefinance-rag',
    order: 3,
    title: 'SecureFinance-RAG',
    subtitle: { fr: 'Gestion de crédit & recherche RAG', en: 'Credit management & RAG search' },
    pitch: {
      fr: 'Le socle d’une plateforme d’analyse de crédit pensée comme en banque : accès cloisonné par rôle, authentification forte, documents protégés et recherche RAG sur les dossiers.',
      en: 'The foundation of a credit analysis platform designed like a bank would: role-siloed access, strong authentication, protected documents and RAG search over files.',
    },
    metrics: [
      { value: '5', label: { fr: 'rôles RBAC cloisonnés', en: 'siloed RBAC roles' } },
      { value: 'PIA', label: { fr: 'Loi 25 documentée', en: 'Law 25 documented' } },
      { value: 'MFA', label: { fr: 'activable par configuration', en: 'configurable on/off' } },
    ],
    repos: [
      {
        id: 'secure-finance-rag-api',
        name: 'Secure-finance-RAG-api',
        kind: 'api',
        badge: { fr: 'FINTECH • RBAC', en: 'FINTECH • RBAC' },
        sysTag: 'SYS: SECURE-RAG',
        title: { fr: 'API SecureFinance', en: 'SecureFinance API' },
        summary: {
          fr: 'Chaque métier voit uniquement ce qu’il doit voir : cinq rôles cloisonnés, authentification forte, documents protégés et recherche RAG sur les dossiers.',
          en: 'Each role sees only what it should: five siloed roles, strong authentication, protected documents and RAG search over files.',
        },
        stack: [
          { label: 'Sec', value: 'JWT · MFA · RBAC 5 rôles' },
          { label: 'Data', value: 'PostgreSQL · pgvector' },
          { label: 'API', value: 'FastAPI · architecture MVC' },
        ],
        tags: ['RBAC', 'FastAPI', 'pgvector', 'PIA Loi 25'],
        url: `${GH}/Secure-finance-RAG-api`,
        image: ragApi,
      },
    ],
  },
  {
    id: 'collisions-montreal',
    order: 4,
    title: 'Collisions Montréal',
    subtitle: { fr: 'Collisions routières 2012–2021', en: 'Road collisions 2012–2021' },
    pitch: {
      fr: '131 200 collisions lisibles en dix secondes : combien, quand, qui est touché, dans quelles conditions. Tout est calculé dans le navigateur, sans serveur d’API.',
      en: '131,200 collisions readable in ten seconds: how many, when, who is hurt, under what conditions. Everything is computed in the browser, with no API server.',
    },
    metrics: [
      { value: '131 200', label: { fr: 'collisions analysées', en: 'collisions analyzed' } },
      { value: '47 974', label: { fr: 'avec blessés', en: 'with injuries' } },
      { value: '0', label: { fr: 'serveur d’API', en: 'API servers' } },
    ],
    repos: [
      {
        id: 'collisions-montreal',
        name: 'collisions-Montreal',
        kind: 'front',
        badge: { fr: 'OPEN DATA • MTL', en: 'OPEN DATA • MTL' },
        sysTag: 'SYS: MTL-COLLISIONS',
        title: { fr: 'Explorateur de collisions', en: 'Collisions explorer' },
        summary: {
          fr: 'Filtres par période, gravité, usagers et lieu, carte des points chauds : chaque couleur a sa légende et chaque chiffre vient des données.',
          en: 'Filters by period, severity, road users and location, plus a hotspot map: every color has a legend and every number comes from the data.',
        },
        stack: [
          { label: 'Data', value: 'Neo4j · fichiers statiques bin.gz / JSON' },
          { label: 'UI', value: 'React · TypeScript · MapLibre' },
          { label: 'Test', value: 'Vitest' },
        ],
        tags: ['React', 'MapLibre', 'Open data'],
        url: `${GH}/collisions-Montreal`,
        image: collisions,
        demo: {
          url: 'https://collisions-montreal.vercel.app/',
          label: { fr: 'Explorer les données', en: 'Explore the data' },
        },
      },
    ],
  },
] satisfies Project[];