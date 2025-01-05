import * as services from '../../../services/clients/index'

const Clients = async (_: any, ) => {
    return await services.getAllClients()
};

const Client = async (_: any, { clientId }) => {
  return await services.getClientById(clientId)
};

const AddClient = async (_: any, { input }) => {
  return await services.addNewClient(input);
};

const DeleteClient = async (_:any, { clientId } ) => {
  return services.findClientAndDelete(clientId);
};

const clientResolvers = {
  Query: {
    Clients,
    Client,
  },
  Mutation: {
    AddClient,
    DeleteClient
  }
};


export default clientResolvers;