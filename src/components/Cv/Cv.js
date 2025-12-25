import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cv.css';
import issa from '../../assets/images/issa.jpg';

const Cv = () => {
  const cvRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const downloadPDF = async () => {
    const element = cvRef.current;
    const button = document.getElementById("downloadBtn");
    button.style.display = "none";
    await new Promise(resolve => setTimeout(resolve, 300));

    html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("CV_Issa_Kamara.pdf");
      button.style.display = "inline-block";
    });
  };

  return (
    <div id="cv" className="cv-wrapper" data-aos="fade-up">
      <div className="cv" ref={cvRef}>

        {/* ==== COLONNE GAUCHE ==== */}
        <div className="left">
          <img src={issa} alt="Issa KAMARA" />
          <h2>Issa KAMARA</h2>
          <p className="role">
            Informaticien Hardware & Software <br />
            Développeur Web UX/UI <br />
            Formateur Informatique Pro
          </p>

          <div className="section-title">Contact</div>
          <p>📍 Parcelles Assainies U1, Thiès</p>
          <p>📧 issakamara958@gmail.com</p>
          <p>📞 +221 77 682 84 41</p>

          <div className="section-title">Sites & Projets</div>
          <a href="https://issa-kamara-portfolio-3d.web.app/" target="_blank" rel="noreferrer">
            Portfolio 3D
          </a>
          <a href="https://chackor-shop.netlify.app/" target="_blank" rel="noreferrer">
            Chackor Shop (E-commerce)
          </a>
          <a href="https://issa-portfeuil.netlify.app/" target="_blank" rel="noreferrer">
            Portfolio CV
          </a>

          <div className="section-title">GitHub</div>
          <a href="https://github.com/IssaKamara958" target="_blank" rel="noreferrer">
            github.com/IssaKamara958
          </a>

          <div className="section-title">Services maîtrisés</div>
          <ul>
            <li>Windows & Maintenance PC</li>
            <li>Word / Excel / Organisation</li>
            <li>IA (ChatGPT, IA bureautique)</li>
            <li>ERP Dolibarr</li>
            <li>Git, Netlify, Infomaniak</li>
            <li>Cloud, Hébergement, Email Pro</li>
          </ul>
        </div>

        {/* ==== COLONNE DROITE ==== */}
        <div className="right">
          <h1>Profil professionnel</h1>
          <p>
            Entrepreneur indépendant et informaticien polyvalent, j’accompagne
            les professionnels, commerçants et PME dans la maîtrise de leur
            ordinateur, la bureautique, l’automatisation des tâches et
            l’utilisation de solutions numériques modernes (ERP, IA, web).
          </p>

          <h3>Formation & Accompagnement Pro</h3>
          <ul>
            <li>Cours particuliers à domicile (Thiès)</li>
            <li>Organisation du poste de travail Windows</li>
            <li>Excel, gestion de stock, facturation</li>
            <li>Utilisation de l’IA comme assistant professionnel</li>
            <li>Implémentation et formation Dolibarr</li>
          </ul>

          <h3>Activité GitHub</h3>
          <div className="github-activity">
            <p>
              Développeur actif avec plusieurs projets publics et privés en
              <strong> TypeScript, JavaScript, PHP et Python</strong>.
            </p>
            <ul>
              <li>Portfolio 3D immersif (React / TS)</li>
              <li>Plateforme e-commerce Chackor Shop</li>
              <li>Applications utilitaires (QR WiFi, ERP, outils web)</li>
            </ul>
          </div>

          <h3>Expériences</h3>
          <p><strong>Entrepreneur indépendant</strong> — <em>2020 – Présent</em></p>
          <ul>
            <li>Formation informatique professionnelle</li>
            <li>Développement web & maintenance</li>
            <li>Conseil digital & organisation métier</li>
          </ul>

          <p><strong>Fondateur – Chackor Organisation</strong></p>
          <ul>
            <li>Solutions web, e-commerce, branding</li>
            <li>UX/UI & accompagnement client</li>
          </ul>

          <h3>Compétences clés</h3>
          <ul>
            <li><strong>Langages :</strong> HTML, CSS, JS, PHP, SQL</li>
            <li><strong>Frameworks :</strong> React, Bootstrap</li>
            <li><strong>Outils :</strong> Git, Netlify, Infomaniak</li>
            <li><strong>Systèmes :</strong> Windows, Hardware, Réseau</li>
            <li><strong>Métiers :</strong> Formation, Productivité, ERP</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button id="downloadBtn" onClick={downloadPDF}>
          📄 Télécharger le CV (PDF)
        </button>
      </div>
    </div>
  );
};

export default Cv;
