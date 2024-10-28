export default function Chapter7() {
    return (
      <div className="flex flex-col items-center p-8 min-h-screen text-gray-200">
        <h1 className="text-4xl font-extrabold mb-6 text-indigo-400">
          Chapter 1: Introduction to Next.js
        </h1>
        <p className="text-center max-w-2xl text-lg text-gray-300 mb-8">
          Dive into the world of Next.js, a powerful framework for building optimized React applications. In this chapter, we’ll cover the basics, including setup, page structure, and the key benefits that make Next.js a popular choice for developers.
        </p>
  
        <div className="w-full max-w-2xl mb-12">
          <img
            src="/chapter1-overview.jpg"
            alt="Chapter 1 Overview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
  
        <div className="max-w-2xl text-gray-300 space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-300">
            Key Topics Covered
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Setting up a Next.js Project</li>
            <li>File-Based Routing System</li>
            <li>Basic Component Structure</li>
            <li>Static and Dynamic Content Rendering</li>
          </ul>
        </div>
      </div>
    );
  }
  