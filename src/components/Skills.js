import React from "react";
import "./Skills.css";

// Import des icônes pour les compétences
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGithub, FaGit } from 'react-icons/fa';
import { SiMysql, SiLaravel, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills-content">
        <div className="skills-category">
          <h4>Langages</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaHtml5 />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <FaCss3Alt />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <FaJs />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaPhp />
              <p>PHP</p>
            </div>
            <div className="skill-item">
              <SiMysql />
              <p>MySQL</p>
            </div>
            <div className="skill-item">
              < FaDatabase/>
              <p>DataBase</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h4>Frameworks & Librairies</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skill-item">
              <SiTailwindcss />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill-item">
              <SiBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className="skill-item">
              <SiLaravel />
              <p>Laravel</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h4>Outils & Environnements</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaGithub />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <FaGit />
              <p>Git</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h4>Connaissances Web</h4>
          <div className="skills-list">
            <div className="skill-item">
              <p>Responsive Design</p>
            </div>
            <div className="skill-item">
              <p>SEO de base</p>
            </div>
            <div className="skill-item">
              <p>Accessibilité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
