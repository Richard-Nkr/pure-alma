# Pure Alma — Landing page

Landing page pour **Pure Alma**, un amlou marocain artisanal (amandes torréfiées, huile d'argan et miel).

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Déployé sur [Vercel](https://vercel.com)

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
