import React, { useState } from 'react';
import './Devis.css';

const Devis = () => {
  const [showOffre2, setShowOffre2] = useState(false);

  return (
    <div className="app-background">
      <header className="devis-header">
        <h1>Offre de Services Numériques</h1>
        <p>Plateforme web & solutions digitales – Tarification professionnelle</p>
      </header>

      <section>
        <h2>🔧 Technologies utilisées</h2>
        <ul>
          <li><strong>Frontend :</strong> React.js, HTML5, CSS3, Tailwind</li>
          <li><strong>Backend :</strong> Node.js + Express.js</li>
          <li><strong>Base de données :</strong> MySQL</li>
          <li><strong>Déploiement :</strong> Netlify, Render, VPS</li>
          <li><strong>Sécurité :</strong> JWT, Middleware, Validation</li>
          <li><strong>Outils :</strong> Git, GitHub, VS Code</li>
        </ul>
      </section>

      {/* OFFRE 1 */}
      <section>
        <h2>🔹 Offre 1 – Essentielle</h2>
        <table>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Description</th>
              <th>Coût (FCFA)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Analyse & conception</td><td>Architecture + maquette</td><td>25 000</td></tr>
            <tr><td>UI/UX Design</td><td>Charte graphique</td><td>35 000</td></tr>
            <tr><td>Frontend React</td><td>Interface utilisateur</td><td>70 000</td></tr>
            <tr><td>Backend Node.js</td><td>API sécurisée</td><td>60 000</td></tr>
            <tr><td>Base de données</td><td>MySQL structuré</td><td>25 000</td></tr>
            <tr><td>Formulaire</td><td>Email + stockage</td><td>15 000</td></tr>
            <tr><td>Hébergement</td><td>Cloud basique (1 an)</td><td>15 000</td></tr>
            <tr><td>Nom de domaine</td><td>.com / .sn</td><td>12 000</td></tr>
            <tr><td>Sécurité</td><td>JWT + validation</td><td>15 000</td></tr>
            <tr><td><strong>Main d’œuvre</strong></td><td>Développement complet</td><td>50 000</td></tr>
            <tr className="total"><td colSpan="2">Total</td><td>322 000 FCFA</td></tr>
          </tbody>
        </table>

        <button onClick={() => setShowOffre2(!showOffre2)}>
          {showOffre2 ? "Masquer l'offre Standard" : "Voir l'offre Standard"}
        </button>
      </section>

      {/* OFFRE 2 */}
      {showOffre2 && (
        <section>
          <h2>🔸 Offre 2 – Standard</h2>
          <table>
            <thead>
              <tr>
                <th>Poste</th>
                <th>Description</th>
                <th>Coût (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Base Essentielle</td><td>Inclut Offre 1</td><td>Inclus</td></tr>
              <tr><td>Dashboard admin</td><td>Gestion contenu</td><td>80 000</td></tr>
              <tr><td>SEO avancé</td><td>Optimisation Google</td><td>25 000</td></tr>
              <tr><td>Responsive design</td><td>Mobile/tablette</td><td>15 000</td></tr>
              <tr><td>Carte interactive</td><td>Google Maps</td><td>20 000</td></tr>
              <tr><td>Système utilisateurs</td><td>Comptes + rôles</td><td>40 000</td></tr>
              <tr><td>Notifications</td><td>Email / alertes</td><td>20 000</td></tr>
              <tr><td>Analyse de données</td><td>Graphiques dynamiques</td><td>40 000</td></tr>
              <tr><td>Recommandations</td><td>Optimisation simple</td><td>35 000</td></tr>
              <tr><td>Serveur VPS</td><td>Hébergement pro</td><td>50 000</td></tr>
              <tr><td>Monitoring</td><td>Suivi uptime</td><td>20 000</td></tr>
              <tr><td>Sécurité avancée</td><td>Protection API</td><td>20 000</td></tr>
              <tr><td>Maintenance</td><td>Support 3 mois</td><td>40 000</td></tr>
              <tr><td><strong>Main d’œuvre</strong></td><td>Suivi & optimisation</td><td>70 000</td></tr>
              <tr className="total"><td colSpan="2">Total</td><td>777 000 FCFA</td></tr>
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Devis;
