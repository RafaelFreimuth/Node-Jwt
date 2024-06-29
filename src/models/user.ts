import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export default class User {
    
    constructor(nome: string, login: string, senha: string) {
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    @PrimaryColumn()
    id: number

    @Column()
    nome: string

    @Column()
    login: string

    @Column()
    senha: string

    @CreateDateColumn()
    dataCriacao: Date
}