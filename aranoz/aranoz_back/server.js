import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import productsRouter from './router/productsRouter.js'
import basketRouter from './router/basketRouter.js'
import { connectDb } from "./config/connect.js";
import cors from 'cors'

configDotenv()

const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(urlencoded({extended:true}))

connectDb()

app.use('/products',productsRouter)
app.use('/basket',basketRouter)

const PORT = 5500

app.listen(PORT,() => {
    console.log('Back-end qaldirildi:',PORT);
})