import Link from "next/link";

export default function Home() {
  const chapters = [
    { id: 1, title: "Chapter 1: Introduction to PL/1" },
    { id: 2, title: "Chapter 2: Basics of PL/1" },
    { id: 3, title: "Chapter 3: Loops and recursion" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8  text-gray-200">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-400">
        Next.js Learning Path
      </h1>
      <p className="text-center max-w-xl mb-8 text-gray-300">
        Welcome to the PL1 learning hub! This guide will help you master the essentials of Next.js, from routing and components to data fetching. Start with the basics and progress through each chapter to enhance your skills.
      </p>

      <div className="w-full max-w-md mb-12">
        <img 
          src="/learning-overview.jpg" 
          alt="Learning Overview" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
        Choose a Chapter to Start Learning
      </h2>
      <ul className="list-none space-y-4 text-center">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/chapter/${chapter.id}`}>
              <span className="text-lg font-semibold text-gray-300 hover:text-indigo-400 transition duration-200">
                {chapter.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
