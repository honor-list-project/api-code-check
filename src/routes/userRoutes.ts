import express from 'express';
const userRoutes = express.Router();
import UserController from '../controllers/userController';

userRoutes.get('/', UserController.readAllUsers);
userRoutes.get('/:id', UserController.readOneUser);
userRoutes.post('/register', UserController.registerUser);
userRoutes.put('/', UserController.updateUser);

export default userRoutes;