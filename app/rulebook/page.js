"use client";
import NavBar from "../../components/NavBar";

import { useEffect } from "react";//, useState
//import Link from "next/link";
import supabase from "../../supabaseClient";

import { useRouter } from "next/navigation";

const RulePage = () => {
  const router = useRouter();
  0;

  useEffect(() => {
    const fetchStories = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // If no session, redirect to login page
      if (!session) {
        router.push("/login");
        return; // Prevent fetching stories if not logged in
      }
    };

    fetchStories();
  }, [router]);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4">
        <NavBar />
        <div
          className="min-h-screen p-4"
  
        >
          <div
            className="p-8 rounded-lg shadow-md max-w-3xl mx-auto"
       
          >
            <h1 className="text-3xl font-extrabold mb-4">
              📖 Rulebook — Naming & Organization
            </h1>

            <h2 className="text-2xl font-bold mb-4">📝 Naming Rules</h2>
            <ol className="list-decimal list-inside text-lg mb-6 space-y-2">
              <li>
                <strong>Series name first</strong> — The series title appears
                first, followed by the story rank as a letter (A, B, C...)
                instead of a number.
              </li>
              <li>
                <strong>Missing letters are allowed</strong> — Gaps in the
                alphabet are intentional.
              </li>
              <li>
                <strong>Shared universe</strong> — All stories take place in the
                same fictional universe.
              </li>
              <li>
                <strong>Loose relations</strong> — Connections between stories
                are loose; recurring elements may appear without strict
                continuity.
              </li>
            </ol>

            <hr className="my-8 border-gray-500" />

            <h2 className="text-2xl font-bold mb-4">📂 Story Distributions</h2>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>
                <strong>Drafts 📝</strong> — Freshly added stories, mostly from
                speech-to-text, with many spelling mistakes. This is mainly the
                writer’s workspace.
              </li>
              <li>
                <strong>Fragments ✂️</strong> — Incomplete pieces or excerpts,
                sometimes staged here before moving to the <em>stories</em>{" "}
                section.
              </li>
              <li>
                <strong>Stories 📚</strong> — The finsihed work, or what I want
                to be so.
              </li>
              <li>
                <strong>Others 🗂️</strong> — Old texts. Because old stuffs are
                also cool to read.
              </li>
            </ul>

            <hr className="my-8 border-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulePage;
