"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const chapters = [
    { id: 1, title: "Chapter 1: Introduction to Next.js", subContent: ["What is Next.js?", "Features", "Getting Started"] },
    { id: 2, title: "Chapter 2: Routing in Next.js", subContent: ["Pages and Routes", "Dynamic Routing", "Nested Routes"] },
    { id: 3, title: "Chapter 3: Components and Props", subContent: ["Using Components", "Props in Next.js", "Reusability"] },
  ];

  const [openChapters, setOpenChapters] = useState<{ [key: number]: boolean }>({});

  const toggleChapter = (id: number) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 h-screen p-6 border-r border-gray-700 shadow-lg rounded-r-3xl">
      <h2 className="text-2xl font-bold mb-6 text-indigo-400">Chapters Overview</h2>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li key={chapter.id} className="pb-2">
            <div className="rounded-lg bg-gray-800 p-4 hover:bg-gray-700 transition duration-200 ease-in-out">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-300 hover:text-indigo-400 focus:outline-none transition duration-200"
              >
                {chapter.title}
                <span className="text-indigo-400">{openChapters[chapter.id] ? "-" : "+"}</span>
              </button>
              {openChapters[chapter.id] && (
                <ul className="ml-4 mt-3 space-y-1 text-gray-400">
                  {chapter.subContent.map((sub, index) => (
                    <li key={index} className="text-sm pl-2 border-l border-gray-600 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out">
                      <Link href={`/chapter/${chapter.id}`}>
                        <span className="hover:text-indigo-400 transition duration-200 pl-2">{sub}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
