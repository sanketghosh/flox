import { Request, Response, NextFunction } from "express";
import { db } from "../lib/prisma";

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

export const handleCreateWorkspace = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { workspaceTitle, workspaceDescription } = req.body;
  const userId = req.id;

  try {
    if (!userId) {
      res.status(401).json({
        message:
          "Unauthorized, user does not exist probably, if you are not logged in or registered do login or create an account.",
      });
    }

    const newWorkspace = await db.workspace.create({
      data: {
        title: workspaceTitle,
        description: workspaceDescription,
      },
    });

    res.status(201).json({
      workspaceData: newWorkspace,
      message: "SUCCESS! New workspace has been created.",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR! An error occurred during workspace creation, might be internal server error. Try again later.",
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(error);
    }
  }
};
