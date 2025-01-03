"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const http_errors_1 = __importDefault(require("http-errors"));
const validateClientData = async (data) => {
    const ajv = new ajv_1.default();
    (0, ajv_formats_1.default)(ajv);
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
    if (!isValid) {
        const errors = validate.errors?.map(error => {
            return { key: error.instancePath, message: error.message };
        });
        throw new http_errors_1.default.BadRequest(JSON.stringify(errors));
    }
    ;
    return true;
};
exports.default = validateClientData;
