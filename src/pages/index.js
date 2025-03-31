import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Hello, I'm Sarper 👋</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-xl">
        I'm a developer passionate about building creative and interactive web
        experiences. This is my personal portfolio site built with React and
        Next.js.
      </p>
      <Link
        href="/projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View my projects
      </Link>
    </div>
  );
}
