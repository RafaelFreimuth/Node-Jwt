import bcrypt from 'bcrypt';
import { AppDataSource } from '../../configuration/datasource/data-source';
import User from '../../models/user';
import { TokenService } from '../TokenService';

type LoginUserType = {
    login: string;
    senha: string
}

export class LoginUserService {
    private readonly userRepository = AppDataSource.getRepository(User);
    
    async execute({ login, senha }: LoginUserType) {
        const usuario = await this.userRepository.findOneBy({ login });

        if (!usuario) {
            return this.getErrorUsuarioOrSenhaInvalida();
        }

        const isSenhaValida = await bcrypt.compare(senha, usuario.senha);

        if (isSenhaValida) {
            return new TokenService().generateTokenJWT(usuario);
        }
        
        this.getErrorUsuarioOrSenhaInvalida();
    }

    private getErrorUsuarioOrSenhaInvalida() {
        throw new Error("Usuário ou senha inválidos");
    }
}