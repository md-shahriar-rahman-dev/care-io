"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Example: custom email/password login if you implement backend API
    const res = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) router.push("/my-bookings");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-gray-400">or</span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/my-bookings" })}
            className="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <img src="/google-icon.png" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>
      
           <button
            onClick={() => signIn("facebook", { callbackUrl: "/my-bookings" })}
            className="w-full border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <img src="/facebook-icon.png" className="w-5 h-5" alt="Facebook" />
            Continue with Facebook
          </button> 
        </div>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
