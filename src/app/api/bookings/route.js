import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import { sendInvoice } from "@/lib/email";

export async function POST(req) {
  const data = await req.json();
  await connectDB();

  const booking = await Booking.create(data);
  await sendInvoice(data.userEmail, booking);

  return Response.json({ success: true });
}

export async function GET(req) {
  const email = req.nextUrl.searchParams.get("email");
  await connectDB();

  const bookings = await Booking.find({ userEmail: email });
  return Response.json(bookings);
}
