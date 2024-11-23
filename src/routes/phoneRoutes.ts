import { Router } from "express"
import { validateSchema } from "middlewares/schema-Middleware"
import newPhoneSchema from "schemas/phonesSchema"

const phonesRouter = Router()


phonesRouter.post("/phones", validateSchema(newPhoneSchema), )

