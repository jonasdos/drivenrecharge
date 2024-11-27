import express, {Request, Response } from "express"
import 'express-async-errors'
import dotenv from "dotenv"
import carriersRouter from "./routes/carriersRoutes"
import phonesRouter from "./routes/phoneRoutes"
import errorHandler from "./middlewares/error-handler"
import rechargerRouter from "./routes/rechargerRoutes"


dotenv.config() 
const app = express()
app.use(express.json())
app.get("/health", (req: Request, res: Response) => {res.sendStatus(200)})
app.use(carriersRouter)
app.use(phonesRouter)
app.use(rechargerRouter)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
