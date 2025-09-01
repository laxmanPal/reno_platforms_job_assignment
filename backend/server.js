import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import schoolsRouter from "./router.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/schoolImages", express.static("schoolImages"));
app.use("/api/", schoolsRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));