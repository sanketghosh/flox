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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogoutUser = exports.handleLoginUser = exports.handleRegisterUser = void 0;
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// LOCALS
const prisma_1 = require("../lib/prisma");
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
const handleRegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    try {
        // hash password
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        let usersExists = yield prisma_1.db.user.findUnique({
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
        const newUser = yield prisma_1.db.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashPassword,
            },
        });
        // const { password: userPassword, ...userDetails } = newUser;
        const jwtToken = jsonwebtoken_1.default.sign({ userId: newUser.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
        // token expiring age (max token age)
        const tokenExpAge = 1000 * 60 * 60 * 24 * 7;
        res
            .cookie("auth_token", jwtToken, {
            httpOnly: true,
            maxAge: tokenExpAge,
            secure: process.env.NODE_ENV === "production",
        })
            .status(201)
            .json({
            // user: userDetails,
            message: "SUCCESS! User has been registered.",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "ERROR! An error occurred during register, might be internal server error. Try again later.",
        });
        if (process.env.NODE_ENV !== "production") {
            console.log(error);
        }
    }
});
exports.handleRegisterUser = handleRegisterUser;
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
const handleLoginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // find user
        const findExistingUser = yield prisma_1.db.user.findUnique({
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
        const user = findExistingUser;
        // start the login process  : check if password matches with the password in the DB, already if email (user) exists checked.
        let comparePassword = yield bcrypt_1.default.compare(password, user.password);
        // if password not matches throw an error
        if (!comparePassword) {
            res.status(401).json({
                message: "ERROR! Unauthorized. Please check your credentials.",
            });
        }
        // token expiring age (max token age)
        const tokenExpAge = 1000 * 60 * 60 * 24 * 7;
        // sign JSON web token
        const jwtToken = jsonwebtoken_1.default.sign({
            id: user.id,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: tokenExpAge,
        });
        // login data we are sending back
        let { password: userPassword } = user, userDetails = __rest(user, ["password"]);
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
    }
    catch (error) {
        res.status(500).json({
            message: "ERROR! An error occurred during login, might be internal server error. Try again later.",
        });
        if (process.env.NODE_ENV !== "production") {
            console.log(error);
        }
    }
});
exports.handleLoginUser = handleLoginUser;
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
const handleLogoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("auth_token");
        res.cookie("auth_token", "", {
            expires: new Date(0),
        });
        res.status(200).json({
            message: "SUCCESS! Logout success.",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "ERROR! An error occurred during logout, might be internal server error. Try again later.",
        });
        if (process.env.NODE_ENV !== "production") {
            console.log(error);
        }
    }
});
exports.handleLogoutUser = handleLogoutUser;
