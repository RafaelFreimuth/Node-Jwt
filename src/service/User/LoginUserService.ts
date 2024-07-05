import bcrypt from 'bcrypt';
import { AppDataSource } from '../../configuration/datasource/data-source';
import User from '../../models/user';

type LoginUserType = {
    login: string;
    senha: string
}

export class LoginUserService {
    private readonly userRepository = AppDataSource.getRepository(User);
    
    async execute({ login, senha }: LoginUserType) {
        const usuario = await this.userRepository.findOneBy({ login });

        if (!usuario) {
            throw new Error("Usuário ou senha inválidos.");
        }

        const isSenhaValida = await bcrypt.compare(senha, usuario.senha);

        return isSenhaValida;
    }
}