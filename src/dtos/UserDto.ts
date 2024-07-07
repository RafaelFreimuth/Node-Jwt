import User from "../models/user";

export class UserDTO {
    id: number;
    nome: string;
    login: string;
    dataCriacao: Date;

    constructor(user: User) {
        this.id = user.id;
        this.nome = user.nome;
        this.login = user.login;
        this.dataCriacao = user.dataCriacao;
    }
}