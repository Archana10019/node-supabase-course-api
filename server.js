import express from "express";
import Logger from "./middleware/logger.js";
import courseRoutes from "./routes/course.js";

const app = express();

app.use(express.json());

// middleware
app.use(Logger);

// routes
app.use("/", courseRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});