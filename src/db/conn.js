import mongoose from "mongoose"
import { configDotenv } from "dotenv"

configDotenv();
const KEY = process.env.DB_KEY


export async function main() {
    try {
        await mongoose.connect(`mongodb+srv://markos:${KEY}@cluster0.zy1ynoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('Conectado ao Banco!')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}


// 186.235.238.210