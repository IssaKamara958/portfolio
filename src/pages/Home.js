import React from 'react';
import { Helmet } from 'react-helmet';
import jsPDF from 'jspdf';
import './Home.css';

const portfolio3dUrl = 'https://issa-kamara-portfolio-3d.web.app/';

const projects = [
  { icon: '📦', title: 'MetalStock Manager', category: 'ERP / Desktop / Full-stack', description: 'Application de gestion des stocks, clients, fournisseurs, devis, factures, livraisons et inventaires.', tags: ['React', 'TypeScript', 'Electron', 'Prisma', 'SQLite'], link: portfolio3dUrl },
  { icon: '📡', title: 'Security Monitoring Dashboard', category: 'IT & Systèmes / Démonstration', description: 'Projet personnel de démonstration, simulation de supervision de caméras IP, sites, équipements, alertes et interventions.', tags: ['React', 'TypeScript', 'Tailwind', 'Monitoring'], link: portfolio3dUrl },
  { icon: '📶', title: 'WiFiQRCode', category: 'Réseaux / Wi-Fi / Outil', description: 'Outil qui simplifie le partage des paramètres de connexion Wi-Fi grâce à un QR code.', tags: ['React', 'Wi-Fi', 'Utility'], link: portfolio3dUrl },
  { icon: '⚡', title: 'Senegal Energy Xool', category: 'Dashboard / Digitalisation', description: 'Interface interactive destinée à présenter et exploiter des données énergétiques de façon accessible.', tags: ['Dashboard', 'Data', 'UX'], link: portfolio3dUrl },
  { icon: '🛒', title: 'Chackor Shop', category: 'E-commerce / Full-stack', description: 'Plateforme e-commerce pour digitaliser la présentation, la gestion et la commercialisation de produits.', tags: ['Web App', 'Firebase', 'Database'], link: portfolio3dUrl },
];

const skillGroups = [
  ['IT & Support', 'Support informatique', 'Hardware', 'Windows 10 / 11', 'Maintenance', 'Dépannage', 'Assistance utilisateurs'],
  ['Réseaux & Systèmes', 'TCP/IP', 'IPv4', 'LAN', 'Wi-Fi', 'RJ45', 'DHCP / DNS', 'Switches & routeurs'],
  ['Développement', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'REST API'],
  ['Données & Outils', 'PostgreSQL', 'Supabase', 'Firebase', 'SQL', 'Git', 'GitHub', 'VS Code', 'Netlify'],
];

