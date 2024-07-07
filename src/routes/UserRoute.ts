
import express from 'express';
import { UserController } from '../controller/UserController';
import AuthenticatedMiddleware from '../middlewares/AuthenticatedMiddleware';

export const userRoute = express.Router();

userRoute.post('/', AuthenticatedMiddleware.execute, new UserController().createUser);
userRoute.post('/login', new UserController().realizarLogin);