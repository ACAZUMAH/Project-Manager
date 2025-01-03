import { Types } from "mongoose";

declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
};

export interface contextType {
  token?: string | string[];
  user?: any
};

export interface client {
    id?: string
    name?: string
    email?: string
    phone: string
};

export interface projectInput {
    clientId: string;
    name: string;
    description: string;
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
};

export interface project {
    id: string
    clientId: string
    name: string
    description: string
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
    client: client
};

export interface updateInput {
    projectId: string | Types.ObjectId;
    name: string;
    description: string;
    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
};