# Javier Redondo — Portfolio

Personal portfolio of Javier Redondo, Full-Stack & AI Engineer based in Barcelona.

**Live:** [javirero.dev](https://javirero.dev)

## Features

- Experience, projects and about sections with expandable cards
- English / Spanish, picked from the browser language and switchable from the header
- Light and dark mode, following the system preference until the visitor chooses one
- Tech stacks shown as brand icons ([Simple Icons](https://simpleicons.org))
- Accessible: keyboard-navigable tabs, visible focus states, reduced-motion support

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Editing content

- **Text (EN/ES):** `src/i18n/translations.js`
- **Company names, project links and tech stacks:** `src/components/Info.jsx`
- **Tech icons:** `src/components/TechIcons.jsx` — a stack item without an icon there is not shown
- **Colors and fonts:** `src/Index.css`

## Deployment

The site is hosted on Firebase Hosting (`firebase.json`).

```bash
npm run deploy                 # log in if needed, build and deploy
npm run deploy -- <project-id> # first time: link the Firebase project, then deploy
```

The script lives in `scripts/deploy.sh` and runs `firebase-tools` through npx, so no global install is needed.

## Author

[@jrero99](https://github.com/jrero99) · [LinkedIn](https://www.linkedin.com/in/redondorodriguezjavier/)
