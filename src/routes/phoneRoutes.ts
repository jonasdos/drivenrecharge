import { Router } from "express"
import { createNewPhone, findNumbersBycpf } from "../controllers/phonesControllers"
import { validateSchema } from "../middlewares/schema-Middleware"
import newPhoneSchema from "../schemas/phonesSchema"

const phonesRouter = Router()


phonesRouter.post("/phones", validateSchema(newPhoneSchema), createNewPhone)
phonesRouter.get("/phones/:document", findNumbersBycpf)
export default phonesRouter
