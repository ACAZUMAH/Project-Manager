import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  clientId: { type: mongoose.Types.ObjectId, ref: "clients" },
  name: { type: String },
  description: { type: String },
  status: {
    type: String,
    enum: ["Not_Started", "In_Progress", "Completed"],
    default: "Not_Started",
  },
});

const Project = mongoose.model('projects', projectsSchema);

export default Project;