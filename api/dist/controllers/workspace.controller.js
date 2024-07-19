"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateWorkspace = void 0;
const prisma_1 = require("../lib/prisma");
/**
 * Creates a new workspace
 *
 * @description Handles workspace creation, takes workspace data from request body and creates a new workspace
 *
 * @async
 * @access PUBLIC
 *
 * @returns On creating workspace success it returns workspace data and a success message.
 *
 * @param {Request} req - The incoming request object
 * @param {Response} res - The outgoing response object
 * @param {NextFunction} next - The next middleware function
 */
const handleCreateWorkspace = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { workspaceTitle, workspaceDescription } = req.body;
    const userId = req.id;
    try {
        if (!userId) {
            res.status(401).json({
                message: "Unauthorized, user does not exist probably, if you are not logged in or registered do login or create an account.",
            });
        }
        const newWorkspace = yield prisma_1.db.workspace.create({
            data: {
                title: workspaceTitle,
                description: workspaceDescription,
            },
        });
        res.status(201).json({
            workspaceData: newWorkspace,
            message: "SUCCESS! New workspace has been created.",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "ERROR! An error occurred during workspace creation, might be internal server error. Try again later.",
        });
        if (process.env.NODE_ENV !== "production") {
            console.log(error);
        }
    }
});
exports.handleCreateWorkspace = handleCreateWorkspace;
