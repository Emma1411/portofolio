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
    projectsTitle: { fr: 'Projets phares', en: 'Featured projects' },
    projectsLead: {
      fr: 'Chaque projet va des données à l’interface. Chaque carte renvoie vers son dépôt GitHub et, quand elle existe, vers sa démo en ligne.',
      en: 'Each project goes from data to interface. Every card links to its GitHub repository and, when there is one, to its live demo.',
    },
    experienceTitle: { fr: 'Parcours professionnel', en: 'Professional experience' },
    experienceLead: {
      fr: 'Du développement front-end à la conception de solutions complètes : interfaces, API, conteneurs et cloud.',
      en: 'From front-end development to complete solution design: interfaces, APIs, containers and cloud.',
    },
    educationTitle: { fr: 'Formation', en: 'Education' },
    educationLead: {
      fr: 'Un socle solide en informatique, aujourd’hui complété par une spécialisation en Big Data.',
      en: 'A solid computer science foundation, now complemented by a specialization in Big Data.',
    },
  },
  about: {
    current: { fr: 'En ce moment', en: 'Right now' },
    latest: { fr: 'Dernier poste', en: 'Latest role' },
    targets: { fr: 'Rôles visés', en: 'Roles I’m targeting' },
    until: { fr: 'jusqu’en', en: 'until' },
  },
    contact: {
    title: {
      fr: 'Démarrons un projet ou discutons d’une opportunité',
      en: 'Let’s start a project or talk about an opportunity',
    },
    lead: {
      fr: 'Un poste en data ou en développement full-stack, une collaboration, une question sur l’un de mes projets : écrivez-moi.',
      en: 'A data or full-stack role, a collaboration, a question about one of my projects: write to me.',
    },
    formTitle: { fr: 'Envoyer un message', en: 'Send a message' },
    name: { fr: 'Nom', en: 'Name' },
    namePlaceholder: { fr: 'Votre nom', en: 'Your name' },
    email: { fr: 'Courriel', en: 'Email' },
    emailPlaceholder: { fr: 'vous@exemple.com', en: 'you@example.com' },
    message: { fr: 'Message', en: 'Message' },
    messagePlaceholder: {
      fr: 'Parlez-moi de votre projet ou de votre offre…',
      en: 'Tell me about your project or your offer…',
    },
    send: { fr: 'Envoyer le message', en: 'Send message' },
    sending: { fr: 'Envoi…', en: 'Sending…' },
    success: {
      fr: 'Message envoyé, merci ! Je vous réponds dès que possible.',
      en: 'Message sent, thank you! I’ll get back to you as soon as I can.',
    },
    error: {
      fr: 'L’envoi a échoué. Écrivez-moi directement à',
      en: 'Sending failed. Please email me directly at',
    },
    mailtoHint: {
      fr: 'Le bouton ouvre votre application de messagerie.',
      en: 'The button opens your email app.',
    },
    subjectPrefix: { fr: 'Contact depuis le portfolio :', en: 'Portfolio contact:' },
  },
  footer: {
    built: { fr: 'Conçu et codé avec React & Tailwind', en: 'Designed and built with React & Tailwind' },
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