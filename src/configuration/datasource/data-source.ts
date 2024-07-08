import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT || "8080"),
    username: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["**/models/**/*.js"],
    subscribers: [],
    migrations: []
});