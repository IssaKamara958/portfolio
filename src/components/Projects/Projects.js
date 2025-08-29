import React from "react";
import "./Projects.css";
import kouAyeScreenshot from "../../assets/images/kou-aye.jpg";
import ecommerceScreenshot from "../../assets/images/eCommerce.jpg";
import chackorSecureScreenshot from "../../assets/images/chackorSecure.jpg";
import portfolioScreenshot from "../../assets/images/portFolio.jpg";
import santeScreenshot from "../../assets/images/sante.jpg";

const projectsData = [
  {
    title: "Kou Ayé ?",
    description: "Application web et mobile fournissant les informations sur les pharmacies de garde, incluant l\'heure de garde, la localisation, et l\'itinéraire.",
    url: "https://kou-aye.netlify.app/",
    image: kouAyeScreenshot,
  },
  {
    title: "Site E-commerce",
    description: "Développement d’un site e-commerce complet pour Chackor Organisation, piloté par Issa Kamara, afin de commercialiser le produit phare Achakourou Café Touba ainsi qu’une variété de produits importés d’Espagne à destination du marché sénégalais.",
    url: "https://chackor-shop.netlify.app/",
    image: ecommerceScreenshot,
  },
  {
    title: "Chackor Secure",
    description: "Plateforme de messagerie professionnelle sécurisée avec chiffrement et authentification robuste.",
    url: "https://chackor-secure.lovable.app/",
    image: chackorSecureScreenshot,
  },
  {
    title: "Site Portfolio",
    description: "Portfolio personnel pour Issa Kamara, incluant des sections de présentation des compétences, projets, et contact, avec animations et responsive design.",
    url: "https://issa-kamara.netlify.app/",
    image: portfolioScreenshot,
  },
  {
    title: "Gestion des assistances Santé",
    description: "Applications destinées à faciliter l\'accès à la santé pour tous, avec gestion des services médicaux.",
    url: "https://kou-aye.netlify.app/",
    image: santeScreenshot,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            className="project" // The <a> tag is now the .project
            style={{ backgroundImage: `url(${project.image})` }}
            aria-label={`Visiter ${project.title}`}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
