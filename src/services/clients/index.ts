import { Types } from "mongoose";
import clients  from "../../models/schema/client";
import createError from 'http-errors';

export const getAllClients = async () => {
    const data = await clients.find();
    if(!data) throw new createError.NotFound('Clients not found.');
    return data;
};

export const getClientById = async (id: string | Types.ObjectId) => {
    if(!Types.ObjectId.isValid(id))
        throw new createError.BadRequest('Invalid client id');
    const client = await clients.findById(id);
    if(!client) throw new createError.NotFound('Client not found');
    return client;
};