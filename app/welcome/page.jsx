// app/welcome/page.jsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../../supabaseClient';
import Comment from '../../components/Comment';

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // If no session, redirect to login
        router.push('/login');
      }
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/login');
    } else {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">Welcome to the Imagier!</h1>
        <p className="text-lg text-gray-700 mt-4">
          You always have been reading wonderful stories... But what good is a
          story without an illustration? Think about Jules Verne without
          Gustave Doré? No Jules without Gustave.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Here, content creators can create illustrations for already created
          stories and share their work. The goal is to promote and remunerate
          illustrators.
        </p>

        <button
          onClick={handleLogout}
          className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Logout
        </button>

        {/* Add the Comment Component */}
        <Comment />
      </div>
    </div>
  );
}