const downloadCV = () => {
  const pdf = new jsPDF();
  pdf.setTextColor(7, 27, 36);
  pdf.setFontSize(22);
  pdf.text('ISSA KAMARA', 20, 24);
  pdf.setFontSize(11);
  pdf.text('INFORMATICIEN EXPERIMENTE', 20, 33);
  pdf.text('Support IT | Systemes | Reseaux | Digitalisation', 20, 40);
  pdf.setDrawColor(8, 123, 120);
  pdf.line(20, 47, 190, 47);
  pdf.setFontSize(12);
  pdf.text('PROFIL', 20, 60);
  pdf.setFontSize(10);
  const profile = pdf.splitTextToSize('Informaticien polyvalent avec plus de 13 ans d experience dans l environnement informatique, le support technique, le materiel, les systemes Windows, la maintenance et l assistance utilisateurs. Experience complementaire en developpement web, UX/UI et digitalisation de solutions metiers.', 170);
  pdf.text(profile, 20, 68);
  pdf.setFontSize(12);
  pdf.text('COMPETENCES', 20, 100);
  pdf.setFontSize(10);
  pdf.text('Support IT, Windows, Hardware, maintenance, depannage, TCP/IP, LAN, Wi-Fi, DHCP/DNS', 20, 108);
  pdf.text('React, TypeScript, JavaScript, Node.js, PostgreSQL, Supabase, UX/UI, Git, GitHub', 20, 116);
  pdf.setFontSize(12);
  pdf.text('EXPERIENCE & PROJETS', 20, 138);
  pdf.setFontSize(10);
  pdf.text('2020 - Present : Developpeur freelance & Entrepreneur digital', 20, 146);
  pdf.text('Fondateur - Chackor Organisation : digitalisation, formation, conseil et solutions numeriques', 20, 154);
  pdf.text('MetalStock Manager | Security Monitoring Dashboard | WiFiQRCode | Senegal Energy Xool', 20, 162);
  pdf.setFontSize(12);
  pdf.text('CONTACT', 20, 184);
  pdf.setFontSize(10);
  pdf.text('Thies, Senegal | issakamara958@gmail.com | +221 77 682 84 41', 20, 192);
  pdf.text('GitHub: github.com/IssaKamara958 | LinkedIn: linkedin.com/in/issakamara/', 20, 200);
  pdf.addPage();
  pdf.setFontSize(18);
  pdf.text('ENVIRONNEMENT TECHNIQUE', 20, 25);
  pdf.setFontSize(10);
  pdf.text(['Windows 10/11, PowerShell, TCP/IP, IPv4, LAN, Wi-Fi, RJ45, switches, routeurs', 'VLAN/VPN : notions | Securite electronique : connaissances en cours de renforcement', 'React, Next.js, TypeScript, Node.js, Express, REST API, SQL, PostgreSQL, Supabase', 'Figma, responsive design, accessibilite, Netlify, Firebase, VS Code, GitHub'], 20, 38);
  pdf.setFontSize(18);
  pdf.text('ORIENTATION', 20, 90);
  pdf.setFontSize(10);
  pdf.text(pdf.splitTextToSize('Je souhaite contribuer a un environnement professionnel oriente support IT, systemes, reseaux, maintenance et solutions connectees. Mon approche associe rigueur informatique, capacite d apprentissage, resolution de problemes et digitalisation.', 170), 20, 103);
  pdf.save('Issa-Kamara-CV-Informaticien-2026.pdf');
};

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
    "jobTitle": "Informaticien expérimenté - Support IT, Systèmes, Réseaux et Digitalisation",
    "email": "mailto:issakamara958@gmail.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Thiès", "addressCountry": "SN" }
  };

  return (
    <>
      <Helmet>
        <title>Issa KAMARA | Informaticien, Support IT, Systèmes & Réseaux</title>
        <meta name="description" content="Portfolio professionnel d'Issa KAMARA, informaticien basé à Thiès, spécialisé en support IT, systèmes, réseaux, développement web et digitalisation." />
        <meta name="author" content="Issa KAMARA" />
        <link rel="canonical" href="https://issa-portfeuil.netlify.app/" />
        <meta property="og:title" content="Issa KAMARA | Informaticien & Support IT" />
        <meta property="og:description" content="Support IT • Systèmes • Réseaux • Digitalisation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://issa-portfeuil.netlify.app/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section className="hero" id="accueil">
        <div className="hero-copy"><p className="eyebrow">ISSA KAMARA · THIÈS, SÉNÉGAL</p><h1>Informaticien expérimenté</h1><p className="hero-specialties">Support IT <span>•</span> Systèmes <span>•</span> Réseaux <span>•</span> Digitalisation</p><p className="hero-lead">13+ ans d'expérience dans l'informatique, le support technique, les systèmes Windows, le matériel et les solutions numériques.</p><p>Je combine mon expérience informatique avec le développement web, l'UX/UI et la digitalisation afin de concevoir, maintenir et améliorer des solutions adaptées aux besoins des entreprises.</p><div className="hero-actions"><a className="button button-primary" href="#cv">Télécharger mon CV</a><a className="button button-secondary" href="#projets">Voir mes projets</a><a className="text-link" href="#contact">Me contacter</a></div><div className="availability"><span>✓</span> Disponible pour opportunités professionnelles</div></div>
        <div className="hero-panel" aria-label="Résumé professionnel"><div className="panel-portrait"><img src="/assets/images/issa.jpg" alt="Portrait professionnel d'Issa Kamara" /></div><div className="panel-mark">IK</div><p>Profil polyvalent · 🛠️</p><strong>Résoudre. Configurer. Digitaliser.</strong><div className="panel-grid"><span>13+<small>ans informatique</small></span><span>5+<small>ans web</small></span><span>20+<small>projets numériques</small></span></div></div>
      </section>

      <section className="section intro-section" id="a-propos"><div className="section-heading"><p className="eyebrow">01 · À PROPOS</p><h2>👋 Une informatique ancrée dans le réel</h2></div><div className="intro-grid"><p>Je suis un informaticien et entrepreneur digital basé à Thiès, au Sénégal, avec plus de 13 ans d'expérience dans l'environnement informatique. Mon parcours couvre le matériel, les systèmes Windows, la maintenance, le dépannage, l'assistance utilisateurs et les solutions numériques.</p><p>J'ai également développé des compétences en développement web, UX/UI et digitalisation avec React, Next.js, TypeScript, Node.js, PostgreSQL, Firebase et Supabase. Je conçois des outils métiers qui répondent à des besoins concrets.</p></div></section>

      <section className="section systems-section" id="it-systemes"><div className="section-heading"><p className="eyebrow">02 · DOMAINE STRATÉGIQUE</p><h2>🖥️ IT & Systèmes</h2><p>Mon expérience informatique couvre le support technique, la maintenance, les environnements Windows, le matériel, la résolution d'incidents et les solutions numériques.</p></div><div className="systems-grid"><article><span className="card-index">🔧 01</span><h3>Support informatique</h3><p>Diagnostic matériel, installation de postes, configuration logicielle, dépannage, assistance utilisateurs, maintenance préventive et corrective.</p></article><article><span className="card-index">💻 02</span><h3>Windows & systèmes</h3><p>Windows 10 / 11, installation, configuration, gestion des périphériques, maintenance et PowerShell.</p></article><article><span className="card-index">🌐 03</span><h3>Réseaux</h3><p>TCP/IP, IPv4, LAN, Wi-Fi, DHCP, DNS, RJ45, switches, routeurs et diagnostic réseau. VLAN / VPN : notions.</p></article><article><span className="card-index">📹 04</span><h3>Sécurité électronique</h3><p><strong>Montée en compétence / laboratoire personnel.</strong> Vidéosurveillance IP, caméras, NVR/DVR, ONVIF, RTSP, PoE, contrôle d'accès, IoT et supervision.</p></article></div></section>

      <section className="section approach-section"><div className="section-heading"><p className="eyebrow">03 · APPROCHE TERRAIN</p><h2>Une méthode simple, documentée et utile</h2></div><div className="approach-grid">{['Diagnostiquer', 'Configurer', 'Dépanner', 'Documenter', 'Digitaliser'].map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{['Identifier rapidement l’origine d’un problème.', 'Installer et paramétrer les équipements et logiciels.', 'Résoudre les incidents avec une approche méthodique.', 'Consigner les interventions et les solutions.', 'Transformer les besoins métiers en outils numériques.'][index]}</p></div>)}</div></section>

      <section className="section" id="competences"><div className="section-heading"><p className="eyebrow">04 · COMPÉTENCES</p><h2>🧰 Une boîte à outils sans pourcentages artificiels</h2></div><div className="skills-grid">{skillGroups.map(([title, ...skills]) => <article key={title}><h3>{title}</h3><div className="tag-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

      <section className="section projects-section" id="projets"><div className="section-heading"><p className="eyebrow">05 · PROJETS TECHNIQUES</p><h2>🚀 Des solutions construites autour de problèmes concrets</h2><p>Chaque projet est présenté dans mon portfolio créatif et technique 3D.</p></div><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><div className="project-icon" aria-hidden="true">{project.icon}</div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noopener noreferrer">Explorer dans le Portfolio 3D <span aria-hidden="true">↗</span></a></article>)}</div></section>

      <section className="section experience-section" id="experience"><div className="section-heading"><p className="eyebrow">06 · EXPÉRIENCE</p><h2>Un parcours professionnel polyvalent</h2></div><div className="timeline"><article><span>2020 — Présent</span><div><h3>Développeur freelance & Entrepreneur digital</h3><p>Conception d'applications web, dashboards et outils métiers. Digitalisation, UX/UI, accompagnement de projets et formation informatique.</p></div></article><article><span>Parcours continu</span><div><h3>Expérience informatique, support & maintenance</h3><p>Support utilisateurs, maintenance du matériel, environnements Windows, dépannage et résolution méthodique de problèmes. Les dates et fonctions détaillées sont à compléter selon le CV source.</p></div></article><article><span>Chackor Organisation</span><div><h3>Fondateur · Entrepreneuriat digital</h3><p>Digitalisation, développement de solutions, formation informatique, conseil et gestion de projets.</p></div></article></div></section>

      <section className="section creative-section"><div><p className="eyebrow">07 · AU-DELÀ DE L'INFORMATIQUE</p><h2>Une autre facette de mon expertise</h2><p>Plus de 10 ans de pratique artistique ont renforcé ma créativité, mon observation, ma précision et mon sens du détail.</p><p>L'entrepreneuriat m'a appris la responsabilité, la gestion, l'organisation, la relation client et l'adaptation.</p><a className="button button-secondary" href="https://issa-kamara-portfolio-3d.web.app/" target="_blank" rel="noopener noreferrer">Explorer mon Portfolio 3D ↗</a></div><div className="creative-note">Frontend · UX/UI · Three.js<br />Une compétence différenciante, au service de projets utiles.</div></section>

      <section className="section cv-section" id="cv"><div className="cv-callout"><div><p className="eyebrow">08 · CV</p><h2>Curriculum Vitae</h2><p>Informaticien expérimenté · Support IT · Systèmes · Réseaux · Digitalisation</p></div><div className="cv-actions"><button className="button button-primary" type="button" onClick={downloadCV}>Télécharger le CV PDF</button><a className="button button-secondary" href="https://github.com/IssaKamara958" target="_blank" rel="noopener noreferrer">Voir mon GitHub ↗</a></div></div></section>

      <section className="section contact-section" id="contact"><div className="section-heading"><p className="eyebrow">09 · CONTACT</p><h2>Parlons de votre projet</h2><p>Vous recherchez un profil informatique polyvalent, capable d'intervenir sur le support, les systèmes, les réseaux et la digitalisation ? Je suis disponible pour échanger.</p></div><div className="contact-grid"><div className="contact-details"><p><strong>Thiès, Sénégal</strong></p><a href="mailto:issakamara958@gmail.com">issakamara958@gmail.com</a><a href="tel:+221776828441">+221 77 682 84 41</a><a href="https://wa.me/221776828441" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href="https://www.linkedin.com/in/issakamara/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div><form name="contact" method="POST" data-netlify="true" className="contact-form"><input type="hidden" name="form-name" value="contact" /><label htmlFor="nom">Nom<input id="nom" name="nom" type="text" required /></label><label htmlFor="email">Email<input id="email" name="email" type="email" required /></label><label htmlFor="telephone">Téléphone <span>(optionnel)</span><input id="telephone" name="telephone" type="tel" /></label><label htmlFor="organisation">Organisation <span>(optionnel)</span><input id="organisation" name="organisation" type="text" /></label><label htmlFor="objet">Objet<input id="objet" name="objet" type="text" required /></label><label htmlFor="message">Message<textarea id="message" name="message" rows="5" required /></label><button className="button button-primary" type="submit">Envoyer le message</button></form></div></section>
    </>
  );
};

export default Home;
