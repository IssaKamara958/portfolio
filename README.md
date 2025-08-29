# portfolio
Mon Portfolio
# Portfolio d'Issa Kamara

![Portfolio Screenshot](https://issa-portfeuil.netlify.app/screenshot.png)  
*Capture d’écran du portfolio en ligne.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2ac08b6-29e7-4b4a-9a87-0e63ec2a08cd/deploy-status)](https://app.netlify.com/projects/issa-portfeuil/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-17.0-blue?logo=react)](https://reactjs.org/)
[![GitHub issues](https://img.shields.io/github/issues/IssaKamara958/portfolio)](https://github.com/IssaKamara958/portfolio/issues)

---

## Table des matières
- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation et exécution](#installation-et-exécution)
- [Déploiement sur Netlify](#déploiement-sur-netlify)
- [Connexion SSH avec GitHub](#connexion-ssh-avec-github)
- [Contribuer](#contribuer)
- [Remerciements](#remerciements)
- [Licence](#licence)
- [Contact](#contact)

---

## À propos
Ce projet est le **portfolio professionnel d'Issa Kamara**, développeur web frontend et manager sénégalais.  
Il présente son parcours, ses compétences, ses projets, ainsi qu'un formulaire de contact et une section de devis pour ses services.  
Le portfolio est conçu avec **React.js**, et utilise **React Router**, **Framer Motion**, et **React Helmet** pour une expérience utilisateur dynamique et optimisée SEO.

---

## Technologies utilisées
- **Frontend** : React.js, HTML5, CSS3
- **Backend-as-a-Service** : Supabase (pour la gestion des commentaires)
- **Routing** : react-router-dom
- **Animations** : framer-motion
- **SEO & meta tags** : react-helmet
- **Versioning** : Git & GitHub
- **Déploiement** : Netlify
- **Outils** : VS Code, Node.js, npm, Gemini, FirebaseStudio, ChatGPT

---

## Fonctionnalités
- Navigation fluide via **Navbar**
- Sections dynamiques : Header, About, CV, Projets, Compétences, Contact, Devis, Footer
- Animations au scroll avec **Framer Motion**
- SEO optimisé avec **React Helmet**
- Formulaire de contact pour prise de contact rapide
- Page Devis pour demandes de devis personnalisés
- Section commentaires sous les projets avec authentification GitHub via Supabase

---

## Structure du projet
issa-portfolio/
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── src/
│ ├── components/
│ │ ├── About.js
│ │ ├── Auth/Auth.js
│ │ ├── Comments/Comment.js
│ │ ├── Comments/Comments.js
│ │ ├── Contact.js
│ │ ├── Cv.js
│ │ ├── Devis.js
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── Navbar.js
│ │ ├── Projects.js
│ │ └── Skills.js
│ │
│ ├── App.js
│ ├── App.css
│ └── index.js
│
├── .gitignore
├── package.json
└── README.md

---

## Installation et exécution

1. **Cloner le dépôt :**
```bash
git clone git@github.com:IssaKamara958/portfolio.git
cd portfolio
```
2. **Installer les dépendances :**
```bash
npm install
```
3. **Lancer le serveur de développement :**
```bash
npm start
```
Le site sera accessible sur http://localhost:3000

---

## Déploiement sur Netlify
1. **Créer un build du projet :**
```bash
npm run build
```
2. **Déployer le dossier `build/` sur Netlify** via l’interface ou l'intégration GitHub.
3. **Configurer le domaine personnalisé** si nécessaire.

---

## Connexion SSH avec GitHub
Pour pousser vers GitHub sans mot de passe :

1. **Générer une clé SSH** si ce n’est pas déjà fait :
```bash
ssh-keygen -t ed25519 -C "issakamara958@gmail.com"
```
2. **Copier le contenu de la clé publique** `id_ed25519.pub` :
```bash
cat ~/.ssh/id_ed25519.pub
```
3. **Ajouter la clé sur GitHub** :
   - *Settings → SSH and GPG keys → New SSH Key → coller la clé*
4. **Modifier l’URL du dépôt pour SSH** :
```bash
git remote set-url origin git@github.com:IssaKamara958/portfolio.git
```
5. **Tester la connexion** :
```bash
ssh -T git@github.com
```

---

## Contribuer
1.  **Fork** le projet
2.  Crée une branche (`git checkout -b feature/nom-de-ta-fonctionnalité`)
3.  Commit tes changements (`git commit -m 'Ajout de ma fonctionnalité'`)
4.  Push (`git push origin feature/nom-de-ta-fonctionnalité`)
5.  Crée une **Pull Request**

---

## Remerciements

Je tiens à exprimer ma profonde gratitude envers les personnes et les outils qui ont été essentiels à la réalisation de ce projet :

*   **Mamadou Diagne (Genova - Dofbi)** : Un professeur et un mentor dont l'enseignement et les conseils ont été inestimables pour guider mes pas dans le monde du développement.
*   **Les outils d'IA** qui m'ont accompagné au quotidien :
    *   **Gemini** & **FirebaseStudio** pour leur assistance technique.
    *   **ChatGPT**, mon fidèle compagnon de route.
*   **Les technologies et services** qui ont rendu ce projet possible :
    *   **Supabase** et **Netlify** pour leurs plateformes robustes et simples d'utilisation.

---

## Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## Contact
- **Nom** : Issa Kamara
- **Email** : issakamara958@gmail.com
- **Portfolio en ligne** : https://issa-portfeuil.netlify.app
- **Téléphone** : +221 77 682 84 41
- **LinkedIn** : [linkedin.com/in/issakamara](https://www.linkedin.com/in/issakamara)
- **GitHub** : [github.com/IssaKamara958](https://github.com/IssaKamara958)

> « Si on ne met rien sur la table, on n’a rien sur cette même table. » — Issa Kamara
