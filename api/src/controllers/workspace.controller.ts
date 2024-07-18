import { Request, Response, NextFunction } from "express";

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

export const handleCreateWorkspace = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { workspaceTitle, workspaceDescription } = req.body;

  try {
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR! An error occurred during register, might be internal server error. Try again later.",
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(error);
    }
  }
};
