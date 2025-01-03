import createError from "http-errors";
import { Request, Response, NextFunction } from "express";

const errorHandler = async (err: any, req: Request, res: Response) => {
    if(err instanceof createError.HttpError){
        return;
    };
    return;
};

export default errorHandler;