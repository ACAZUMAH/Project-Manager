import * as services from '../../../services/clients/index'

const clients = async (_: any, ) => {
    return await services.getAllClients()
};

const client = async (_: any, { clientId }) => {
  return await services.getClientById(clientId)
};

const addClient = async (_: any, { input }) => {
  return await services.addNewClient(input);
};

const deleteClient = async (_:any, { cliendId } ) => {
  return services.findClientAndDelete(cliendId);
};

const clientResolvers = {
  Query: {
    clients,
    client,
  },
  Mutation: {
    addClient,
    deleteClient
  }
};


export default clientResolvers;