import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

// initialize the app
const app = express();

// the PORT
const PORT = process.env.PORT || 8000;

// basic middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// app listener
app.listen(PORT, () => {
  console.log(`App server is running on http://localhost:${PORT}`);
});
