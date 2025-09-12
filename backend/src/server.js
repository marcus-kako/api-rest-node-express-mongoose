import express from "express";
import routes from "./Routes/routes.js";
import { configDotenv } from "dotenv";
import { main } from "./db/conn.js";
configDotenv();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(routes)

main();

app.listen(PORT, () => {
    console.log(`Servidor Iniciado na Porta ${PORT}`)
})