import { supabase } from './supabaseClient';

/**
 * Fetches a single project from the database by its ID.
 *
 * @param {number} projectId The ID of the project to fetch.
 * @returns {Promise<object|null>} The project object, or null if not found or an error occurs.
 */
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

/**
 * Fetches all projects from the database.
 *
 * @returns {Promise<Array<object>>} An array of project objects, or an empty array if an error occurs.
 */
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
