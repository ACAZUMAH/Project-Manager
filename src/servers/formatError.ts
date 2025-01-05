import createError from "http-errors";
import { unwrapResolverError } from "@apollo/server/errors";
import { GraphQLError } from "graphql";

const STATUS_CODES = new Map<number, string>([
    [404, "NOT FOUND"],
    [400, "BAD REQUEST"],
    [500, "INTERNAL SERVER ERROR"]  
])

const formatError = (formattedError: GraphQLError, error: unknown) => {
    console.log(error);
    const originalError = unwrapResolverError(error);
    if(!(originalError instanceof createError.HttpError)){
        return formattedError;
    };
    return {
        ...formattedError,
        message: originalError.message,
        extensions: {
            ...formattedError.extensions,
            code: STATUS_CODES.get(originalError.statusCode)
        }
    };
};

export default formatError;