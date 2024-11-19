import express, {Request, Response } from "express"
import 'express-async-errors'
import dotenv from "dotenv"
import carriersRouter from "./routes/carriersRoutes"
import errorHandler from "./middlewares/error-handler"
dotenv.config() 
const app = express()
app.use(express.json())
app.get("/health", (req: Request, res: Response) => {res.sendStatus(200)})
app.use(carriersRouter)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
