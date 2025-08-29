import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-section">
          <h1>Issa <span>KAMARA</span></h1>
          <h2>Entrepreneur Indépendant | Informaticien Général</h2>
          <h3>Développeur Web Frontend | Spécialiste UI/UX</h3>
          <p>
            Passionné par l'innovation digitale, je crée des solutions web modernes et performantes. 
            Mon expertise couvre le développement frontend, l'intégration UI/UX et l'optimisation des 
            performances des sites web. Mon objectif : offrir des expériences utilisateur uniques et impactantes.
          </p>
          <div className="buttons">
            <a href="https://github.com/IssaKamara958" target="_blank" rel="noopener noreferrer" className="work-btn">Voir Mes Travaux</a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=issakamara958@gmail.com&su=Contact%20depuis%20votre%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Email
            </a>
            <a href="https://wa.me/221776828441" target="_blank" rel="noopener noreferrer" className="contact-btn" >WhatsApp</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
