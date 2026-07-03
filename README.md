# Pure Alma — Landing page

Landing page pour **Pure Alma**, un amlou marocain artisanal (amandes torréfiées, huile d'argan et miel).

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com) — tokens de la charte `amla-*`
- [Astryx](https://github.com/facebook/astryx) — provider/thème disponible (bridge Tailwind)
- Typographies : `Shrooms Garden` (titres, `next/font/local`), `Oswald` (condensée : boutons, chiffres, sous-titres), `Inter` (corps)
- TypeScript
- Déployé sur [Vercel](https://vercel.com)

### Charte graphique

| Rôle | Couleur | Token Tailwind |
| --- | --- | --- |
| Primaire (navy) | `#133056` | `amla-blue` |
| Accent / CTA (moutarde) | `#F2B705` | `amla-yellow` |
| Fond crème | `#FDFBF7` | `amla-bg` |
| Texte | `#1A202C` | `amla-text` |

### Astryx CLI

```bash
npm run astryx -- component --list   # lister les composants
npm run astryx -- docs tokens        # référence des tokens
```

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Sert le build de production |
| `npm run lint` | Analyse ESLint |

## Structure

- `src/app/` — layout, page racine et styles globaux (design system dans `globals.css`)
- `src/components/` — sections de la landing page (Hero, Products, Benefits, etc.)
