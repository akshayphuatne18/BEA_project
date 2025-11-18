import express from "express";
import { auth } from "../middleware/auth.js";
import { createReview } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", auth, createReview);

export default router;
