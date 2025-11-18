import express from "express";
import { createNGO, getNGOs, getNGOById, updateNGO, deleteNGO } from "../controllers/ngo.controller.js";

const router = express.Router();

router.post("/", createNGO);
router.get("/", getNGOs);
router.get("/:id", getNGOById);
router.get("/:id", updateNGO);  
router.get("/:id", deleteNGO);  


export default router;
