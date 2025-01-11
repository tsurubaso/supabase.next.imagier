"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function WelcomePage() {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  // Fetch user session
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUser(data.session.user);
      } else {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  // Fetch comments from the database
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setComments(data);
      }
    };

    fetchComments();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    const commentData = {
      comment: newComment, // Use 'comment' instead of 'text'
      user: user ? user.email : "Anonymous",
    };

    const { error } = await supabase.from("comments").insert([commentData]);

    if (error) {
      console.error("Error posting comment:", error.message);
    } else {
      setNewComment("");
      setComments([commentData, ...comments]); // Update the comments list
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
    } else {
      router.push("/"); // Redirect to the landing page
    }
  };

  const handleGoToStories = () => {
    router.push('/stories'); // Redirect to stories page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome to the Imagier
        </h1>
        <p className="text-center text-lg text-gray-600">
          You’ve always been reading wonderful stories... But what good is a
          story without an illustration? Think about Jules Verne without Gustave
          Doré. No Jules without Gustave!
          <br />
          <strong>
            Here, content creators can create illustrations for already created
            stories, and share their work. The goal is to promote and remunerate
            illustrators.
          </strong>
        </p>

        {/* Comment Section */}
        <div className="mt-8">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
            Leave a Comment
          </h2>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 border border-gray-300 rounded-md"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md"
            >
              Post Comment
            </button>
          </form>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Comments:
            </h3>
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-sm"
                >
                  <p className="font-semibold text-gray-900">{comment.user}</p>
                  <p className="text-gray-700 mt-2">{comment.comment}</p>{" "}
                  {/* Use 'comment' instead of 'text' */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        </div>

        {/* Redirect Button to Home */}
        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/")}
            className="py-2 px-4 bg-green-600 text-white rounded-md"
          >
            Back to Home
          </button>

          <button
            onClick={handleGoToStories}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Explore Stories
          </button>
        </div>
      </div>
    </div>
  );
}
