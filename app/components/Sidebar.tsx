"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const chapters = [
    { id: 1, title: "Chapter 1: Introduction to PL/1", subContent: ["History and Evolution", "Importance of PL/I in modern systems", "Applications of PL/I in various fields"] },
    { id: 2, title: "Chapter 2: Getting Started with PL/I Programming", subContent: ["Setting up the PL/I Environment", "First Program: Hello World", "Syntax and Structure of a PL/I Program"] },
    { id: 3, title: "Chapter 3: Data Types and Variables", subContent: ["Basic Data Types", "Advanced Data Types", "Variable Declaration and Scope","Constants and Literals"] },
    { id: 4, title: "Chapter 4: Operators and Expressions", subContent: ["Arithmetic Operators", "Logical and Comparison Operators", "Bitwise Operators","Complex Expressions and Evaluation Order"] },
    { id: 5, title: "Chapter 5: Control Structures", subContent: ["Conditional Statements", "Loops", "Exit and Cycle Control Statements"] },
    { id: 6, title: "Chapter 6: Loops and recursion", subContent: ["Defining Procedures and Functions", "Parameters Passing Mechanisms", "Recursive Functions","Scope and Lifetime of Variables in Procedures"] },
    { id: 7, title: "Chapter 7: Procedures and Functions", subContent: ["String Declaration and Initialization", "String Manipulation Functions", "Handling Special Characters and Escape Sequences"] },
    { id: 8, title: "Chapter 8: Handling Strings and Characters", subContent: ["One-dimensional and Multi-dimensional Arrays", "Dynamic Arrays and Memory Management", "Data Structures in PL/I","Advanced Data Handling"] },
    { id: 9, title: "Chapter 9: Arrays and Data Structures", subContent: ["Working with Files: Reading and Writing", "File Types and Access Modes", "Handling Errors in File Operations"] },
    { id: 10, title: "Chapter 10: File I/O Operations", subContent: ["Error Detection and Handling Techniques", "Common Errors in PL/I and Debugging Strategies", "Built-in Functions for Error Handling"] },
    { id: 11, title: "Chapter 11: Error Handling and Debugging", subContent: ["Pointer Management and Memory Allocation", "Multithreading and Parallel Processing in PL/I", "Performance Optimization Techniques"] },
    { id: 12, title: "Chapter 12: Practical Applications and Case Studies", subContent: ["Real-world Examples and Applications", "Case Studies for Financial and Data Processing Systems", "Exercises and Challenges"] },
    { id: 13, title: "Chapter 13: Best Practices and Coding Standards", subContent: ["Writing Clean and Maintainable Code", "Naming Conventions and Documentation", "Code Review and Refactoring"] },
    { id: 14, title: "Chapter 14: Appendices", subContent: ["PL/I Reference Guide", "Glossary of Terms", "Additional Resources"] },
  ];

  const [openChapters, setOpenChapters] = useState<{ [key: number]: boolean }>({});

  const toggleChapter = (id: number) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-64 text-gray-200 min-h-screen p-6 border-r border-gray-700 shadow-lg rounded-r-3xl">
      <Link href="/" className="text-2xl  mb-4 text-indigo-400 hover:text-indigo-500 transition duration-200 mb-8">
        Chapters Overview
      </Link>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li key={chapter.id} className="pb-2">
            <div className="rounded-lg bg-gray-800 p-4 hover:bg-gray-700 transition duration-200 ease-in-out">
              <div className="flex items-center justify-between w-full">
                <Link href={`/chapter/${chapter.id}`} className="text-lg font-semibold text-gray-300 hover:text-indigo-400">
                  {chapter.title}
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleChapter(chapter.id);
                  }}
                  className="text-indigo-400 focus:outline-none hover:text-indigo-500 transition duration-200"
                  aria-label="Toggle dropdown"
                >
                  {openChapters[chapter.id] ? "-" : "+"}
                </button>
              </div>
              {openChapters[chapter.id] && (
                <ul className="ml-4 mt-3 space-y-1 text-gray-400">
                  {chapter.subContent.map((sub, index) => (
                    <li key={index} className="text-sm pl-2 border-l border-gray-600 rounded-md hover:bg-gray-700 transition duration-200 ease-in-out">
                      <Link href={`/chapter/${chapter.id}#${sub.replace(/\s+/g, "-").toLowerCase()}`}>
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
