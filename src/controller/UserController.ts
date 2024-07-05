import { Request, Response } from "express";
import { CreateUserService } from "../service/User/CreateUserService";
import { LoginUserService } from "../service/User/LoginUserService";

export class UserController {
    
    async realizarLogin(request: Request, response: Response) {
        const { login, senha } = request.body;

        let isRealizouLogin = await new LoginUserService().execute({login, senha});

        return response.send(isRealizouLogin);
    }

    async createUser(request: Request, response: Response) {
        const { nome, login, senha } = request.body;

        let userPersisted = await new CreateUserService().criar({nome, login, senha});

        return response.json(userPersisted);
    }
}