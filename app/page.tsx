"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome 👋
        </h1>

        <p className="text-gray-500 mb-8">
          Login or Register to continue
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
