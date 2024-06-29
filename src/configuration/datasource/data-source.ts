import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node-jwt",
    synchronize: false,
    logging: true,
    entities: ["/dist/models/**/*.js"],
    subscribers: [],
    migrations: []
});