import express from "express";
import { auth } from "../middleware/auth.js";
import { createEvent, getEvents, registerForEvent } from "../controllers/event.controller.js";

const router = express.Router();

router.post("/", auth, createEvent);
router.get("/", getEvents);
router.post("/:eventId/register", auth, registerForEvent);

export default router;
