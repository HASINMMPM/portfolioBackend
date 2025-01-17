import express from "express";
import upload from "../middleware/imageMidlleware.js";
import { addProject, getAllProjects } from "../controllers/project.js";
const projectRouter = express();

projectRouter.post("project/add", upload.single("image"), addProject);
projectRouter.get("project/all",getAllProjects);

export default projectRouter;
