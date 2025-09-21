import { useSession } from '@supabase/auth-helpers-react';
import { deleteGuestbookEntry } from '../../database';
import './Guestbook.css';

const GuestbookComment = ({ comment, onCommentDeleted }) => {
  const session = useSession();
  const isOwner = session && session.user.id === comment.user_id;

  const handleDelete = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) {
      try {
        await deleteGuestbookEntry(comment.id);
        onCommentDeleted(comment.id);
      } catch (error) {
        console.error("Erreur lors de la suppression du commentaire:", error);
        alert("Impossible de supprimer le commentaire.");
      }
    }
  };

  return (
    <div className="guestbook-comment">
      <p className="comment-content">{comment.content}</p>
      <div className="comment-meta">
        <span>Par : {comment.profiles?.username || 'Utilisateur anonyme'}</span>
        <span>Le : {new Date(comment.created_at).toLocaleDateString()}</span>
      </div>
      {isOwner && (
        <button onClick={handleDelete} className="delete-comment-button">
          Supprimer
        </button>
      )}
    </div>
  );
};

export default GuestbookComment;
