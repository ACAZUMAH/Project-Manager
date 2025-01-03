import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  clientId: { type: mongoose.Types.ObjectId, ref: "clients" },
  name: { type: String },
  description: { type: String },
  status: { type: String, enum: ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"], default: "NOT_STARTED" },
});

const Project = mongoose.model('projects', projectsSchema);

export default Project;