"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = express_1.default.Router();
/**
 *
 */
router.post("/register", auth_controllers_1.handleRegisterUser);
/**
 *
 */
router.post("/login", auth_controllers_1.handleLoginUser);
/**
 *
 */
router.post("/logout", auth_controllers_1.handleLogoutUser);
exports.default = router;
