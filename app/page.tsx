import Link from "next/link";

export default function Home() {
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
