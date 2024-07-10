import { Request, Response } from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../lib/prisma";

/**
 * @description This function handler will help to register user
 * @access PUBLIC
 * @param req
 * @param res
 */

export const handleRegisterUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    let usersExists = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (usersExists) {
      res.status(400).json({
        message: "ERROR! Bad request. Registration not possible.",
      });
    }

    // create user
    const newUser = await db.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
      },
    });

    res.status(201).json({
      message: "SUCCESS! User created",
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR! Internal server error.",
    });
    console.log(error);
  }
};

/**
 * @description This function handler will help to login user
 * @access PUBLIC
 * @param req
 * @param res
 */
export const handleLoginUser = async (req: Request, res: Response) => {};

/**
 * @description This function will help in logout user
 * @access PRIVATE
 * @param req
 * @param res
 */
export const handleLogoutUser = async (req: Request, res: Response) => {};
