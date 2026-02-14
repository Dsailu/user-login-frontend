"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  function logout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Dashboard
        </h1>
        <button
          onClick={logout}
          className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer"
        >
          Logout
        </button>
      </nav>

      <main className="p-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-3">
            Welcome to Demo App!
          </h2>

          <p className="text-gray-600">
            You are successfully logged in.
          </p>
        </div>
      </main>
    </div>
  );
}
