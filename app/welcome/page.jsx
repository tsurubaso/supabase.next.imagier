"use client";
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../supabaseClient";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
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

      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Welcome to the Imagier!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You always have been reading wonderful stories...
          <br />
          Great Authors, Great Adventures.
          <br />
          But what good is a story without an illustration?
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Think about{" "}
          <strong>
            <a
              href="https://en.wikipedia.org/wiki/Jules_Verne"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jules Verne
            </a>
          </strong>{" "}
          without{" "}
          <em>
            <a
              href="https://fr.wikipedia.org/wiki/%C3%89douard_Riou"
              target="_blank"
              rel="noopener noreferrer"
            >
              Édouard Riou
            </a>
            ,
            <a
              href="https://fr.wikipedia.org/wiki/Alphonse_de_Neuville"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alphonse de Neuville
            </a>
            ,
            <a
              href="https://fr.wikipedia.org/wiki/L%C3%A9on_Benett"
              target="_blank"
              rel="noopener noreferrer"
            >
              Léon Benett
            </a>
          </em>
          , and{" "}
          <em>
            <a
              href="https://fr.wikipedia.org/wiki/Jules_F%C3%A9rat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jules Férat
            </a>
          </em>
          .<br />
          Or{" "}
          <em>
            <a
              href="https://en.wikipedia.org/wiki/%C3%89mile_Bayard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Émile-Antoine Bayard
            </a>
          </em>
          !
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Yes, you see, in your mind, and for generations, those stories had
          always been illustrated.
          <br />
          The art of the Editor has always been to combine text and image.
          <br />
          For Jules it was{" "}
          <strong>
            <a
              href="https://en.wikipedia.org/wiki/Pierre-Jules_Hetzel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pierre-Jules Hetzel
            </a>
          </strong>
          .
        </p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ✏️ What is this project?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Here, content creators can create illustrated stories and share their
          work.
          <br />
          The goal is to{" "}
          <strong>promote and, in the future, remunerate creators</strong>:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Illustrators</li>
          <li>Graphic designers</li>
          <li>Painters</li>
          <li>Photographers</li>
          <li>3D artists</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">... it's open bar!</p>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🔧 What's next?
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>
            I will share with creators another app to simplify the process.
          </li>
          <li>You will have more control and autonomy.</li>
          <li>Later, I will open this space to writers — but not yet.</li>
          <li>For now, just share your link — we will not host it.</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          📚 How to contribute
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I invite you to <strong>read the stories</strong>, see where
          illustrations can fit, and we will take care of the rest.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This software is hosted on GitHub — feel free to{" "}
          <strong>clone it</strong>.
          <br />I will add rules later on, but the first one is:
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
          🧾 <strong>Respect the work of others.</strong>
        </blockquote>
        <p className="text-lg text-gray-700">
          This implies that, in the future, I will better organize the{" "}
          <code>/public</code> folder.
          <br />
          For now you have only one big group of related stories and novels.
        </p>
      </div>
    </div>
  );
}
