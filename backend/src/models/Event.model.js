import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  ngoId: { type: mongoose.Types.ObjectId, ref: "NGO" },
  title: String,
  description: String,
  skillsRequired: [String],
  date: Date,
  location: String,
  volunteers: [{ type: mongoose.Types.ObjectId, ref: "Volunteer" }]
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
