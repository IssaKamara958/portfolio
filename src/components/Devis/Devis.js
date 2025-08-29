import React, { useState } from 'react';
import './Devis.css';

const Devis = () => {
  const [showOffre2, setShowOffre2] = useState(false);
  const [showOffre3, setShowOffre3] = useState(false);

  return (
    <div className="app-background">
      <header className="devis-header">
        <h1>Devis Site Vitrine</h1>
        <p>Conception avec React.js, Node.js & MySQL – Tarification détaillée</p>
      </header>

      <section>
        <h2>🔧 Technologies utilisées</h2>
        <ul>
          <li><strong>Frontend :</strong> React.js, HTML5, CSS3, Bootstrap/Tailwind</li>
          <li><strong>Backend :</strong> Node.js + Express.js</li>
          <li><strong>Base de données :</strong> MySQL</li>
          <li><strong>Déploiement :</strong> Netlify, Render, Railway</li>
          <li><strong>Sécurité :</strong> JWT, Middleware</li>
          <li><strong>Outils :</strong> Git, GitHub, VS Code, PhpMyAdmin</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Offre 1 – Essentielle (Basique)</h2>
        <table>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Description</th>
              <th>Coût (FCFA)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Analyse et conception</td><td>Maquette, structure</td><td>15 000</td></tr>
            <tr><td>Design (UI/UX)</td><td>Charte graphique</td><td>20 000</td></tr>
            <tr><td>Développement frontend</td><td>Pages React.js</td><td>40 000</td></tr>
            <tr><td>Développement backend</td><td>API Node.js</td><td>35 000</td></tr>
            <tr><td>Base de données</td><td>1 table MySQL</td><td>15 000</td></tr>
            <tr><td>Formulaire de contact</td><td>Stockage + email</td><td>10 000</td></tr>
            <tr><td>Hébergement (1 an)</td><td>Netlify + Railway</td><td>0</td></tr>
            <tr><td>Tests & livraison</td><td>Débogage & doc</td><td>10 000</td></tr>
            <tr><td><strong>Main d’œuvre</strong></td><td>Développement complet</td><td>30 000</td></tr>
            <tr className="total"><td colSpan="2">Total</td><td>175 000 FCFA</td></tr>
          </tbody>
        </table>
        <button onClick={() => setShowOffre2(!showOffre2)}>
          {showOffre2 ? "Masquer l'offre Standard" : "Voir l'offre Standard"}
        </button>
      </section>

      {showOffre2 && (
        <section>
          <h2>🔸 Offre 2 – Standard</h2>
          <table>
            <thead>
              <tr><th>Poste</th><th>Description</th><th>Coût (FCFA)</th></tr>
            </thead>
            <tbody>
              <tr><td>Tout l’essentiel</td><td>Offre 1 incluse</td><td>Inclus</td></tr>
              <tr><td>CMS simplifié</td><td>Dashboard de gestion</td><td>50 000</td></tr>
              <tr><td>SEO de base</td><td>Balises méta, sitemap</td><td>15 000</td></tr>
              <tr><td>Responsive design</td><td>Mobile/tablette</td><td>10 000</td></tr>
              <tr><td>Réseaux sociaux</td><td>Liens & aperçus</td><td>10 000</td></tr>
              <tr><td>Portfolio dynamique</td><td>Upload + backend</td><td>25 000</td></tr>
              <tr><td>Formulaire avancé</td><td>Captcha + DB</td><td>15 000</td></tr>
              <tr><td>Google Map</td><td>Carte intégrée</td><td>5 000</td></tr>
              <tr><td><strong>Main d’œuvre</strong></td><td>Suivi et ajustement</td><td>40 000</td></tr>
              <tr className="total"><td colSpan="2">Total</td><td>345 000 FCFA</td></tr>
            </tbody>
          </table>
          <button onClick={() => setShowOffre3(!showOffre3)}>
            {showOffre3 ? "Masquer l'offre Premium" : "Voir l'offre Premium"}
          </button>
        </section>
      )}

      {showOffre3 && (
        <section>
          <h2>🔶 Offre 3 – Premium</h2>
          <table>
            <thead>
              <tr><th>Poste</th><th>Description</th><th>Coût (FCFA)</th></tr>
            </thead>
            <tbody>
              <tr><td>Interface multilingue</td><td>FR + EN</td><td>30 000</td></tr>
              <tr><td>Tableau de bord</td><td>Statistiques</td><td>30 000</td></tr>
              <tr><td>Sécurité avancée</td><td>JWT, protection</td><td>20 000</td></tr>
              <tr><td>Blog / Actualités</td><td>Articles + admin</td><td>35 000</td></tr>
              <tr><td>Chatbot intégré</td><td>Bulle interactive</td><td>25 000</td></tr>
              <tr><td>Email pro</td><td>SMTP personnalisé</td><td>15 000</td></tr>
              <tr><td>Nom de domaine</td><td>www.nomdusite.com</td><td>12 000</td></tr>
              <tr><td>Hébergement pro</td><td>VPS ou Render</td><td>20 000</td></tr>
              <tr><td>SEO + performance</td><td>Optimisation images + audit</td><td>10 000</td></tr>
              <tr><td>Maintenance 3 mois</td><td>Support + updates</td><td>20 000</td></tr>
              <tr><td><strong>Main d’œuvre</strong></td><td>Suivi & développement</td><td>60 000</td></tr>
              <tr className="total"><td colSpan="2">Total</td><td>625 000 FCFA</td></tr>
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Devis;
