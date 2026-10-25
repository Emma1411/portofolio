# Portfolio — MBENGALA EMMANUEL VANECH

## Description

Portfolio personnel d'un développeur Data & Full-Stack. Application web React qui présente mon parcours, mes compétences et mes projets (pipelines de données, API, IA et interfaces). Site statique, bilingue (FR / EN), sans backend ni base de données : tout le contenu vit dans le projet sous forme de données typées.

🔗 Lien de démonstration : https://portofolio-ten-theta-20.vercel.app/


## Stack technique

| Composant | Technologie |
|---|---|
| Framework | React |
| Langage | TypeScript |
| État | React Context (langue), aucune bibliothèque d'état |
| Styling | Tailwind CSS v3 |
| Icônes | Lucide React |
| Typographies | Space Grotesk, Inter, JetBrains Mono |
| Build | Vite |
| Formulaire | Formspree (optionnel) |
| Déploiement | Vercel |

## Architecture Frontend

```
┌─────────────────────────────────────────────────────────────────┐
│                        React Application                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│   │   Sections   │    │  Composants  │    │    Hooks     │      │
│   │ Hero, About, │    │  cartes,     │    │ i18n, tilt,  │      │
│   │  Projets...  │    │  timeline    │    │ in-view...   │      │
│   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘      │
│          └───────────────────┼───────────────────┘              │
│                              │                                  │
│                     ┌────────▼────────┐                         │
│                     │ LanguageContext │                         │
│                     │    (FR / EN)    │                         │
│                     └────────┬────────┘                         │
│                              │                                  │
│                     ┌────────▼────────┐                         │
│                     │  Couche contenu │                         │
│                     │  src/content/*  │                         │
│                     └─────────────────┘                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │ npm run build
                              ▼
                    ┌──────────────────┐
                    │  Site statique   │
                    │     (Vercel)     │
                    └────────┬─────────┘
                             │ formulaire (optionnel)
                             ▼
                    ┌──────────────────┐
                    │                  │
                    │    boîte Gmail   │
                    └──────────────────┘
```
