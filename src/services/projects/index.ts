import { Types } from "mongoose";
import projects  from "../../models/schema/project";
import createError from 'http-errors';
import { projectInput, updateInput } from "../types";
import validateProjectDetails from "./validate-projectDetails";

export const addNewProject = async (input: projectInput) => {
    await validateProjectDetails(input);
    const project = await projects.create({ ...input })
    if(!project) 
        throw new createError.InternalServerError('Unable to add project')
    return project;
};

export const getAllProjects = async () => {
    const data = await projects.find();
    if(!data) throw new createError.NotFound('Projects not found');
    return data;
};

export const getProjectById = async (id: string | Types.ObjectId) => {
    if(!Types.ObjectId.isValid(id)) 
        throw new createError.BadRequest('Invalid project id');
    const project = await projects.findById(id);
    if(!project) throw new createError.NotFound('project not found');
    return project;
};

export const updateProject = async (input: updateInput) => {
    if(!Types.ObjectId.isValid(input.projectId))
        throw new createError.BadRequest("Invalid project id");
    const update = await projects.findByIdAndUpdate(
        { _id: input.projectId },
        { ...input },
        { new: true }
    );
    if(!update) throw new createError.NotFound('Unable to update product');
    return update;
};

export const deleteProject = async (id: string | Types.ObjectId) => {
    if (!Types.ObjectId.isValid(id))
        throw new createError.BadRequest("Invalid project id");
    const project = await projects.findByIdAndDelete(id);
    if (!project) throw new createError.NotFound("project not found");
    return project;
};