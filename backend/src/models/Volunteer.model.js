import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  skills: [String],
  availability: String,
  bio: String
}, { timestamps: true });

export default mongoose.model("Volunteer", volunteerSchema);
