"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async (url) => {
    try {
        return await mongoose_1.default.connect(url, {});
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    ;
};
exports.default = connectDB;
