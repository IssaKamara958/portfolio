import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🧠 IDENTITÉ */}
        <div className="footer-brand">
          <h2>Issa KAMARA</h2>
          <p>Informaticien expérimenté</p>
          <p>Support IT • Systèmes • Réseaux • Digitalisation</p>
          <p className="footer-quote">
            "Concevoir des solutions techniques utiles et accessibles."
          </p>
        </div>

        {/* 🔗 LIENS RAPIDES */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <a href="/">Accueil</a>
          <a href="https://issa-kamara-portfolio-3d.web.app/" target="_blank" rel="noopener noreferrer">Portfolio projets ↗</a>
          <a href="/#competences">Compétences</a>
          <a href="/#cv">CV</a>
          <a href="/#contact">Contact</a>
        </div>

        {/* 💼 SERVICES */}
        <div className="footer-services">
          <h3>Services</h3>
          <p>Support informatique</p>
          <p>Systèmes & réseaux</p>
          <p>Digitalisation</p>
          <p>Applications métiers</p>
        </div>

        {/* 📞 CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Thiès, Sénégal</p>
          <p>📞 +221 77 682 8441</p>
          <p>✉️ issakamara958@gmail.com</p>

          <a
            href="https://wa.me/221776828441"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Discuter sur WhatsApp
          </a>
        </div>
      </div>

      {/* 🌐 RÉSEAUX */}
      <div className="footer-social">
        <a href="https://www.facebook.com/profile.php?id=100074472115745" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/ISSAKAM74750821" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/IssaKamara958" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      {/* ⚖️ COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Issa Kamara — Tous droits réservés</p>
        <p className="footer-mini">
          Support IT • Systèmes • Digitalisation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
