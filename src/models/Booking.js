import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userEmail: String,
  serviceName: String,
  duration: Number,
  location: String,
  totalCost: Number,
  status: { type: String, default: "Pending" },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
