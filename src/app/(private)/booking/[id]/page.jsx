"use client";
import { useSession } from "next-auth/react";

export default function BookingPage({ params }) {
  const { data } = useSession();

  if (!data) return null;

  return (
    <form className="p-10 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Service</h2>
      <input className="input" placeholder="Duration (hours)" />
      <input className="input mt-2" placeholder="Location" />
      <button className="btn mt-4">Confirm Booking</button>
    </form>
  );
}
