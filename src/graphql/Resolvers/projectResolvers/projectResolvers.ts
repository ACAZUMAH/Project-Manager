import * as services from '../../../services/projects/index';
import { getClientById } from '../../../services/clients';
import { project } from "../../../services/types";

const addProject = async (_: any, { input }) => {
    return services.addNewProject(input);
};

const updateProject = async (_:any, { input }) => {
    return services.updateProject(input)
};

const projects = async (_:any) =>{
    return await services.getAllProjects();
};

const project = async (_: any, { projectId } ) => {
    return await services.getProjectById(projectId);
};

const deleteProject = async (_: any, { projectId }) => {
    return services.deleteProject(projectId);
}

const client = async (parent: project) =>{
    return await getClientById(parent.clientId);
};

const projectResolvers = {
    Query: {
        projects,
        project,
    },
    Project: {
        client
    },
    Mutation: {
        addProject,
        updateProject,
        deleteProject
    }
};

export default projectResolvers;