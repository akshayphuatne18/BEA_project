import Review from "../models/Review.model.js";

export const createReview = async (req, res) => {
  const review = await Review.create({
    reviewerId: req.user.id,
    ...req.body
  });

  res.json({ message: "Review added", review });
};
