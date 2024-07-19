"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware");
const workspace_controller_1 = require("../controllers/workspace.controller");
const router = express_1.default.Router();
/**
 * Create workspace handler
 *
 * @route POST /api/v1/auth/add-workspace
 * @description This route handles workspace creation
 *
 * @requestBody (Object) workspace - Workspace data
 *
 * @requestBodyParam (string) workspace.workspaceTitle - workspace's title
 * @requestBodyParam (string) workspace.workspaceDescription - workspace's description
 *
 * @response 201 - New resource created - user created successfully
 * @response 400 - Bad request - Invalid request or user already exists
 * @response 500 - Internal server error - unexpected error
 *
 */
router.post("/add-workspace", middleware_1.verifToken, workspace_controller_1.handleCreateWorkspace);
exports.default = router;
