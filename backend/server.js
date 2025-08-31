import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import schoolsRouter from "./router.js";

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/", schoolsRouter);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));