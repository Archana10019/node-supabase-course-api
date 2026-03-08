import express from "express";
  import Logger from "../middleware/Logger.js";
import coureRoutes from "./routes/course.js";

 const app = express();
app.use(express.json());
app.use(Logger);


app.use("/",coureRoutes );


app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
