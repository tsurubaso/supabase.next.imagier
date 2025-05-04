import { useEffect, useState } from "react";
import { DataSet, Timeline } from "vis-timeline/standalone";

export default function TimelineView() {
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

        new Timeline(document.getElementById("timeline"), items, {});
        setData(items);
      });
  }, []);

  return <div id="timeline"></div>;
}
