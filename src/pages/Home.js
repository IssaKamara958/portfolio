import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Cv from '../components/Cv/Cv';
import Devis from '../components/Devis/Devis';
import Contact from '../components/Contact/Contact';
import Guestbook from '../components/Guestbook/Guestbook';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Issa Kamara",
    "url": "https://issa-portfeuil.netlify.app/",
    "sameAs": [
      "https://www.linkedin.com/in/issakamara/",
      "https://github.com/IssaKamara958"
    ],
    "jobTitle": "Développeur Web Frontend & Spécialiste UI/UX",
    "worksFor": {
      "@type": "Organization",
      "name": "Issa Kamara (Freelance)"
    }  
  };

  return (
    <>
      <Helmet>
        <title>Issa Kamara - Développeur Web Frontend & UI/UX</title>
        <meta name="description" content="Portfolio d'Issa Kamara, développeur web frontend spécialisé en React.js et UI/UX. Découvrez mes projets, compétences et expériences." />
        <meta name="keywords" content="développeur web, frontend, React.js, UI/UX, portfolio, Issa Kamara, développeur freelance" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Header />
      <About />
      <Skills />
      <Cv />
      <Devis />
      <Contact />
      <Guestbook />
    </>
  );
};

export default Home;
