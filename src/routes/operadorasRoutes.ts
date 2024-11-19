import { Router } from "express"
import { createNewCarrier, getAllOperadorasController } from "../controllers/operadoraControllers"
import { validateSchema } from "../middlewares/schema-Middleware"
import operadoraSchema from "../schemas/operadora"
const carriersRouter = Router()
carriersRouter.post("/operadora", validateSchema(operadoraSchema), createNewCarrier)
carriersRouter.get("/operadora", getAllOperadorasController)
 
export default carriersRouter