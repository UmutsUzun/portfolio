import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-gray-100 text-gray-800 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold">Sarper</h1>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/resume-cv" className="hover:underline">
          Resume-CV
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
