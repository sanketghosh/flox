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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogoutUser = exports.handleLoginUser = exports.handleRegisterUser = void 0;
require("dotenv/config");
/**
 * @description This function handler will help to register user
 * @access PUBLIC
 * @param req
 * @param res
 */
const handleRegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.handleRegisterUser = handleRegisterUser;
/**
 * @description This function handler will help to login user
 * @access PUBLIC
 * @param req
 * @param res
 */
const handleLoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.handleLoginUser = handleLoginUser;
/**
 * @description This function will help in logout user
 * @access PRIVATE
 * @param req
 * @param res
 */
const handleLogoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.handleLogoutUser = handleLogoutUser;
