"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const http_errors_1 = __importDefault(require("http-errors"));
const validateProjectDetails = async (data) => {
    const ajv = new ajv_1.default();
    const schema = {
        type: 'object',
        properties: {
            clientId: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            status: { type: 'string' }
        },
        required: ['clientId', 'name', 'description']
    };
    const validate = ajv.compile(schema);
    const isValid = validate(data);
    if (!isValid) {
        const errors = validate.errors?.map(error => {
            return { key: error.instancePath, message: error.message };
        });
        throw new http_errors_1.default.BadRequest(JSON.stringify(errors));
    }
    ;
    return true;
};
exports.default = validateProjectDetails;
