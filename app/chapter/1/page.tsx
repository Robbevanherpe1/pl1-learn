import PLIExercise from "../../exercises/1/PLIExercise";
export default function Chapter1() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen  text-gray-200">
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

      <div className="max-w-2xl text-gray-300 space-y-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
          Key Topics Covered
        </h2>

        {/* Sub-content sections with IDs */}
        <section id="what-is-next-js" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            What is Next.js?
          </h3>
          <p className="text-gray-300">
            Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.
          </p>
        </section>

        <section id="features" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Features
          </h3>
          <p className="text-gray-300">
            Next.js includes many useful features such as routing, code splitting, and built-in support for server-side rendering and static generation.
          </p>
        </section>

        <section id="getting-started" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Getting Started
          </h3>
          <p className="text-gray-300">
            To get started with Next.js, install it by running <code>npx create-next-app</code> in your terminal. This will scaffold a new Next.js project.
          </p>
        </section>

        <section id="setting-up-nextjs-project" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Setting up a Next.js Project
          </h3>
          <p className="text-gray-300">
            Learn how to set up a new Next.js project, understand the project structure, and configure settings for development and production.
          </p>
        </section>

        <section id="file-based-routing-system" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            File-Based Routing System
          </h3>
          <p className="text-gray-300">
            Next.js uses a file-based routing system where each file in the <code>pages</code> directory becomes a route in your application.
          </p>
        </section>

        <section id="basic-component-structure" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Basic Component Structure
          </h3>
          <p className="text-gray-300">
            Components are the building blocks of any React application, and in Next.js, they work similarly with added optimizations.
          </p>
        </section>

        <section id="static-and-dynamic-content-rendering" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Static and Dynamic Content Rendering
          </h3>
          <p className="text-gray-300">
            Learn the difference between static and dynamic rendering, and when to use each approach in Next.js for optimal performance.
          </p>

          {/* PL/I Exercise */}
            <div className="w-full max-w-2xl mb-12">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
              Exercise: Write a PL/I Program
            </h2>
            <PLIExercise />
          </div>





        </section>
      </div>
    </div>
  );
}
