import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  liveUrl: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
