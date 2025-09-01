import express from "express";
import { addSchool, getSchools } from "./controller.js";
import { upload } from "./middleware.js";

const router = express.Router();


router.get("/schools", getSchools);

router.post("/add-school", upload.single("image"), addSchool)

export default router;
