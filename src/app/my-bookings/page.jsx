"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function MyBookings() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // redirect to login
    }
  }, [status]);

  if (status === "loading") return <p>Loading your bookings...</p>;
  if (!session) return null;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <p>Welcome, {session.user.name}</p>
      {/* Render booking list here */}
    </div>
  );
}
