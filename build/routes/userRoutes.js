"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = require("../middleware/auth");
userRoutes.get('/', auth_1.auth, userController_1.default.readAllUsers);
userRoutes.get('/:id', userController_1.default.readOneUser);
userRoutes.post('/register', userController_1.default.registerUser);
userRoutes.put('/', auth_1.auth, userController_1.default.updateUser);
userRoutes.delete('/delete/:id', auth_1.auth, userController_1.default.deleteUser);
userRoutes.post('/login', userController_1.default.loginUser);
exports.default = userRoutes;
