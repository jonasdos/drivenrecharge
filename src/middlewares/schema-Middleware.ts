import { NextFunction, Request, Response } from "express"
import { ObjectSchema } from "joi"

export function validateSchema(schema: ObjectSchema) {
  
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, {abortEarly: false})

    if(validation.error) {
      res.status(400).send(validation.error.details.map(detail => detail.message))
      return
    }
    next()
  }
}