
import express from 'express';
import { UserController } from '../controller/UserController';

export const userRoute = express.Router();

userRoute.get('/:login', new UserController().findByLogin);
userRoute.post('/', new UserController().createUser);