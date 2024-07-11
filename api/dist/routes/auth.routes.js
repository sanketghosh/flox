"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// PACKAGES
const express_1 = __importDefault(require("express"));
// LOCALS
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = express_1.default.Router();
/**
 * Register user handler
 *
 * @route POST /api/v1/auth/register
 * @description This route handles user registration
 *
 * @requestBody (Object) user - User registration data
 *
 * @requestBodyParam (string) user.firstName - User's first name
 * @requestBodyParam (string) user.lastName - User's last name
 * @requestBodyParam (string | email) user.email - User's email
 * @requestBodyParam (string) user.password - User's password
 *
 * @response 201 - New resource created - user created successfully
 * @response 400 - Bad request - Invalid request or user already exists
 * @response 500 - Internal server error - unexpected error
 *
 */
router.post("/register", auth_controllers_1.handleRegisterUser);
/**
 * Login user handler
 *
 * @route POST /api/v1/auth/login
 * @description This route handles user login
 *
 * @requestBody (Object) user - User login data
 *
 * @requestBodyParam (string | email) user.email - User's email
 * @requestBodyParam (string) user.password - User's password
 *
 * @response 200 - Request success - user logged in successfully
 * @response 401 - Unauthorized - Invalid user credentials
 * @response 500 - Internal server error - unexpected error
 *
 */
router.post("/login", auth_controllers_1.handleLoginUser);
/**
 * Login user handler
 *
 * @route POST /api/v1/auth/logout
 * @description This route handles user logout
 *
 * @response 200 - Request success - user logged out successfully
 * @response 500 - Internal server error - unexpected error
 *
 */
router.post("/logout", auth_controllers_1.handleLogoutUser);
exports.default = router;
