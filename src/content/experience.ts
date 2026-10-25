import type { TimelineEntry } from '../interfaces/content';

// Pour ajouter un poste : ajoute un objet. Le tri et les durées sont automatiques.
export const experience = [
  {
    id: 'nexah',
    start: '2023-03',
    end: '2025-05',
    organization: 'NEXAH',
    location: 'Douala, Cameroun',
    title: {
      fr: 'Développeur logiciel · Front-End, Back-End & conception',
      en: 'Software Developer · Front-End, Back-End & Design',
    },
    bullets: [
      {
        fr: 'Analyse des besoins fonctionnels et techniques, conception des solutions avant développement.',
        en: 'Analyzed functional and technical needs and designed solutions before development.',
      },
      {
        fr: 'Modélisation UML : cas d’utilisation, classes, séquences et processus métier.',
        en: 'UML modeling: use cases, classes, sequences and business processes.',
      },
      {
        fr: 'Développement et maintenance des interfaces (front-end) et des fonctionnalités serveur (back-end).',
        en: 'Built and maintained user interfaces (front-end) and server-side features (back-end).',
      },
      {
        fr: 'Conception et intégration d’API entre les interfaces, la logique métier et les bases de données.',
        en: 'Designed and integrated APIs between interfaces, business logic and databases.',
      },
      {
        fr: 'Conteneurisation avec Docker et déploiement sur AWS (EC2).',
        en: 'Containerized apps with Docker and deployed them on AWS (EC2).',
      },
    ],
    tags: ['Docker', 'AWS EC2', 'UML', 'REST API'],
  },
  {
    id: 'teneshopping',
    start: '2021-03',
    end: '2023-02',
    organization: 'Teneshopping',
    location: 'Douala, Cameroun',
    title: { fr: 'Développeur front-end', en: 'Front-End Developer' },
    bullets: [
      {
        fr: 'Interfaces du site e-commerce en Vue.js, JavaScript, HTML5 et CSS3 : catalogue, catégories, fiches produits, prix.',
        en: 'Built e-commerce interfaces with Vue.js, JavaScript, HTML5 and CSS3: catalog, categories, product pages, pricing.',
      },
      {
        fr: 'Recherche et filtrage des produits pour faciliter la navigation.',
        en: 'Implemented product search and filtering to simplify navigation.',
      },
      {
        fr: 'Écrans de l’application mobile en Flutter et Dart, publiée sur Google Play.',
        en: 'Built mobile app screens with Flutter and Dart, published on Google Play.',
      },
      {
        fr: 'Intégration d’API REST pour synchroniser les interfaces et les services back-end.',
        en: 'Integrated REST APIs to keep interfaces and back-end services in sync.',
      },
      {
        fr: 'Tests et correction d’anomalies : ergonomie, stabilité, expérience utilisateur.',
        en: 'Testing and bug fixing to improve usability, stability and user experience.',
      },
    ],
    tags: ['Vue.js', 'Flutter', 'Dart', 'REST API'],
  },
] satisfies TimelineEntry[];
