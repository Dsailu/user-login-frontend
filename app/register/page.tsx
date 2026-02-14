"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RegisterPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState({
        email: "",
        password: ""
    });

    async function handleRegister(e: any) {
        e.preventDefault();
        if (email && password) {
            if (!/\S+@\S+\.\S+/.test(email)) {
                setError((prev) => ({ ...prev, email: "Invalid email format" }));
                return;
            } else if (password.length < 6) {
                setError((prev) => ({ ...prev, password: "Password must be at least 6 characters long" }));
                return;
            } else {
                setError({ email: "", password: "" });

                try {

                    setLoading(true);

                    await axios.post(
                        "http://localhost:3000/auth/register",
                        { email, password }
                    );

                    setMsg("Registration successful!");
                    setTimeout(() => router.push("/login"), 1500);
                } catch {
                    setMsg("Registration failed");
                } finally {
                    setLoading(false);
                }
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Register
                </h2>

                <form
                    onSubmit={handleRegister}
                    className="space-y-5"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-sm text-red-500">
                        {error.email && error.email}
                    </p>

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-sm text-red-500">
                        {error.password && error.password}
                    </p>

                    {msg && (
                        <p className="text-center text-sm text-gray-600">
                            {msg}
                        </p>
                    )}

                    <button
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? "Creating..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm mt-6 text-gray-500">
                    Already have account?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 font-medium hover:underline cursor-pointer"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
