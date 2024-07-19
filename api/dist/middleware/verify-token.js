"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const verifToken = (req, res, next) => {
    const authToken = req.cookies.auth_token;
    if (!authToken) {
        res.status(401).json({
            message: "Not authenticated or user not found.",
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(authToken, process.env.JWT_SECRET_KEY);
        req.id = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
};
exports.verifToken = verifToken;
