import express from "express";
import upload from "../middleware/imageMidlleware.js";
import { addProject } from "../controllers/project.js";
const projectRouter = express();

projectRouter.post("/add", upload.single("image"), addProject);

export default projectRouter;
