import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>

      <h2 className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </h2>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
