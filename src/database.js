import { supabase } from './supabaseClient';

/**
 * Fetches all approved guestbook entries, along with the commenter's username.
 *
 * @returns {Promise<Array<object>>} An array of guestbook entries with associated profiles.
 * @throws {Error} Throws an error if the fetch fails.
 */
export async function getGuestbookEntries() {
  const { data, error } = await supabase
    .from('comments')
    .select(`
      *,
      profiles ( username )
    `)
    .eq('approved', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching guestbook entries:', error);
    throw new Error('Could not fetch guestbook entries.');
  }

  return data;
}

/**
 * Adds a new guestbook entry.
 *
 * @param {string} content The content of the entry.
 * @param {string} userId The ID of the user adding the entry.
 * @returns {Promise<object>} The newly created guestbook entry.
 * @throws {Error} Throws an error if the insertion fails.
 */
export async function addGuestbookEntry(content, userId) {
  if (!userId) {
      throw new Error("User not logged in.");
  }

  const { data, error } = await supabase
    .from('comments')
    .insert([{ user_id: userId, content: content, approved: false }])
    .select()
    .single();

  if (error) {
    console.error('Error adding guestbook entry:', error);
    throw new Error('Could not add guestbook entry.');
  }

  return data;
}

/**
 * Deletes a guestbook entry by its ID.
 *
 * @param {number} entryId The ID of the entry to delete.
 * @returns {Promise<boolean>} True if the deletion was successful.
 * @throws {Error} Throws an error if the deletion fails.
 */
export async function deleteGuestbookEntry(entryId) {
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', entryId);

  if (error) {
    console.error('Error deleting guestbook entry:', error);
    throw new Error('Could not delete guestbook entry.');
  }

  return true;
}
