// PACKAGES
import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// LOCALS
import { db } from "../lib/prisma";
import { User } from "@prisma/client";

/**
 * Registers a new user
 *
 * @description Handles user registration by creating a new user, hashing the user password and generating a JWT token
 *
 * @async
 * @access PUBLIC
 *
 * @returns On registration success it returns user data and a success message.
 *
 * @param {Request} req - The incoming request object
 * @param {Response} res - The outgoing response object
 * @param {NextFunction} next - The next middleware function
 */

export const handleRegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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
        password: hashedPassword,
      },
    });

    const jwtToken = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      },
    );

    // token expiring age (max token age)
    const tokenExpAge = 1000 * 60 * 60 * 24 * 7;

    const { password: userPassword, ...userDetails } = newUser;
    res
      .cookie("auth_token", jwtToken, {
        httpOnly: true,
        maxAge: tokenExpAge,
        secure: process.env.NODE_ENV === "production",
      })
      .status(201)
      .json({
        user: userDetails,
        message: "SUCCESS! User has been registered.",
      });
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

/**
 * Login to an account
 *
 * @description Handles user login by finding user email, matching password, throws an error if user does not exist or password not matches.
 *
 * @async
 * @access PUBLIC
 *
 * @returns On login success it returns existing user data and a success message.
 *
 * @param {Request} req - The incoming request object
 * @param {Response} res - The outgoing response object
 * @param {NextFunction} next - The next middleware function
 */

export const handleLoginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  try {
    // find user
    const findExistingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    // if user does not exist
    if (!findExistingUser) {
      res.status(401).json({
        message: "ERROR! Unauthorized. Please check your credentials.",
      });
    }

    // assert that existing user is not null
    const user = findExistingUser as User;

    // start the login process  : check if password matches with the password in the DB, already if email (user) exists checked.

    let comparePassword = await bcrypt.compare(password, user.password);

    // if password not matches throw an error
    if (!comparePassword) {
      res.status(401).json({
        message: "ERROR! Unauthorized. Please check your credentials.",
      });
    }

    // token expiring age (max token age)
    const tokenExpAge = 1000 * 60 * 60 * 24 * 7;

    // sign JSON web token
    const jwtToken = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: tokenExpAge,
      },
    );

    // login data we are sending back
    let { password: userPassword, ...userDetails } = user;

    // set cookie responses
    res
      .cookie("auth_token", jwtToken, {
        httpOnly: true,
        maxAge: tokenExpAge,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({
        user: userDetails,
        message: "SUCCESS! Logged in to your account.",
      });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR! An error occurred during login, might be internal server error. Try again later.",
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(error);
    }
  }
};

/**
 * Logout of an account
 *
 * @description Handles user logout by clearing cookie, sets the cookie to expire immediately for browsers that don't support "clearCookie", throws an error if anything goes wrong.
 *
 * @async
 * @access PRIVATE
 *
 * @returns On logout success it sends a response message
 *
 * @param {Response} res - The outgoing response object
 * @param {NextFunction} next - The next middleware function
 */

export const handleLogoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.clearCookie("auth_token");
    res.cookie("auth_token", "", {
      expires: new Date(0),
    });
    res.status(200).json({
      message: "SUCCESS! Logout success.",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR! An error occurred during logout, might be internal server error. Try again later.",
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(error);
    }
  }
};
