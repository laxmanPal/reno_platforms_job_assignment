import express from "express";
import { getSchools } from "./controller.js";

const router = express.Router();


router.get("/schools", getSchools );

export default router;
