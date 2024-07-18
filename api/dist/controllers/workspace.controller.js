"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreateWorkspace = void 0;
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
const handleCreateWorkspace = (req, res, next) => {
    const { workspaceTitle, workspaceDescription } = req.body;
    try {
    }
    catch (error) {
        res.status(500).json({
            message: "ERROR! An error occurred during register, might be internal server error. Try again later.",
        });
        if (process.env.NODE_ENV !== "production") {
            console.log(error);
        }
    }
};
exports.handleCreateWorkspace = handleCreateWorkspace;
