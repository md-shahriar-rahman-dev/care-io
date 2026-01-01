"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        Care.xyz
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        {session ? (
          <>
            <Link href="/my-bookings">My Bookings</Link>
            <button onClick={() => signOut()} className="ml-2">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
