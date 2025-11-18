import express from "express";
import { createVolunteer, getVolunteers, getVolunteerById } from "../controllers/volunteer.controller.js";

const router = express.Router();

router.post("/", createVolunteer);
router.get("/", getVolunteers);
router.get("/:id", getVolunteerById);

export default router;
