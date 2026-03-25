import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-container">

        <motion.h2 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon Parcours
        </motion.h2>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Je m'appelle Issa KAMARA, développeur web frontend et entrepreneur basé à Thiès, Sénégal.
          Mon parcours est celui d’un autodidacte qui a construit ses compétences à travers la pratique,
          la discipline et la réalisation de projets concrets.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Depuis 2022, j’ai développé plusieurs applications web, plateformes digitales et outils métiers,
          allant de l’e-commerce aux solutions sur mesure pour particuliers et PME. Chaque projet m’a permis
          de renforcer mon expertise technique et ma compréhension des besoins réels du terrain.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Chackor Organisation
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Je suis le fondateur de Chackor Organisation, une initiative basée à Thiès qui vise à créer
          un écosystème local combinant savoir-faire traditionnel, innovation digitale et développement humain.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          À travers cette organisation, je travaille à valoriser les talents locaux dans des domaines variés
          comme l’artisanat, l’agriculture, la technologie et le conseil, en créant un pont entre tradition et modernité.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Achakourou : Extension Digitale
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Dans cette dynamique, j’ai lancé Achakourou, une branche digitale structurée autour de plusieurs axes :
        </motion.p>

        <motion.ul variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <li><strong>Achakourou Café Touba :</strong> production et distribution de café artisanal local</li>
          <li><strong>Achakourou Digital Services :</strong> développement web, UI/UX et solutions numériques</li>
          <li><strong>Achakourou Bana Bana :</strong> plateforme de commerce agricole interrégional</li>
          <li><strong>Achakourou Consulting :</strong> accompagnement en stratégie, digitalisation et développement personnel</li>
        </motion.ul>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Compétences & Expertise
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Je développe des interfaces modernes et performantes avec React, Next.js et TypeScript,
          et j’intègre des expériences interactives avec Three.js. Je conçois également des solutions
          complètes avec Node.js, Supabase et PostgreSQL.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon approche est centrée sur l’utilisateur, la performance et la création de solutions utiles,
          adaptées aux réalités locales.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Une Approche Unique
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Avec plus de 10 ans d’expérience en art visuel et 6 ans dans l’entrepreneuriat (production de café),
          j’apporte une vision qui combine créativité, sens du détail et logique business.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Cette combinaison me permet de créer des produits digitaux à la fois esthétiques,
          fonctionnels et orientés impact.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Vision
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon objectif est de contribuer à la digitalisation des PME au Sénégal et en Afrique,
          en construisant des solutions accessibles, utiles et durables.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          À long terme, je souhaite développer un écosystème solide reliant technologie,
          économie locale et développement humain.
        </motion.p>

        <motion.p
          className="about-quote"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          “Créer des solutions locales, avec une vision globale.”
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Conclusion
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Aujourd’hui, je continue de construire, d’apprendre et d’innover chaque jour,
          avec une ambition claire : créer des solutions digitales utiles et contribuer
          au développement de mon environnement.
        </motion.p>

      </div>
    </div>
  );
};

export default About;
