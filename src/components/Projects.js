import React from "react";
import "./Projects.css";
import kouayeImage from "../img/kou-aye.jpg";
import ecommerceImage from "../img/eCommerce.jpg";
import chackorImage from "../img/chackorOrg.jpg";
import portfolioImage from "../img/portfeuil.jpg";
import murderImage from "../img/murderPet.jpg";
import vitrineImage from "../img/siteVitrine.jpg";
import santeImage from "../img/sante.jpg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <div className="project-list">
      {/* <a href="#" className="project-link"> */}
        <div className="project" style={{ backgroundImage: `url(${kouayeImage})` }}>
            <h3>Kou Ayé ?</h3>
            <p>Application web et mobile fournissant les informations sur les pharmacies de garde, incluant l'heure de garde, la localisation, et l'itinéraire.</p>
        </div>
      {/* </a> */}

      
        <div className="project" style={{ backgroundImage:`url(${ecommerceImage})` }}>
        <a href="https://chackororg-shop.netlify.app/" className="project-link">  
            <h3>Site E-commerce</h3>
            <p>Développement d’un site e-commerce complet pour Chackor Organisation, piloté par Issa Kamara, afin de commercialiser le produit phare Achakourou Café Touba ainsi qu’une variété de produits importés d’Espagne à destination du marché sénégalais.</p>
          </a> 
        </div>
      

      
        <div className="project" style={{ backgroundImage: `url(${chackorImage})` }}>
          <a href="https://github.com/IssaKamara958/chackor-org" className="project-link">
            <h3>Chackor Organisation</h3>
            <p>Création d'une page web pour la gestion de l'organisation Chackor, avec des fonctionnalités dynamiques comme un système de newsletter, des formulaires de contact, des notifications et alertes, ainsi qu'un carrousel de partenaires.</p> 
          </a>
        </div>

      
      <div className="project" style={{ backgroundImage: `url(${portfolioImage})` }}>
          <a href="https://issa-kamara.netlify.app/" className="project-link">
            <h3>Site Portfolio</h3>
            <p>Développement d'un portfolio personnel pour Issa KAMARA, incluant des sections de présentation des compétences, projets, et contact, avec une intégration d'animations et de responsive design.</p>
          </a>
      </div>
       
      <div className="project" style={{ backgroundImage: `url(${murderImage})` }}>
        <a href="https://github.com/IssaKamara958/murder_petition" className="project-link">
            <h3>Murder Pétition</h3>
            <p>Application web interactive permettant de collecter des signatures contre l'impunité des meurtres. Interface dynamique, sécurisée, avec souscription et espace d'expression.</p>
        </a>
      </div>
      

      {/* <a href="#" className="project-link"> */}
        <div className="project" style={{ backgroundImage: `url(${vitrineImage})` }}>
            <h3>Site Vitrine</h3>
            <p>Conception de Site Vitrine déstiné à vulgariser les <strong>Produits</strong> et <strong>Services</strong> d'une Entreprise.</p>
        </div>
      {/* </a> */}

      {/* <a href="#" className="project-link"> */}
        <div className="project" style={{ backgroundImage: `url(${santeImage})` }}>
            <h3>Gestion des assistances Santé</h3>
            <p>Développement d'applications destiner à facilité l'acces à la Santé de tous.</p>
        </div>
      {/* </a> */}
      </div>
    </section>
  );
};

export default Projects;
