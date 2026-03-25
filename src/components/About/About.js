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
          Je m'appelle Issa KAMARA, développeur web frontend basé à Thiès, Sénégal.
          Mon parcours est celui d’un autodidacte passionné qui a construit ses compétences
          avec détermination, curiosité et discipline.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Depuis 2022, j’ai progressivement évolué en développant des projets concrets :
          applications web, plateformes e-commerce, outils digitaux et expériences 3D interactives.
          Chaque projet a été une étape pour renforcer mon expertise technique et ma vision produit.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Compétences & Expertise
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Je conçois des interfaces modernes, performantes et centrées utilisateur avec React,
          Next.js et TypeScript. J’intègre également des expériences interactives avec Three.js
          et développe des solutions complètes en utilisant Node.js, Supabase et PostgreSQL.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon approche combine design UI/UX, performance web et logique métier pour créer
          des applications utiles, accessibles et évolutives.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Expérience & Réalisations
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          En tant qu’entrepreneur digital, j’ai travaillé sur plusieurs projets réels :
          plateformes web, solutions e-commerce, outils de gestion et applications métiers.
          J’accompagne également des particuliers et PME dans leur transformation digitale,
          la création de sites et l’adoption des outils numériques.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Une Approche Unique
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon parcours ne se limite pas au développement. Avec plus de 10 ans d’expérience
          en art visuel et 6 ans dans l’entrepreneuriat (production de café), j’ai développé
          une sensibilité particulière au design, à l’expérience utilisateur et à la valeur produit.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Cette double compétence me permet de créer des solutions à la fois techniques,
          esthétiques et orientées business.
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Vision
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Mon objectif est de contribuer à la digitalisation des PME au Sénégal et en Afrique,
          en rendant les outils numériques modernes accessibles, utiles et adaptés aux réalités locales.
        </motion.p>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Je construis progressivement des projets à impact, avec l’ambition de créer des plateformes
          solides et durables.
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
          “Transformer les idées en solutions concrètes, et les défis en opportunités.”
        </motion.p>

        <motion.h3 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Conclusion
        </motion.h3>

        <motion.p variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Aujourd’hui, je continue d’apprendre, de créer et d’innover chaque jour.
          Mon parcours est en constante évolution, avec une seule direction :
          construire des solutions digitales utiles, modernes et impactantes.
        </motion.p>

      </div>
    </div>
  );
};

export default About;
