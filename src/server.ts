import express from 'express';

const app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running...");
});
