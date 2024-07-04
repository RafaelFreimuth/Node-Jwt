import { Request, Response } from "express";
import { AppDataSource } from "../configuration/datasource/data-source";
import User from "../models/user";

export class UserController {

    async findByLogin(request: Request, response: Response) {

        let user = await AppDataSource.getRepository(User).findOneBy({login: request.params.login});

        return response.json(user);
    }
}