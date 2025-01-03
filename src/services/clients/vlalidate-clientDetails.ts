import Ajv from "ajv";
import addFormat from "ajv-formats";
import createError from "http-errors";
import { client } from "../types";

const validateClientData = async (data: client)=> {
    const ajv = new Ajv();
    addFormat(ajv);
    const schema = {
        type: 'object',
        properties: {
            name: { type: 'string' },
            email: { type: 'string', format: "email" },
            phone: { type: 'string' },
        },
        required: ['name', 'email', 'phone']
    };

    const validate = ajv.compile(schema);

    const isValid = validate(data);

    if(!isValid){
        const errors = validate.errors?.map(error => {
            return { key: error.instancePath, message: error.message };
        });
        throw new createError.BadRequest(JSON.stringify(errors));
    };

    return true;
};

export default validateClientData;