import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [getCourses, setGetCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const url = "http://localhost/api/courses";
      try {
        const resp = await fetch(GET, url);
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
      {getCourses.map((data) => {
        <div>
          <h2>{data.title}</h2>
          <div>
            <p>{data.description}</p>
          </div>
        </div>;
      })}
    </div>
  );
}
