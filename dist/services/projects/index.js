"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProjectById = exports.getAllProjects = exports.addNewProject = void 0;
const mongoose_1 = require("mongoose");
const project_1 = __importDefault(require("../../models/schema/project"));
const http_errors_1 = __importDefault(require("http-errors"));
const validate_projectDetails_1 = __importDefault(require("./validate-projectDetails"));
const addNewProject = async (input) => {
    await (0, validate_projectDetails_1.default)(input);
    const project = await project_1.default.create({ ...input });
    if (!project)
        throw new http_errors_1.default.InternalServerError('Unable to add project');
    return project;
};
exports.addNewProject = addNewProject;
const getAllProjects = async () => {
    const data = await project_1.default.find();
    if (!data)
        throw new http_errors_1.default.NotFound('Projects not found');
    return data;
};
exports.getAllProjects = getAllProjects;
const getProjectById = async (id) => {
    if (!mongoose_1.Types.ObjectId.isValid(id))
        throw new http_errors_1.default.BadRequest('Invalid project id');
    const project = await project_1.default.findById(id);
    if (!project)
        throw new http_errors_1.default.NotFound('project not found');
    return project;
};
exports.getProjectById = getProjectById;
const updateProject = async (input) => {
    if (!mongoose_1.Types.ObjectId.isValid(input.projectId))
        throw new http_errors_1.default.BadRequest("Invalid project id");
    const update = await project_1.default.findByIdAndUpdate({ _id: input.projectId }, { ...input }, { new: true });
    if (!update)
        throw new http_errors_1.default.NotFound('Unable to update product');
    return update;
};
exports.updateProject = updateProject;
const deleteProject = async (id) => {
    if (!mongoose_1.Types.ObjectId.isValid(id))
        throw new http_errors_1.default.BadRequest("Invalid project id");
    const project = await project_1.default.findByIdAndDelete(id);
    if (!project)
        throw new http_errors_1.default.NotFound("project not found");
    return project;
};
exports.deleteProject = deleteProject;
