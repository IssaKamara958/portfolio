import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cv.css';
import issa from '../../assets/images/myopi.jpg';

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

    html2canvas(element, { scale: 3, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = pdf.getImageProperties(imgData);
      const imgRatio = imgProps.width / imgProps.height;
      let imgHeight = pdfWidth / imgRatio;

      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;
        while (heightLeft > 0) {
          pdf.addImage(imgData, "PNG", 0, -position, pdfWidth, imgHeight);
          heightLeft -= pdfHeight;
          position += pdfHeight;
          if (heightLeft > 0) pdf.addPage();
        }
      }

      pdf.save("CV_Issa_Kamara.pdf");
      button.style.display = "inline-block";
    });
  };

  const staticProjects = [
    { id: 1, title: "Senegal Energy Xool", link: "https://senegal-energy-xool.lovable.app" },
    { id: 2, title: "Empreinte Parfumée", link: "https://empreinte-parfumee.lovable.app" },
    { id: 3, title: "GLX Thiès Senegal", link: "https://glx-thies-senegal.lovable.app" },
    { id: 4, title: "Guide Enseignement", link: "https://guide-enseignement.lovable.app" },
    { id: 5, title: "Precis Tag", link: "https://precis-tag.lovable.app" },
    { id: 6, title: "Touhfatou Délices", link: "https://touhfatou-delices-152604-c0083.web.app/" },
    { id: 7, title: "Le Magnifique", link: "#" },
  ];

  return (
    <div id="cv" className="cv-wrapper" data-aos="fade-up">
      <div className="cv" ref={cvRef}>
        <div className="left">
          <img src={issa} alt="Issa KAMARA" />
          <h2>Issa KAMARA</h2>
          <p className="tagline">"Créer des expériences digitales modernes, utiles et accessibles"</p>
          <p className="role">
            Développeur Frontend & UI/UX Designer <br />
            Créateur d’expériences web modernes (React / 3D) <br />
            Entrepreneur digital & Formateur
          </p>

          <div className="section-title">Contact</div>
          <p>📍 Thiès, Sénégal</p>
          <p>📧 issakamara958@gmail.com</p>
          <p>📞 +221 77 682 84 41</p>

          <div className="section-title">Projets & Portfolio</div>
          <a href="https://issa-kamara-portfolio-3d.web.app/" target="_blank" rel="noreferrer">🌐 Portfolio 3D</a>
          <a href="https://chackor-shop.netlify.app/" target="_blank" rel="noreferrer">🛒 Chackor Shop (E-commerce)</a>
          <a href="https://issa-portfeuil.netlify.app/" target="_blank" rel="noreferrer">📄 Portfolio CV</a>
          {staticProjects.map(project => (
            <a key={project.id} href={project.link} target="_blank" rel="noreferrer">🚀 {project.title}</a>
          ))}

          <div className="section-title">GitHub</div>
          <a href="https://github.com/IssaKamara958" target="_blank" rel="noreferrer">github.com/IssaKamara958</a>

          <div className="section-title">Services maîtrisés</div>
          <ul>
            <li>Développement web moderne (React / Next.js)</li>
            <li>UI/UX & Design d’interfaces</li>
            <li>Automatisation & outils digitaux</li>
            <li>ERP & solutions métiers</li>
            <li>Cloud, hébergement & déploiement</li>
            <li>Formation informatique professionnelle</li>
          </ul>
        </div>

        <div className="right">
          <h1>Profil professionnel</h1>
          <p>Développeur frontend passionné basé à Thiès, je conçois des applications web modernes, performantes et orientées expérience utilisateur. J’allie créativité artistique, expertise technique et vision entrepreneuriale pour accompagner les particuliers, PME et projets innovants dans leur transformation digitale.</p>
          <p>Avec plus de 10 ans d’expérience en art visuel et 6 ans en entrepreneuriat dans le café, j’apporte une approche unique mêlant design, émotion et efficacité.</p>

          <h3>Projets clés</h3>
          <ul>
            <li><strong>Senegal Energy Xool</strong> – Plateforme web d’analyse énergétique</li>
            <li><strong>Empreinte Parfumée</strong> – Application digitale & branding parfum</li>
            <li><strong>Chackor Shop</strong> – E-commerce moderne (Next.js)</li>
            <li><strong>Portfolio 3D</strong> – Expérience immersive avec Three.js</li>
            <li><strong>Outils web & ERP</strong> – QR, gestion, apps métiers</li>
          </ul>

          <h3>Formation & Accompagnement</h3>
          <ul>
            <li>Formation informatique professionnelle (débutant à avancé)</li>
            <li>Organisation du poste de travail & productivité</li>
            <li>Excel, gestion, automatisation</li>
            <li>Utilisation de l’IA comme assistant de travail</li>
            <li>Mise en place de solutions ERP (Dolibarr)</li>
          </ul>

          <h3>Expériences</h3>
          <p><strong>Développeur freelance & entrepreneur digital</strong> — <em>2020 – Présent</em></p>
          <ul>
            <li>Création d’applications web modernes (React, Next.js)</li>
            <li>Développement de plateformes e-commerce & SaaS</li>
            <li>Accompagnement digital des PME</li>
            <li>Formation & coaching informatique</li>
          </ul>

          <p><strong>Fondateur – Chackor Organisation</strong></p>
          <ul>
            <li>Solutions digitales, branding & UX/UI</li>
            <li>Gestion de projets clients & stratégie digitale</li>
          </ul>

          <h3>Compétences clés</h3>
          <ul>
            <li><strong>Frontend :</strong> React, Next.js, TypeScript, Three.js</li>
            <li><strong>Backend :</strong> Node.js, Express, Supabase, PostgreSQL</li>
            <li><strong>UI/UX :</strong> Figma, Design System</li>
            <li><strong>Outils :</strong> Git, GitHub, Netlify, Firebase</li>
            <li><strong>Autres :</strong> SEO, Performance, Responsive design</li>
          </ul>

          <h3>Atouts différenciants</h3>
          <ul>
            <li>🎨 10+ ans d’expérience en art visuel</li>
            <li>☕ 6 ans d’entrepreneuriat</li>
            <li>🚀 Approche orientée expérience utilisateur</li>
            <li>🌍 Vision : digitaliser les PME au Sénégal</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button id="downloadBtn" onClick={downloadPDF}>📄 Télécharger le CV (PDF)</button>
      </div>
    </div>
  );
};

export default Cv;
