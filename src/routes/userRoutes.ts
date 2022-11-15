import express from 'express';
const userRoutes = express.Router();
import UserController from '../controllers/userController';

userRoutes.get('/', UserController.readAllUsers);
userRoutes.post('/register', UserController.registerUser);

export default userRoutes;