import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    durationType: {
      type: String,
      required: true,
      enum: ["hours", "days"],
      default: "hours",
    },
    location: {
      division: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    totalCost: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    startDate: Date,
    endDate: Date,
    notes: String,
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Refunded"],
      default: "Pending",
    },
    paymentId: String,
    caregiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    specialInstructions: String,
    emergencyContact: {
      name: String,
      phone: String,
      relation: String,
    },
  },
  { timestamps: true }
);

// Index for faster queries
BookingSchema.index({ user: 1, createdAt: -1 });
BookingSchema.index({ status: 1 });
BookingSchema.index({ service: 1 });

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);