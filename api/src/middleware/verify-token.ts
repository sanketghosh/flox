import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

declare global {
  namespace Express {
    interface Request {
      id: string;
    }
  }
}

export const verifToken = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.cookies["auth_token"];

  if (!authToken) {
    return res.status(401).json({
      message: "Not authenticated or user not found.",
    });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY as string);

    req.id = (decoded as JwtPayload).id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
