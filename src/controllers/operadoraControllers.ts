import { Request, Response } from "express"
import { Newcarrier } from "Protocols/types"
import { getAllOperadorasRepository } from "../respositories/getAllOperadoras"



export async function createNewCarrier(req: Request, res: Response) {
    const data = req.body as Newcarrier
    res.send(data.name)
  
  
}

export async function getAllOperadorasController(req: Request, res: Response) {
  const resultado = await getAllOperadorasRepository()
  res.status(200).send(resultado)
}