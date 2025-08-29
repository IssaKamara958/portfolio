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
- **Routing** : react-router-dom
- **Animations** : framer-motion
- **SEO & meta tags** : react-helmet
- **Versioning** : Git & GitHub
- **Déploiement** : Netlify
- **Outils** : VS Code, Node.js, npm

---

## Fonctionnalités
- Navigation fluide via **Navbar**
- Sections dynamiques : Header, About, CV, Projets, Compétences, Contact, Devis, Footer
- Animations au scroll avec **Framer Motion**
- SEO optimisé avec **React Helmet**
- Formulaire de contact pour prise de contact rapide
- Design responsive adapté aux mobiles et tablettes
- Page Devis pour demandes de devis personnalisés

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

yaml
Copier le code

---

## Installation et exécution

1. **Cloner le dépôt :**
```bash
git clone git@github.com:IssaKamara958/portfolio.git
cd portfolio
Installer les dépendances :

bash
Copier le code
npm install
Lancer le serveur de développement :

bash
Copier le code
npm start
Le site sera accessible sur http://localhost:3000

Déploiement sur Netlify
Crée un build du projet :

bash
Copier le code
npm run build
Déploie le dossier build/ sur Netlify via l’interface ou GitHub Integration.

Configure le domaine personnalisé si nécessaire.

Connexion SSH avec GitHub
Pour pousser vers GitHub sans mot de passe :

Générer une clé SSH si ce n’est pas déjà fait :

bash
Copier le code
ssh-keygen -t ed25519 -C "issakamara958@gmail.com"
Copier le contenu de la clé publique id_ed25519.pub :

bash
Copier le code
cat ~/.ssh/id_ed25519.pub
Ajouter la clé sur GitHub :

Settings → SSH and GPG keys → New SSH Key → coller la clé

Modifier l’URL du dépôt pour SSH :

bash
Copier le code
git remote set-url origin git@github.com:IssaKamara958/portfolio.git
Tester la connexion :

bash
Copier le code
ssh -T git@github.com
Contribuer
Fork le projet

Crée une branche (git checkout -b feature/nom-de-ta-fonctionnalité)

Commit tes changements (git commit -m 'Ajout de ma fonctionnalité')

Push (git push origin feature/nom-de-ta-fonctionnalité)

Crée une Pull Request

Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Contact
Nom : Issa Kamara

Email : issakamara958@gmail.com

Portfolio en ligne : https://issa-portfeuil.netlify.app

Téléphone : +221 77 682 84 41

LinkedIn : linkedin.com/in/issakamara

GitHub : github.com/IssaKamara958

« Si on ne met rien sur la table, on n’a rien sur cette même table. » — Issa Kamara
