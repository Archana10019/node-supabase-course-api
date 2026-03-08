import express from "express";
  
import logger from "../middleware/logger.js";
import coureRoutes from "./course.js";

 const app = express();
app.use(express.json());


app.use(logger);


app.use("/",coureRoutes );


app.listen(4000, () => {
  console.log("Server is running on port 4000");
});