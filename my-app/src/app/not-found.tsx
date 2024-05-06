import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">404 Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for could not be found.</p>
      <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  );
}
