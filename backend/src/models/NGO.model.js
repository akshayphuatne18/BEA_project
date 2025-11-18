import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  name: String,
  mission: String,
  contact: String
}, { timestamps: true });

export default mongoose.model("NGO", ngoSchema);
