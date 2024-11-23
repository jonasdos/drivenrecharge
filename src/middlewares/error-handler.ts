import { NextFunction, Request, Response  } from "express"
import { Error } from "../Protocols/types"
export default function errorHandler(error:  Error, req: Request, res: Response, next: NextFunction): Response<any> {
 
  if (error.type === "Conflict") return res.status(409).send(error.message)
  if (error.type === "Not Found") return res.status(404).send(error.message)
  if (error.type === "Erro ao criar usuário") return res.status(400).send(error.message)
  if (error.type === "Indisponibilidade") return res.status(422).send(error.message)
  if(error.type === "DatabaseError") return res.status(400).send(error.message)
  return res.status(500).send("Erro desconhecido")
}