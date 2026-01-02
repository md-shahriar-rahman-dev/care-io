import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { FaUser, FaClock, FaMapMarkerAlt, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

export default async function BookingDetailsPage({ params }) {
  const { bookingId } = params;

  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) return notFound();

  const booking = await Booking.findById(bookingId)
    .populate("service")
    .populate("user");

  if (!booking) return notFound();

  // Security: Only the user who booked can see
  if (booking.user.email !== session.user.email) return notFound();

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Booking Details</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-3">
          <FaUser className="text-gray-500" />
          <p><strong>Booked By:</strong> {booking.user.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-gray-500" />
          <p><strong>Duration:</strong> {booking.duration} {booking.durationType}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-gray-500" />
          <p><strong>Location:</strong> {booking.location.address}, {booking.location.area}, {booking.location.city}, {booking.location.district}, {booking.location.division}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaMoneyBillWave className="text-gray-500" />
          <p><strong>Total Cost:</strong> ৳{booking.totalCost}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500" />
          <p><strong>Status:</strong> {booking.status}</p>
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-gray-600 mb-2"><strong>Service:</strong> {booking.service.name}</p>
          <p className="text-gray-600"><strong>Category:</strong> {booking.service.category}</p>
        </div>
      </div>
    </main>
  );
}
