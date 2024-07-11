// PACKAGES
import express from "express";

// LOCALS
import {
  handleLoginUser,
  handleLogoutUser,
  handleRegisterUser,
} from "../controllers/auth.controllers";

const router = express.Router();

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

router.post("/register", handleRegisterUser);

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

router.post("/login", handleLoginUser);

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

router.post("/logout", handleLogoutUser);

export default router;
