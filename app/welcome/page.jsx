// app/welcome/page.jsx

"use client";
import NavBar from '../../components/NavBar';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase from "../../supabaseClient";
import Comment from "../../components/Comment";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // If no session, redirect to login
          router.push("/login");
      }
    };
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    } else {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
       <NavBar />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Welcome to the Imagier!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          You always have been reading wonderful stories... But what good is a
          story without an illustration? Think about Jules Verne without Gustave
          Doré? No Jules without Gustave.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Here, content creators can create illustrations for already existing
          stories and share their work. The goal is to promote and remunerate
          illustrators.
          <br />
          You get the point. Now, I invite to read the stories, see where to put
          your illustration, and share with us your illustration link. we do the
          reste.
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Logout
        </button>
        <div className="mt-4">
          <Link
            href="/stories"
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go to Stories
          </Link>
        </div>
        {/* Add the Comment Component */}
        <Comment />
      </div>
    </div>
  );
}
