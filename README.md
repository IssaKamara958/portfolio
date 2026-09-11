# Issa KAMARA — Portfolio professionnel

Portfolio professionnel d'**Issa KAMARA**, informaticien basé à Thiès, Sénégal.

> **Informaticien expérimenté · Support IT · Systèmes · Réseaux · Digitalisation**

Le site présente son parcours informatique, ses compétences techniques, ses projets métiers, son CV et son approche de résolution de problèmes. Les projets techniques sont regroupés dans le [Portfolio 3D](https://issa-kamara-portfolio-3d.web.app/).

## Liens

- **Site professionnel** : https://issa-portfeuil.netlify.app/
- **Portfolio projets / 3D** : https://issa-kamara-portfolio-3d.web.app/
- **GitHub** : https://github.com/IssaKamara958
- **LinkedIn** : https://www.linkedin.com/in/issakamara/
- **Contact** : issakamara958@gmail.com

## Positionnement

Le portfolio met en avant :

- plus de 13 ans d'expérience informatique ;
- le support utilisateurs, le matériel et la maintenance ;
- les environnements Windows et le diagnostic ;
- les réseaux IP, LAN, Wi-Fi, DHCP et DNS ;
- la digitalisation et les applications métiers ;
- le développement web comme compétence complémentaire ;
- une montée en compétence progressive en vidéosurveillance IP et systèmes connectés.

## Fonctionnalités

- Navigation responsive et accessible.
- Sections À propos, IT & Systèmes, Compétences, Projets, Expérience, CV et Contact.
- Formulaire de contact compatible avec Netlify Forms.
- Métadonnées SEO, Open Graph, données structurées JSON-LD, `robots.txt` et `sitemap.xml`.
- Génération locale d'un CV PDF nommé `Issa-Kamara-CV-Informaticien-2026.pdf`.
- Design professionnel responsive avec prise en compte de `prefers-reduced-motion`.
- Redirection de toutes les présentations de projets vers le Portfolio 3D.

## Stack technique

- React 18
- React Router
- React Helmet
- JavaScript, HTML5 et CSS3
- jsPDF pour la génération du CV
- React Icons, Framer Motion et AOS disponibles dans le projet
- Netlify pour le déploiement et le formulaire
- Supabase conservé pour les fonctionnalités historiques du dépôt

## Installation locale

Prérequis : Node.js et npm.

```bash
git clone git@github.com:IssaKamara958/portfolio.git
cd portfolio
npm install
npm start
```

Le serveur de développement est disponible sur http://localhost:3000.

## Scripts

```bash
npm start                 # serveur de développement
npm run build             # build de production
npm test                  # tests React en mode interactif
CI=true npm test -- --watchAll=false
```

Le projet ne contient actuellement aucun test automatisé ; la commande de test termine donc avec le statut « aucun test trouvé ».

## Déploiement Netlify

Le dépôt peut être relié directement à Netlify :

- **Build command** : `npm run build`
- **Publish directory** : `build`
- **Node** : version LTS recommandée

Après chaque push sur la branche de production, Netlify reconstruit et publie le dossier `build/`.

Le formulaire de contact utilise l'attribut `data-netlify="true"`. Après déploiement, l'identité du formulaire et les notifications doivent être vérifiées dans le tableau de bord Netlify.

## Structure principale

```text
public/
├── assets/images/       # images publiques
├── index.html           # métadonnées globales et Open Graph
├── robots.txt
└── sitemap.xml

src/
├── components/          # composants historiques et réutilisables
├── layouts/
│   ├── Navbar/
│   └── Footer/
├── pages/
│   ├── Home.js          # page professionnelle principale
│   └── Home.css
├── App.js
└── index.css
```

## Notes de contenu

Les dates, expériences, formations et certifications doivent rester conformes au CV réel. Les compétences en sécurité électronique sont présentées comme une montée en compétence ou un laboratoire personnel lorsqu'elles ne correspondent pas encore à une expérience professionnelle confirmée.

## Licence

Ce projet est distribué sous licence MIT. Voir [LICENSE](LICENSE).

## Auteur

**Issa KAMARA** — Thiès, Sénégal

Email : [issakamara958@gmail.com](mailto:issakamara958@gmail.com)
Téléphone : +221 77 682 84 41
