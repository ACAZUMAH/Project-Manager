import { projects, clients } from "../../../models/schema/sample";
import { project } from "../../../services/types";

const Projects = (_:any) => {
    return projects;
};

const project = (_: any, { projectId } ) => {
    return projects.find(project => project.id === projectId);
};

const client = (project: project, ) => {
    return clients.find(client => client.id === project.clientId);
};

const projectResolvers = {
    Query: {
        Projects,
        project,
    },
    Project: {
        client
    }
};

export default projectResolvers;