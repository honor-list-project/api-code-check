import express from 'express';
const userRoutes = express.Router();
import UserController from '../controllers/userController';
import { auth } from '../middleware/auth';

userRoutes.get('/', auth, UserController.readAllUsers);
userRoutes.get('/:id', UserController.readOneUser);
userRoutes.post('/register', UserController.registerUser);
userRoutes.put('/', auth, UserController.updateUser);
userRoutes.delete('/delete/:id', auth, UserController.deleteUser);
userRoutes.post('/login', UserController.loginUser);

export default userRoutes;