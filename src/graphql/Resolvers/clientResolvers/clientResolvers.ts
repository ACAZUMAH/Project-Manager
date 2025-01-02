import * as services from '../../../services/clients/index'

const clients = async (_: any, ) => {
    return await services.getAllClients()
};

const client = async (_: any, { clientId }) => {
  return await services.getClientById(clientId)
};

const clientResolvers = {
  Query: {
    clients,
    client,
  },
};


export default clientResolvers;