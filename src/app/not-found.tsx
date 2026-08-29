import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#272727] text-white p-5 text-center">
      <h1 className="text-6xl font-bold text-[#3BF686] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <Link
        href="/"
        className="px-6 py-3 bg-[#4CA9FF] text-[#272727] font-bold rounded-xl hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  );
}
