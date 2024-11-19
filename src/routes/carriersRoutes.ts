import { Router } from "express"
import { createNewCarrier, getAllCarriersController } from "../controllers/carrierControllers"
import { validateSchema } from "../middlewares/schema-Middleware"
import newCarrierSchema from "../schemas/CarriersSchema"

const carriersRouter = Router()
carriersRouter.post("/carriers", validateSchema(newCarrierSchema), createNewCarrier)
carriersRouter.get("/carriers", getAllCarriersController)
 
export default carriersRouter