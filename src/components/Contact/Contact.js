import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = () => {
    const { nom, telephone, service, message } = form;

    // 🔒 Validation
    if (!nom || !telephone || !message) {
      setStatus("⚠️ Veuillez remplir les champs obligatoires.");
      return;
    }

    // 📩 Message structuré
    const fullMessage = `
📩 Nouvelle demande - Senegal Energy Xool

👤 Nom : ${nom}
📞 Téléphone : ${telephone}
🛠️ Service : ${service || "Non précisé"}

💬 Message :
${message}

---
Envoyé depuis le site web
`;

    const whatsappURL = `https://wa.me/221776828441?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");

    setStatus("✅ Redirection vers WhatsApp...");

    // Reset (optionnel)
    setForm({
      nom: "",
      telephone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>📞 Contactez-nous</h2>

      <div className="contact-form">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom *"
          value={form.nom}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Votre numéro WhatsApp *"
          value={form.telephone}
          onChange={handleChange}
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Choisir un service</option>
          <option>Création de site web</option>
          <option>Application web</option>
          <option>Plateforme énergétique</option>
          <option>Design graphique</option>
          <option>Maintenance & support</option>
        </select>

        <textarea
          name="message"
          placeholder="Décrivez votre besoin..."
          value={form.message}
          onChange={handleChange}
          rows="5"
        />

        <button onClick={sendMessage}>
          Envoyer via WhatsApp
        </button>

        {status && <p className="status">{status}</p>}
      </div>

      <p className="email">
        📧 Email :{" "}
        <a href="mailto:issakamara958@gmail.com">
          issakamara958@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
