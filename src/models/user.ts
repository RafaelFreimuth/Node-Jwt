import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
    
    constructor(nome: string, login: string, senha: string) {
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    @PrimaryGeneratedColumn()
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