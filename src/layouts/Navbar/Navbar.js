// src/layouts/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <a className="logo" href="#accueil" aria-label="Retour à l'accueil">IK</a>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#a-propos" onClick={handleLinkClick}>À propos</a>
        <a href="#it-systemes" onClick={handleLinkClick}>IT & Systèmes</a>
        <a href="#competences" onClick={handleLinkClick}>Compétences</a>
        <a href="#projets" onClick={handleLinkClick}>Projets</a>
        <a href="#experience" onClick={handleLinkClick}>Expérience</a>
        <a href="#cv" onClick={handleLinkClick}>CV</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
        <a href="https://github.com/IssaKamara958" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>GitHub ↗</a>
      </div>

      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
