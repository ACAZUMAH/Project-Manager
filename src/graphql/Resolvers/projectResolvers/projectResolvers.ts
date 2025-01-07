import * as services from '../../../services/projects/index';
import { getClientById } from '../../../services/clients';
import { project } from "../../../services/types";

const AddProject = async (_: any, { input }) => {
    return services.addNewProject(input);
};

const UpdateProject = async (_:any, { input }) => {
    return services.updateProject(input)
};

const Projects = async (_:any) =>{
    return await services.getAllProjects();
};

const Project = async (_: any, { projectId } ) => {
    return await services.getProjectById(projectId);
};

const DeleteProject = async (_: any, { projectId }) => {
    return services.deleteProject(projectId);
};

const client = async (parent: project) =>{
    return await getClientById(parent.clientId);
};

const projectResolvers = {
    Query: {
        Projects,
        Project,
    },

    Project: {
        client
    },

    Mutation: {
        AddProject,
        UpdateProject,
        DeleteProject
    }
};

export default projectResolvers;