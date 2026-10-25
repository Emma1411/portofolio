import type { About } from '../interfaces/content';

export const about = {
  paragraphs: [
    {
      fr: 'Je suis développeur : interfaces, API, conception logicielle. Aujourd’hui, je me spécialise en données avec mon AEC en Big Data au Collège de Bois-de-Boulogne, à Montréal.',
      en: 'I’m a developer: interfaces, APIs, software design. Today I’m specializing in data through my AEC in Big Data at Collège de Bois-de-Boulogne in Montréal.',
    },
    {
      fr: 'Ce qui m’intéresse, c’est de relier les deux mondes. Un modèle ne vaut que s’il est alimenté par un pipeline fiable, exposé par une API propre et lisible dans une interface que tout le monde comprend.',
      en: 'What drives me is connecting the two worlds. A model is only as good as the pipeline feeding it, the clean API exposing it and an interface anyone can read.',
    },
    {
      fr: 'Mes projets suivent cette idée : je mesure les modèles contre une base de référence, je documente mes compromis, et l’IA assiste l’humain sans jamais décider à sa place.',
      en: 'My projects follow that idea: I measure models against a baseline, I document my trade-offs, and AI assists the human without ever deciding in their place.',
    },
  ],
  targets: ['Data Analyst', 'Data Engineer', 'Full-Stack Developer'],
} satisfies About;