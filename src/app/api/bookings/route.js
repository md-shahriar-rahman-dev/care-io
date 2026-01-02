import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import Service from "@/models/Service";
import User from "@/models/User";
import { authOptions } from "@/lib/authOptions";
import mongoose from "mongoose";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { serviceId, duration, durationType, location, totalCost, notes } = body;

    if (!mongoose.Types.ObjectId.isValid(serviceId))
      return NextResponse.json({ message: "Invalid service ID" }, { status: 400 });

    await connectDB();

    // Get the user's MongoDB ID
    const user = await User.findOne({ email: session.user.email });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    // Verify service exists
    const service = await Service.findById(serviceId);
    if (!service) return NextResponse.json({ message: "Service not found" }, { status: 404 });

    // Validate location
    const requiredLocationFields = ["division", "district", "city", "area", "address"];
    for (const field of requiredLocationFields) {
      if (!location?.[field] || location[field].trim() === "")
        return NextResponse.json({ message: `Location ${field} is required` }, { status: 400 });
    }

    const booking = await Booking.create({
      user: user._id,
      service: serviceId,
      duration,
      durationType,
      location,
      totalCost,
      notes,
      status: "Pending",
      bookingDate: new Date(),
    });

    return NextResponse.json(
      { message: "Booking created successfully", bookingId: booking._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);
    if (error.errors) console.error("Validation errors:", error.errors);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
