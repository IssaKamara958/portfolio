import { useState, useEffect } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import Modal from 'react-modal';
import { getGuestbookEntries, addGuestbookEntry } from '../../database';
import GuestbookComment from './GuestbookComment';
import Auth from '../Auth/Auth';
import './Guestbook.css';

// Associe la modale à l'élément racine de votre application pour l'accessibilité
Modal.setAppElement('#root');

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const session = useSession();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const fetchedEntries = await getGuestbookEntries();
        setEntries(fetchedEntries);
      } catch (error) {
        setError('Impossible de charger le livre d\'or.');
        console.error(error);
      }
    };
    fetchEntries();
  }, []);

  const handleEntrySubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      setModalIsOpen(true);
      return;
    }
    if (!newEntry.trim()) {
      setError('Le message ne peut pas être vide.');
      return;
    }

    try {
      await addGuestbookEntry(newEntry, session.user.id);
      alert("Votre message a été soumis et est en attente d'approbation.");
      setNewEntry('');
      setError(''); 
    } catch (error) {
      setError('Une erreur est survenue lors de l\'ajout du message.');
      console.error(error);
    }
  };

  const onEntryDeleted = (entryId) => {
    setEntries(entries.filter(e => e.id !== entryId));
  }

  return (
    <div className="guestbook-section">
      <h3 id="guestbook-heading">Livre d'or</h3>
      {session ? (
        <form onSubmit={handleEntrySubmit} className="guestbook-form" aria-labelledby="guestbook-heading">
          <label htmlFor="entry-input" className="sr-only">Votre message</label>
          <textarea
            id="entry-input"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Laissez un message..."
            required
            aria-required="true"
            aria-describedby={error ? "entry-error" : undefined}
          />
          {error && <p id="entry-error" className="error-message">{error}</p>}
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>Veuillez vous <button onClick={() => setModalIsOpen(true)}>connecter</button> pour laisser un message.</p>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Fenêtre d'authentification"
        className="auth-modal"
        overlayClassName="auth-modal-overlay"
      >
        <Auth />
        <button onClick={() => setModalIsOpen(false)} className="close-modal-button">Fermer</button>
      </Modal>

      <div className="guestbook-list">
        {entries.map((entry) => (
          <GuestbookComment key={entry.id} comment={entry} onCommentDeleted={onEntryDeleted} />
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
