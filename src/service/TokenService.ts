import User from "../models/user";
import jsonWebToken from "jsonwebtoken";

export class TokenService {

    private readonly secretKey: string = process.env.SECRET_KEY || "Invalid";
    private readonly oneHourInSeconds = 60 * 60;


    generateTokenJWT(usuario: User) {
        let payload = { login: usuario.login, nome: usuario.nome };

        const jwtGerado = jsonWebToken.sign(payload, this.secretKey, { expiresIn: this.oneHourInSeconds });

        return jwtGerado;
    }

    singIn(token: string): boolean {
        const verifyToken = jsonWebToken.verify(token, this.secretKey);

        return verifyToken instanceof Object && verifyToken.login;
    }
}