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
        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Mon Parcours
        </motion.h2>

        {[
          `Je m'appelle Issa KAMARA. Je suis un développeur web autodidacte...`,
          `Pendant que certains étudiaient avec des portables flambant neufs...`,
          `En ce moment, je traverse une phase particulière...`,
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Mes Compétences et Capacités
        </motion.h3>

        {[
          `J’ai développé des compétences solides en HTML, CSS...`,
          `Je sais également concevoir des interfaces centrées sur l’utilisateur...`,
        ].map((text, i) => (
          <motion.p
            key={`skills-${i}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Mes Aspirations
        </motion.h3>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Je rêve de bâtir une plateforme solide — <strong>Kou Ayé ?</strong>...
        </motion.p>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Je veux inspirer les jeunes à croire en leurs talents...
        </motion.p>

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Mon Expérience
        </motion.h3>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Avec plus de 10 ans d’expérience dans l’art plastique...
        </motion.p>

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Ma Vision
        </motion.h3>

        {[
          `Pour moi, la vie est un long projet artisanal...`,
          `Ma foi musulmane m’inspire l’humilité...`,
        ].map((text, i) => (
          <motion.p
            key={`vision-${i}`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        <motion.p
          className="about-quote"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          “Si on ne met rien sur la table, on n’a rien sur cette même table.” — une leçon de vie que je transforme en code chaque jour.
        </motion.p>

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Conclusion
        </motion.h3>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Je suis Issa KAMARA, un jeune sénégalais qui transforme la difficulté en opportunité...
        </motion.p>
      </div>
    </div>
  );
};

export default About;
