import { Types } from "mongoose";
import clients  from "../../models/schema/client";
import createError from 'http-errors';
import { client } from "../types";
import validateClientData from "./vlalidate-clientDetails";

export const addNewClient = async (input: client) => {
    await validateClientData(input);
    const newClient = await clients.create({
        ...input
    });
    if(!newClient) 
        throw new createError.InternalServerError('Unable create new client');
    return newClient;
};

export const getAllClients = async () => {
    const data = await clients.find();
    if(data.length === 0) 
        throw new createError.NotFound('Clients not found.');
    return data;
};

export const getClientById = async (id: string | Types.ObjectId) => {
    if(!Types.ObjectId.isValid(id))
        throw new createError.BadRequest('Invalid client id');
    const client = await clients.findById(id);
    if(!client) throw new createError.NotFound('Client not found');
    return client;
};

export const findClientAndDelete = async (id: string | Types.ObjectId) => {
    if (!Types.ObjectId.isValid(id))
      throw new createError.BadRequest("Invalid client id");
    const deleted = await clients.findByIdAndDelete(id);
    if(!deleted)
        throw new createError.NotFound("Client not found");
    return deleted;
};