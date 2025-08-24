// src/components/Navbar.js
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
      <h1 className="logo">Issa <span>Kamara</span></h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#about" onClick={handleLinkClick}>C'est qui Issa ?</a>
        <a href="#projects" onClick={handleLinkClick}>Projets</a>
        <a href="#cv" onClick={handleLinkClick}>Mon Cv</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
