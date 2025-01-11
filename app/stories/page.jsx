'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const { data, error } = await supabase
        .from('stories') // Ensure you have a 'stories' table
        .select('*');

      if (error) {
        console.error(error);
      } else {
        setStories(data);
        console.log(data);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        Stories List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stories.map((story) => (
          <Link key={story.id} href={`/stories/${story.id}`} passHref>
            <div className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
              <p className="text-gray-700 mt-2">{story.description}</p>
              <p className="text-sm text-gray-500 mt-2">{story.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
