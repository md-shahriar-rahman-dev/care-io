"use client";
import { useSession } from "next-auth/react";

export default function BookingForm({ service }) {
  const { data } = useSession();

  const submit = async e => {
    e.preventDefault();
    const duration = e.target.duration.value;
    const location = e.target.location.value;

    await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        userEmail: data.user.email,
        serviceName: service.name,
        duration,
        location,
        totalCost: duration * service.price,
      }),
    });

    alert("Booking Successful");
  };

  return (
    <form onSubmit={submit}>
      <input name="duration" placeholder="Duration" required />
      <input name="location" placeholder="Location" required />
      <p>Total Cost: dynamic</p>
      <button>Confirm Booking</button>
    </form>
  );
}
