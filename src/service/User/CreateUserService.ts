import { AppDataSource } from "../../configuration/datasource/data-source";
import User from "../../models/user";
import bcrypt from 'bcrypt';

type CreateUserType = {
    nome: string;
    login: string;
    senha: string
}

export class CreateUserService {

    private readonly repository = AppDataSource.getRepository(User);

    async criar({ nome, login, senha }: CreateUserType) {

        const senhaCriptografada = this.criptografarSenha(senha);

        const user = new User(nome, login, senhaCriptografada);

        return await this.repository.save(user);
    }

    private criptografarSenha(senha: string): string {
        const salt = bcrypt.genSaltSync(10);

        const senhaCriptorafada = bcrypt.hashSync(senha, salt);

        return senhaCriptorafada;
    }

}