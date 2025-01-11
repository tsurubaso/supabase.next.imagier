// pages/stories/[id].jsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const StoryDetail = () => {
  const [story, setStory] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchStory = async () => {
        const { data, error } = await supabase
          .from('stories')
          .select('*')
          .eq('id', id)
          .single();  // Get a single story by ID

        if (error) {
          console.error(error);
        } else {
          setStory(data);
        }
      };

      fetchStory();
    }
  }, [id]); // Dependency array ensures fetch runs when id changes

  if (!story) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900">{story.title}</h1>
        <p className="text-lg text-gray-700 mt-4">{story.description}</p>
        <p className="text-sm text-gray-500 mt-4">Type: {story.type}</p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => router.push('/stories')}
          className="py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Back to Stories List
        </button>
      </div>
    </div>
  );
};

export default StoryDetail;
