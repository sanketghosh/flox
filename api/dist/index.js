"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const routes_1 = require("./routes");
// initialize the app
const app = (0, express_1.default)();
// the PORT
const PORT = process.env.PORT || 8000;
// basic middlewares
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
// routes
app.use("/api/v1/auth", routes_1.authRoutes);
// app listener
app.listen(PORT, () => {
    console.log(`App server is running on http://localhost:${PORT}`);
});
