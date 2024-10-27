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
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 h-screen p-6 border-r">
      <h2 className="text-xl font-bold mb-4">Chapters Overview</h2>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <div>
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold hover:underline focus:outline-none"
              >
                {chapter.title}
                <span>{openChapters[chapter.id] ? "-" : "+"}</span>
              </button>
              {openChapters[chapter.id] && (
                <ul className="ml-4 mt-2 space-y-1">
                  {chapter.subContent.map((sub, index) => (
                    <li key={index} className="text-sm">
                      <Link href={`/chapter/${chapter.id}`} className="hover:underline">
                        {sub}
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
