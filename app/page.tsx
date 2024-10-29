import Link from "next/link";

export default function Home() {
  const chapters = [
    { id: 1, title: "Chapter 1: Introduction to PL/1", subContent: ["History and Evolution", "Importance of PL/I in modern systems", "Applications of PL/I in various fields"] },
    { id: 2, title: "Chapter 2: Getting Started with PL/I Programming", subContent: ["Setting up the PL/I Environment", "First Program: Hello World", "Syntax and Structure of a PL/I Program"] },
    { id: 3, title: "Chapter 3: Data Types and Variables", subContent: ["Basic Data Types", "Advanced Data Types", "Variable Declaration and Scope","Constants and Literals"] },
    { id: 4, title: "Chapter 4: Operators and Expressions", subContent: ["Arithmetic Operators", "Logical and Comparison Operators", "Bitwise Operators","Complex Expressions and Evaluation Order"] },
    { id: 5, title: "Chapter 5: Control Structures", subContent: ["Conditional Statements", "Loops", "Exit and Cycle Control Statements"] },
    { id: 6, title: "Chapter 6: Loops and Recursion", subContent: ["Defining Procedures and Functions", "Parameters Passing Mechanisms", "Recursive Functions","Scope and Lifetime of Variables in Procedures"] },
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
    <div className="flex flex-col items-center min-h-screen p-8 text-gray-200">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-400">
        PL/1 - PL/I Learning Path
      </h1>
      <p className="text-center max-w-xl mb-8 text-gray-300">
        Welcome to the PL/1 learning hub! This guide will help you master the essentials of PL/1, from Loops and Recursion to Error Handling. Start with the basics and progress through each chapter to enhance your skills.
      </p>

      <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
        Choose a Chapter to Start Learning
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {chapters.map((chapter) => (
          <Link key={chapter.id} href={`/chapter/${chapter.id}`}>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-60 w-full flex flex-col  overflow-hidden">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                {chapter.title}
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                {chapter.subContent.map((subtitle, index) => (
                  <li key={index}>{subtitle}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
