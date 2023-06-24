import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import posts from "./routes/posts.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", posts);
// mongodb connection .. 
// mongoose
//   .set({ strictQuery: false })
//   // will create a collection name blog at thsi address  127.0.0.1
//   .connect("mongodb://127.0.0.1/blog")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

//mongo atlas:
const dbUrl = "mongodb+srv://todo:vXWbHh2cg7BEJgCF@cluster0.hlsglfa.mongodb.net/?retryWrites=true&w=majority"
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  })
const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));


