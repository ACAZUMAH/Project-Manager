import Ajv from "ajv";
import createError from 'http-errors';
import { projectInput } from "../types";

const validateProjectDetails = async (data: projectInput) => {
    const ajv = new Ajv();

    const schema = {
        type: 'object',
        properties : {
            clientId: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            status: { type: 'string' }
        },
        required: ['clientId', 'name', 'description', 'status']
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

export default validateProjectDetails;