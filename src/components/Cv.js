import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cv.css';
import issa from '../img/issa.jpg';

const Cv = () => {
  const cvRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const downloadPDF = async () => {
    const element = cvRef.current;
    const button = document.getElementById("downloadBtn");
    button.style.display = "none";
    await new Promise(resolve => setTimeout(resolve, 300));

    html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("CV_Issa_Kamara.pdf");
      button.style.display = "inline-block";
    });
  };

  return (
    <div id="cv" className="cv-wrapper" data-aos="fade-up">
      <div className="cv" ref={cvRef}>
        <div className="left">
          <img src={issa} alt="Issa KAMARA" />
          <h2>Issa KAMARA</h2>
          <p className="role">Développeur Web | MANAGER</p>

          <div className="section-title">Contact</div>
          <p>📧 issakamara958@gmail.com</p>
          <p>📞 +221 77 682 84 41</p>

          <div className="section-title">Portfolios & Sites</div>
          <a href="https://issa-portfeuil.netlify.app" target="_blank" rel="noreferrer">issa-portfeuil.netlify.app</a>
          <a href="https://issa-kamara.netlify.app" target="_blank" rel="noreferrer">issa-kamara.netlify.app</a>
          <a href="https://chackororg-shop.netlify.app" target="_blank" rel="noreferrer">chackororg-shop.netlify.app</a>

          <div className="section-title">Réseaux sociaux</div>
          <a href="https://github.com/IssaKamara958" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.facebook.com/profile.php?id=100074472115745" target="_blank" rel="noreferrer">Facebook</a>

          <div className="section-title">Responsabilités</div>
          <p><strong>Responsable légal</strong> – Compte Infomaniak</p>

          <div className="section-title">Services utilisés</div>
          <ul>
            <li>kSuite & kDrive</li>
            <li>Service Mail</li>
            <li>Hébergement & Domaine</li>
            <li>Streaming Radio / Vidéo</li>
            <li>Newsletter</li>
            <li>AI Tools, NAS Synology</li>
            <li>WordPress & Site Creator</li>
            <li>Swiss Backup, VPS, Cloud</li>
          </ul>
        </div>

        <div className="right">
          <h1>Profil</h1>
          <p>
            Développeur web passionné par les technologies modernes, je conçois des solutions dynamiques et sécurisées (sites web, plateformes, outils internes). J’interviens aussi en maintenance informatique, marketing digital, consultance IT et pilotage de projets numériques.
          </p>

          <h3>Expériences</h3>
          <p><strong>Responsable légal – Infomaniak</strong><br /><em>2023 – Présent</em></p>
          <ul>
            <li>Gestion complète d’un compte Infomaniak</li>
            <li>Services cloud : newsletter, streaming, etc.</li>
            <li>Interface légale & technique</li>
          </ul>

          <p><strong>Fondateur – Chackor Organisation</strong><br /><em>2023 – Présent</em></p>
          <ul>
            <li>Conception de plateformes digitales</li>
            <li>Newsletters, formulaires dynamiques, etc.</li>
            <li>Stratégie digitale & expérience utilisateur</li>
          </ul>

          <p><strong>Projet – Sénécom-Digital</strong><br /><em>2022 – Présent</em></p>
          <ul>
            <li>Dév. front/back, consultance digitale</li>
            <li>Stratégie marketing & suivi client</li>
          </ul>

          <p><strong>Freelance</strong><br /><em>2020 - 2021</em></p>
          <ul>
            <li>Portails et portfolios professionnels</li>
          </ul>

          <h3>Formation</h3>
          <p><strong>Licence Pro en Dev Web</strong><br />EMAAS – 2019</p>

          <h3>Compétences</h3>
          <ul>
            <li><strong>Langages :</strong> HTML, CSS, JS, PHP, SQL</li>
            <li><strong>Frameworks :</strong> React, Bootstrap</li>
            <li><strong>Outils :</strong> Git, Netlify, Infomaniak</li>
            <li><strong>Maintenance :</strong> Réseau, Hardware</li>
            <li><strong>Marketing :</strong> SEO, newsletter</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button id="downloadBtn" onClick={downloadPDF}>
          📄 Télécharger en PDF
        </button>
      </div>
    </div>
  );
};

export default Cv;
