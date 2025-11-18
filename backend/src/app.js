import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/event.routes.js";
import reviewRoutes from "./routes/review.routes.js";
// import volunteerRoutes from "./routes/volunteer.routes.js";

import volunteerRoutes from "./routes/volunteer.routes.js";
import ngoRoutes from "./routes/ngo.routes.js";
const app = express();


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/events", eventRoutes);
app.use("/reviews", reviewRoutes);

export default app;
