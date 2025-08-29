import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Pour afficher le statut du message envoyé

  const sendMessage = () => {
    if (!message.trim()) {
      setStatus("Veuillez entrer un message.");
      return;
    }

    const whatsappURL = `https://wa.me/221776828441?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp et gérer le cas où l'URL ne fonctionne pas
    try {
      window.open(whatsappURL, "_blank");
      setStatus("Message envoyé avec succès!");
    } catch (error) {
      setStatus("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <input
        type="text"
        placeholder="Votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Votre message"
      />

      <button onClick={sendMessage}>Envoyer</button>

      {status && <p className="status">{status}</p>} {/* Affichage du statut */}

      <p>Email : <a href="mailto:issakamara958@gmail.com">issakamara958@gmail.com</a></p>
    </section>
  );
};

export default Contact;
