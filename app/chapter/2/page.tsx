export default function Chapter2() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-400">
        Chapter 2: Getting Started with PL/I Programming
      </h1>
      <p className="text-center max-w-2xl text-lg text-gray-300 mb-8">
        This chapter will guide you through setting up a PL/I environment, writing your first PL/I program, and exploring the language&apos;s syntax and structure. With a solid understanding of these foundations, you&rsquo;ll be prepared to tackle more complex programming tasks in PL/I.
      </p>

      <div className="max-w-2xl text-gray-300 space-y-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
          Key Topics Covered
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <a href="#setting-up-the-pli-environment" className="text-indigo-300">
              Setting up the PL/I Environment
            </a>
          </li>
          <li>
            <a href="#first-program-hello-world" className="text-indigo-300">
              First Program: Hello World
            </a>
          </li>
          <li>
            <a href="#syntax-and-structure-of-a-pli-program" className="text-indigo-300">
              Syntax and Structure of a PL/I Program
            </a>
          </li>
        </ul>

        <section id="setting-up-the-pli-environment" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Setting up the PL/I Environment
          </h3>
          <p className="text-gray-300">
            To start programming in PL/I, you&rsquo;ll need an environment that supports it, which typically means an IBM mainframe or a compatible emulator. Begin by installing the necessary PL/I compiler (e.g., IBM Enterprise PL/I) and any required libraries.
          </p>
          <p className="text-gray-300">
            Access to the mainframe, if used, may require setting up an emulator (such as Hercules for personal systems) or accessing an IBM mainframe environment provided by your organization. Familiarize yourself with the command line or interactive development environments like IBM Developer for z/OS, as these tools streamline development and debugging processes.
          </p>
          <p className="text-gray-300">
            Recommended tools for development include:
          </p>
          <ul className="list-disc list-inside pl-4 text-gray-300">
            <li>IBM Developer for z/OS – an IDE for mainframe development.</li>
            <li>ISPF – a standard IBM interface for editing and navigating mainframe files.</li>
            <li>Enterprise PL/I compiler – for compiling PL/I code on mainframes.</li>
          </ul>
          <p className="text-gray-300">
            Once your environment is configured, ensure access to any relevant documentation or online resources to help resolve potential setup issues.
          </p>
        </section>

        <section id="first-program-hello-world" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            First Program: Hello World
          </h3>
          <p className="text-gray-300">
            Writing a simple &ldquo;Hello World&rdquo; program is a good starting point for understanding PL/I&rsquo;s syntax and structure. Here&rsquo;s a basic example:
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto mb-4">
            <code>
              {"/* Hello World program in PL/I */\n"}
              {"HELLO: PROC OPTIONS(MAIN);\n"}
              {"  PUT SKIP LIST('Hello, World!');\n"}
              {"END HELLO;"}
            </code>
          </pre>
          <p className="text-gray-300">
            In this program:
          </p>
          <ul className="list-disc list-inside pl-4 text-gray-300">
            <li><strong>HELLO:</strong> The program name, defined before the `PROC` keyword.</li>
            <li><strong>PROC OPTIONS(MAIN):</strong> Indicates this is the main entry procedure of the program.</li>
            <li><strong>PUT SKIP LIST:</strong> Outputs &ldquo;Hello, World!&rdquo; to the console with a line break (`SKIP`).</li>
            <li><strong>END HELLO;</strong> Closes the procedure named HELLO.</li>
          </ul>
          <p className="text-gray-300">
            This simple example introduces key elements of PL/I, including basic syntax and output commands. From here, you can expand to include variables, data types, and more complex procedures.
          </p>
        </section>

        <section id="syntax-and-structure-of-a-pli-program" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Syntax and Structure of a PL/I Program
          </h3>
          <p className="text-gray-300">
            PL/I syntax is built to handle both scientific and business logic, which makes it versatile. A PL/I program typically includes three main parts: declarations, program logic, and an ending statement. Here are some important syntax details:
          </p>
          <h4 className="text-lg font-semibold text-indigo-300 mb-2">Data Types and Declarations</h4>
          <p className="text-gray-300">
            PL/I supports various data types that make it highly flexible. Common types include:
          </p>
          <ul className="list-disc list-inside pl-4 text-gray-300">
            <li><strong>CHARACTER:</strong> For string data, defined as `CHARACTER(n)` where `n` is the length.</li>
            <li><strong>FIXED:</strong> For fixed-point numeric data, often used in business applications.</li>
            <li><strong>FLOAT:</strong> For floating-point data, useful in scientific calculations.</li>
          </ul>
          <p className="text-gray-300">
            Declarations are made at the start of the procedure, specifying data types and initializing values where needed.
          </p>

          <h4 className="text-lg font-semibold text-indigo-300 mb-2">Control Structures</h4>
          <p className="text-gray-300">
            PL/I includes control structures like `DO`, `IF`, `SELECT`, and looping constructs, making it powerful for handling complex logical operations.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto mb-4">
            <code>
              {"DO I = 1 TO 10;\n"}
              {"  PUT SKIP LIST('Iteration:', I);\n"}
              {"END;\n"}
            </code>
          </pre>
          <p className="text-gray-300">
            This loop iterates from 1 to 10, outputting each iteration. Control structures in PL/I are intuitive and designed for high readability.
          </p>

          <h4 className="text-lg font-semibold text-indigo-300 mb-2">Error Handling</h4>
          <p className="text-gray-300">
            One of PL/I&apos;s unique features is its advanced error handling with the `ON` condition. You can use it to define specific responses to errors directly within the program.
          </p>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto mb-4">
            <code>
              {"ON ERROR;\n"}
              {"  PUT SKIP LIST('An error occurred.');\n"}
              {"END;\n"}
            </code>
          </pre>
          <p className="text-gray-300">
            This block will execute if an error is encountered, providing a custom message and potentially allowing recovery or graceful exit strategies.
          </p>
        </section>
      </div>
    </div>
  );
}
