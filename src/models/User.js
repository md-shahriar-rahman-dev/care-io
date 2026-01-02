import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    nid: {
      type: String,
      required: function () {
        return !this.googleId;
      },
      trim: true,
    },
    contact: { type: String, trim: true },
    googleId: { type: String, sparse: true },
    image: String,
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    nidVerified: { type: Boolean, default: false },
    status: {
      type: String,
      default: "active",
      enum: ["active", "suspended", "deleted"],
    },
    lastLogin: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

// ✅ FIXED PASSWORD HASHING
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Virtual field
UserSchema.virtual("joinedDate").get(function () {
  return this.createdAt.toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
