
import express from 'express';
import { UserController } from '../controller/UserController';

export const userRoute = express.Router();

userRoute.post('/', new UserController().createUser);
userRoute.post('/login', new UserController().realizarLogin);