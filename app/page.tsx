import Link from "next/link";

export default function Home() {
  const chapters = [
    { id: 1, title: "Chapter 1: Introduction to Next.js" },
    { id: 2, title: "Chapter 2: Routing in Next.js" },
    { id: 3, title: "Chapter 3: Components and Props" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8">
      <h1 className="text-2xl font-bold">Choose a Chapter to Learn</h1>
      <ul className="list-none space-y-4 text-center">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link href={`/chapter/${chapter.id}`} className="text-lg font-semibold hover:underline">
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
