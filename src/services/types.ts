declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
}

export interface contextType {
  token?: string | string[];
  user?: any
}

export interface client {
    id: string
    name: string
    email: string
    phone: string
}

export interface project {
    id: string
    clientId: string
    name: string
    description: string
    status: string
    client: client
}