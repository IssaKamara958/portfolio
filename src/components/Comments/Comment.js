import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { deleteComment } from '../../database';
import './Comments.css'; // Importer le fichier CSS

const Comment = ({ comment, onCommentDeleted }) => {
  const session = useSession();
  const supabase = useSupabaseClient();

  // Simplification pour obtenir le rôle du profil (à adapter si vous stockez le profil dans l'état global)
  const userRole = async () => {
    if (!session) return 'anon';
    const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
    return data ? data.role : 'user';
  };

  const handleDelete = async () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce commentaire ?")) {
      const success = await deleteComment(comment.id);
      if (success) {
        onCommentDeleted(comment.id);
      }
    }
  };

  const canDelete = session && (session.user.id === comment.user_id || userRole() === 'admin');

  return (
    <div className="comment">
      <p className="comment-author">{comment.profiles.username}</p>
      <p className="comment-content">{comment.content}</p>
      <p className="comment-date">{new Date(comment.created_at).toLocaleDateString()}</p>
      {canDelete && (
        <button onClick={handleDelete} className="delete-comment-btn">
          Supprimer
        </button>
      )}
    </div>
  );
};

export default Comment;
