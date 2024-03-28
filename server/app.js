import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan"; // Morgan is a logging tool (middleware) that can be used in HTTP servers implemented using Express & Node.js. It can be used to log requests, errors, and more to the console.
import helmet from "helmet"; // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
import connectDB from "./mongo/connect.js";

// import path from "path";
// import config from "config";

import authRoutes from "./routes/authRoutes.js";
import { signup } from "./controllers/auth.js";

const PORT = 8080;
const app = express();

// middlewere
// app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

// routes defination using router
app.use("/auth", authRoutes);
// app.use("/signup", signup);
// app.use("/products");

const startServer = () => {
  try {
    connectDB("mongodb://127.0.0.1:27017/mern-ecom");
    app.listen(PORT, (req, res) => {
      console.log(`Server is Started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
