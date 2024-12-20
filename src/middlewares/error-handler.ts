import { NextFunction, Request, Response } from "express";
import { CustomError } from "Protocols/types";

export default function errorHandler(
  error: CustomError, 
  req: Request,
  res: Response,
  next: NextFunction
)  {
  if (error.type === "Conflict") {
    res.status(409).send(error.message)
    return   }
  if (error.type === "Not Found")   {
    res.status(404).send(error.message)    
    return }
  if (error.type === "Erro ao criar usuário") { 
     res.status(400).send(error.message)
     return   }
  if (error.type === "Indisponibilidade")  {
    res.status(422).send(error.message)
    return   }
  if (error.type === "DatabaseError")  {
    res.status(400).send(error.message)
    return   }
  if(error.type === "Erro na função")  {
    res.status(400).send(error.message)
    return   }
    console.log(error)
  res.status(500).send("Erro desconhecido")
  return
}