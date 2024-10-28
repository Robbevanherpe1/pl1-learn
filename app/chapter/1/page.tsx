export default function Chapter1() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-400">
        Chapter 1: Introduction to PL/I
      </h1>
      <p className="text-center max-w-2xl text-lg text-gray-300 mb-8">
        PL/I (Programming Language One) is a versatile language developed by IBM in the 1960s. Known for its robust ability to handle both business and scientific applications, PL/I continues to serve industries that require dependable mainframe operations. This chapter covers the history, technical aspects, and modern applications of PL/I in depth, illustrating its foundational role in mainframe programming and system reliability.
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

        <section id="history-evolution" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            History and Evolution
          </h3>
          <p className="text-gray-300">
            PL/I was developed in the 1960s by IBM to support both scientific and business applications. As one of the first truly multi-purpose programming languages, it combined the strengths of FORTRAN and COBOL, which were dominant in scientific and business computing respectively. Over the years, PL/I has evolved, adapting to meet the requirements of modern computational systems, especially in large enterprises that maintain legacy systems.
          </p>
          <p className="text-gray-300">
            IBM has continually updated PL/I to keep up with advancements in hardware and software, especially for mainframe systems. These updates include enhanced support for structured programming, error handling, and complex data types, making PL/I a comprehensive language that is particularly effective on IBM’s z/OS and other mainframe operating systems.
          </p>
        </section>

        <section id="importance-modern-systems" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Importance in Modern Systems
          </h3>
          <p className="text-gray-300">
            PL/I’s relevance persists due to its efficiency in managing large-scale, data-heavy operations which are typical of financial institutions, healthcare systems, and governmental data processing centers. Its robust syntax and ability to perform multitasking make it especially suitable for IBM mainframes, where it handles transaction processing, batch processing, and other critical workloads seamlessly.
          </p>
          <p className="text-gray-300">
            With its built-in concurrency controls and system-level access, PL/I enables systems to perform parallel processing, a feature that remains crucial in environments that demand high availability and stability. Modern enterprises continue to rely on PL/I’s extensive error handling and debugging capabilities, which reduce downtime and improve system reliability.
          </p>
        </section>

        <section id="applications" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Applications of PL/I in Various Fields
          </h3>
          <p className="text-gray-300">
            PL/I is widely used in sectors requiring high-stakes data processing, such as finance, where mainframe applications manage critical banking transactions, insurance data, and trading operations. In healthcare, PL/I supports the back-end operations for patient data management and claims processing systems that demand fault tolerance.
          </p>
          <p className="text-gray-300">
            The language has also adapted to support modern infrastructures; it plays a role in legacy-to-cloud transformation projects by interfacing with contemporary technologies. PL/I applications are frequently part of hybrid systems, interfacing with languages like Java or C++ and supporting complex database transactions in DB2 or IMS.
          </p>
        </section>

        <section id="technical-features" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Technical Features and Syntax
          </h3>
          <p className="text-gray-300">
            PL/I includes extensive data types and structures, including fixed and floating-point arithmetic, character strings, and bit strings, which allow it to handle diverse and complex data. Its control structures, such as `DO`, `IF`, `SELECT`, and `ON ERROR`, provide a high degree of control over program execution.
          </p>
          <p className="text-gray-300">
            PL/I’s multitasking capability is one of its hallmark features, allowing a single program to run multiple tasks concurrently. This is especially useful in high-performance computing environments, where parallel execution is key to managing vast amounts of data. Additionally, PL/I’s structured exception handling (`ON`, `GO TO`, etc.) allows for sophisticated error handling and recovery, a necessity for mission-critical applications.
          </p>
        </section>

        <section id="mainframe-integration" className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Integration with IBM Mainframe
          </h3>
          <p className="text-gray-300">
            PL/I is optimized for IBM mainframes, particularly z/OS, enabling direct access to system resources. This allows programs to leverage mainframe capabilities, such as Virtual Storage Access Method (VSAM) for file management, IMS for transaction management, and DB2 for database operations.
          </p>
          <p className="text-gray-300">
            Through tools like IBM’s PL/I Compiler and Debug Tool, developers can write, compile, and troubleshoot PL/I code effectively. Mainframe integration also enables PL/I to participate in IBM’s Transaction Processing Facility (TPF), which supports high-speed transaction processing in telecommunications and airlines.
          </p>
        </section>
      </div>
    </div>
  );
}
