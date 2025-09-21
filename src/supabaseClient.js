
// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config';

/**
 * Initialisation du client Supabase.
 * Ce client utilise les informations publiques et peut être utilisé dans tout le frontend.
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
