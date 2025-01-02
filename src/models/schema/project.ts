import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
    cliendId: { type: mongoose.Types.ObjectId, ref: 'clients' },
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ['not started', 'in progress', 'completed'] }
});

const Project = mongoose.model('projects', projectsSchema);

export default Project;