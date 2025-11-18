import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewerId: { type: mongoose.Types.ObjectId, ref: "User" },
  targetId: { type: mongoose.Types.ObjectId, ref: "User" },
  rating: Number,
  comment: String
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
