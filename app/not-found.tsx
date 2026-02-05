import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal-dark to-navy-dark px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-cyan mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-cyan text-charcoal-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/50 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}