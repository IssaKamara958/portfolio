import { Auth as AuthUI } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const Auth = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  if (!session) {
    return (
      <div className="auth-container">
        <AuthUI
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['google', 'github']} // Vous pouvez ajouter d'autres fournisseurs
        />
      </div>
    );
  } else {
    return null; // Ou un message de bienvenue, un bouton de déconnexion, etc.
  }
};

export default Auth;
