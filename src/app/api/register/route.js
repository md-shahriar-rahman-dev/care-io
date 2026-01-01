import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();
  await connectDB();

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });

  return Response.json({ success: true });
}
