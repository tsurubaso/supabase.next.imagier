
//noty good

import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

export default function WelcomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
    } else {
      // Redirect to landing page
      router.push('/');
    }
  };

  return (
    <div>
      <h1>Welcome to the Imagier</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
