import React from "react";
import "./Header.css";
import fall from "../../assets/images/issa.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">

        {/* TEXTE */}
        <div className="text-section">
          <h1>Issa <span>KAMARA</span></h1>

          <h2>Entrepreneur Digital | Développeur Frontend</h2>

          <h3>UI/UX Designer | Créateur d’expériences web modernes</h3>

          <p>
            Développeur frontend et entrepreneur basé à Thiès, je conçois des
            applications web modernes, performantes et centrées utilisateur.
            J’allie design, technologie et vision business pour créer des
            expériences digitales impactantes.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/IssaKamara958"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              Voir Mes Travaux
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=issakamara958@gmail.com&su=Contact%20depuis%20votre%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Email
            </a>

            <a
              href="https://wa.me/221776828441"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="image-section">
          <img src={fall} alt="Issa Kamara" />
        </div>

      </div>
    </header>
  );
};

export default Header;
