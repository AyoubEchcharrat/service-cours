import { useEffect, useState } from "react";

export default function Home() {
  const [getCourses, setGetCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const url = "http://localhost:7777/api/courses";
      try {
        const resp = await fetch(url, { method: "GET" });
        if (!resp.ok) {
          throw new Error("Une erreur est survenue lors du GET.");
        }
        const result = await resp.json();
        setGetCourses(result);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses en ligne disponibles</h1>
      {getCourses.map((data) => (
        <div>
          <h2>{data.title}</h2>
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
