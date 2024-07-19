import express from "express";
import { verifToken } from "../middleware";
import { handleCreateWorkspace } from "../controllers/workspace.controller";

const router = express.Router();

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

router.post("/add-workspace", verifToken, handleCreateWorkspace);

export default router;
