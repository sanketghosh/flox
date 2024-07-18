import express from "express";
import { verifToken } from "../middleware";
import { handleCreateWorkspace } from "../controllers/workspace.controller";

const router = express.Router();

router.post("/create-workspace", verifToken, handleCreateWorkspace);
