import { useState, useEffect } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import { getComments, addComment } from '../../database';
import Comment from './Comment';
import Auth from '../Auth/Auth';
import './Comments.css'; // Importer le fichier CSS

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const session = useSession();

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await getComments(projectId);
      setComments(fetchedComments);
    };
    fetchComments();
  }, [projectId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      setShowAuth(true);
      return;
    }
    const createdComment = await addComment(projectId, newComment);
    if (createdComment) {
        alert("Votre commentaire a été soumis et est en attente d'approbation.");
      setNewComment('');
      // Optionnel : ne pas ajouter le commentaire à la liste tout de suite,
      // attendre qu'il soit approuvé.
    }
  };

  const onCommentDeleted = (commentId) => {
    setComments(comments.filter(c => c.id !== commentId));
  }

  return (
    <div className="comments-section">
      <h3>Commentaires</h3>
      {session ? (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Laissez un commentaire..."
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>Veuillez vous <button onClick={() => setShowAuth(true)}>connecter</button> pour commenter.</p>
      )}

      {showAuth && <Auth />}

      <div className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onCommentDeleted={onCommentDeleted} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
