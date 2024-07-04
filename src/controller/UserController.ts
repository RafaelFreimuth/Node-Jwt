import { Request, Response } from "express";
import { AppDataSource } from "../configuration/datasource/data-source";
import User from "../models/user";
import { CreateUserService } from "../service/User/CreateUserService";

export class UserController {

    async findByLogin(request: Request, response: Response) {

        let user = await AppDataSource.getRepository(User).findOneBy({login: request.params.login});

        return response.json(user);
    }

    async createUser(request: Request, response: Response) {
        const { nome, login, senha } = request.body;

        let userPersisted = await new CreateUserService().criar({nome, login, senha});

        return response.json(userPersisted);
    }
}