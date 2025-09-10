import express from "express";
import routes from "./Routes/routes.js";
import { configDotenv } from "dotenv";
configDotenv();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor Iniciado na Porta ${PORT}`)
})