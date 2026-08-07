# Site public — ONG CHADIA

Site vitrine de **CHADIA pour le Développement du Tchad (CDT)**, ONG de droit
tchadien enregistrée le 08/12/2021.

🌍 **Production : [ong-chadia.com](https://ong-chadia.com)**

## Stack

- **Next.js 15** (App Router) — les 6 pages sont prérendues en statique au build
- **React 18**
- **Tailwind CSS 4**
- Polices : Instrument Serif, Plus Jakarta Sans, JetBrains Mono (`next/font`)
  et Phosphor Icons auto-hébergé
- Hébergement : **Vercel**, servi depuis le CDN

Aucune base de données, aucune API, aucune variable d'environnement requise.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil |
| `/mission` | Notre mission |
| `/precom` | Projet PRECOM |
| `/resultats` | Résultats des projets |
| `/gouvernance` | Gouvernance & éthique |
| `/contact` | Contact |

## Déploiement

Le dépôt est connecté à Vercel : **tout push sur `main` déploie en production**,
et chaque autre branche génère une preview automatique.

Déploiement manuel si besoin :

```bash
vercel --prod
```

## Origine du projet

Ce site a été extrait du monorepo [`chadia-projects`](https://github.com/Gojobyte/chadia-projects)
(dossier `services/gateway`, branche `main`), qui contenait à la fois le site
public et une application privée en microservices.

Seule la partie publique a été conservée ici. L'application privée
(authentification, gestion des marchés publics, bibliothèque documentaire)
reste dans le monorepo d'origine, sur la branche `feat/deploy-prod-hetzner`.

### Points d'attention pour la suite

- **Le formulaire de contact** (`/contact`) utilise `action="mailto:"` : il ouvre
  le client mail du visiteur. Le domaine dispose déjà d'une configuration Resend
  (DKIM/SPF/MX) si l'on souhaite un envoi côté serveur.
- **La page `/rapports`** (états financiers) a été retirée volontairement : elle
  était marquée confidentielle par le middleware et `next.config.mjs` du projet
  d'origine, et ses PDF ne sont pas versionnés. Ne pas la remettre en ligne sans
  décision explicite de l'ONG.
