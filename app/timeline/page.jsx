"use client"; // Ensures the component is only rendered client-side

import { useEffect, useState } from "react";
import { DataSet, Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("books/timeline.json")
      .then((res) => res.json())
      .then((json) => {
        const items = new DataSet(
          json.map((entry) => ({
            id: entry.id,
            content: entry.title,
            start: entry.start,
            end: entry.end,
          }))
        );

        // Initialize the timeline with the fetched data
        const options = {
            locale: "fr", // Définit la langue en français
          };
        new Timeline(document.getElementById("timeline"), items, options);
        setData(items);
      })
      .catch((err) => console.error("❌ Error loading timeline:", err));
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>📜 Timeline</h1>
      <div id="timeline" style={{ height: "500px" }}></div>
    </main>
  );
}
