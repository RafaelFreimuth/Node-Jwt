import express from 'express';
import { AppDataSource } from './configuration/datasource/data-source';
import { userRoute } from './routes/UserRoute';

const app = express();

app.use(express.json());
app.use('/user', userRoute);

AppDataSource.initialize().then(() => {
    console.log("sucess database");
});

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running...");
});
