import express from 'express';
import { AppDataSource } from './configuration/datasource/data-source';

const app = express();

AppDataSource.initialize().then(() => {
    console.log("sucess database");
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running...");
});
