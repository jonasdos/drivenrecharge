import { Router } from "express"
import { findRechargesByPhone, newRecharger } from "../controllers/rechargerControllers"
import { validateSchema } from "../middlewares/schema-Middleware"
import newRechargerSchema from "../schemas/rechargerSchema"

const rechargerRouter = Router()

rechargerRouter.post("/recharges", validateSchema(newRechargerSchema), newRecharger)
rechargerRouter.get("/recharges/:number", findRechargesByPhone)



export default rechargerRouter