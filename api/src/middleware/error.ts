import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

/**
 * Centralized error handler for the application.
 *
 * Handles errors that occur in route handlers and provides a standardized response.
 *
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */

export const errorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
  err: Error
) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(err);
  }

  const statusCode = (err as any).statusCode || 500;
  const message =
    err.message ||
    "ERROR! An error occurred, might be internal server error. Try again later.";

  res.status(statusCode).json({
    error: message,
    message: message,
    success: false,
    status: statusCode,
    stack: process.env.NODE_ENV !== "production" ? err.stack : {},
  });
};
