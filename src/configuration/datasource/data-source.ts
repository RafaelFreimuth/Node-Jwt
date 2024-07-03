import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node-jwt",
    synchronize: true,
    logging: false,
    entities: ["**/models/**/*.js"],
    subscribers: [],
    migrations: []
});