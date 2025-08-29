import { supabase } from './supabaseClient';

// ... (les fonctions getProject et getAllProjects restent inchangées)

/**
 * Fetches all approved comments for a given project, along with the commenter's username.
 *
 * @param {number} projectId The ID of the project to fetch comments for.
 * @returns {Promise<Array<object>>} An array of comment objects with associated profiles.
 */
export async function getComments(projectId) {
  const { data: comments, error } = await supabase
    .from('comments')
    .select(`
      *,
      profiles ( username )
    `)
    .eq('project_id', projectId)
    .eq('approved', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching comments:', error);
    return [];
  }

  return comments;
}

/**
 * Adds a new comment to a project.
 *
 * @param {number} projectId The ID of the project.
 * @param {string} content The content of the comment.
 * @returns {Promise<object|null>} The newly created comment object.
 */
export async function addComment(projectId, content) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        console.error("User not logged in.");
        return null;
    }

  const { data: comment, error } = await supabase
    .from('comments')
    .insert([{ project_id: projectId, user_id: user.id, content: content, approved: false }])
    .select()
    .single();

  if (error) {
    console.error('Error adding comment:', error);
    return null;
  }

  return comment;
}

/**
 * Deletes a comment by its ID.
 *
 * @param {number} commentId The ID of the comment to delete.
 * @returns {Promise<boolean>} True if the deletion was successful, false otherwise.
 */
export async function deleteComment(commentId) {
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', commentId);

  if (error) {
    console.error('Error deleting comment:', error);
    return false;
  }

  return true;
}

// --- Fonctions existantes ---

export async function getProject(projectId) {
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single();

  if (error) {
    console.error('Error fetching project:', error);
    return null;
  }

  return project;
}

export async function getAllProjects() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return projects;
}
