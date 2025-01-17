import { cloudinaryInstance } from "../connecters/cloudinary.js";
import Project from "../models/projectModel.js";

// add  a project
 const addProject = async (req, res) => {
  console.log("try to add a project");
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image provided" });
    }

    const CloudResult = await cloudinaryInstance.uploader.upload(req.file.path);
    console.log("cloud result: ", CloudResult);

    const { title, description, liveUrl, githubUrl } = req.body;
    const newProject = new Project({
      title,
      description,
      liveUrl,
      githubUrl,
      image: CloudResult.url,
    });

    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ message: error.message });
  }
};

// get all projects

 const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).json({ message: error.message });
  }
};
export {
  addProject,
  getAllProjects,
}