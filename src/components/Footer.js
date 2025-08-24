import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'; // Utilisation des icônes des réseaux sociaux

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Issa Kamara - Tous droits réservés</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100074472115745&locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          {/* <a href="https://www.linkedin.com/in/IssaKamara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a> */}
          <a href="https://x.com/ISSAKAM74750821" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com/IssaKamara958" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub />
          </a>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy" aria-label="Politique de confidentialité">Politique de confidentialité</a>
          <a href="/terms-of-service" aria-label="Conditions d'utilisation">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
