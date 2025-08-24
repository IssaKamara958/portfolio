// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Devis from './components/Devis';
import Cv from "./components/Cv";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Issa Kamara - Développeur Web & Manager</title>
        <meta
          name="description"
          content="Portfolio professionnel d'Issa Kamara, développeur web passionné, manager et consultant IT."
        />
        <meta
          name="keywords"
          content="Issa Kamara, développeur web, portfolio, React, IT, manager"
        />
        <meta name="author" content="Issa Kamara" />
        <meta property="og:title" content="Portfolio d'Issa Kamara" />
        <meta
          property="og:description"
          content="Découvrez mes projets, compétences et expériences en développement web."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <About />
                  <Cv />
                  <Projects />
                  <Skills />
                  <Contact />
                  <Devis />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
