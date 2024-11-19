import { Request, Response } from "express"
import { carrier, Newcarrier } from "Protocols/types"
import { getAllOperadorasRepository } from "../respositories/carriersRepositories"
import { NewCarrierService } from "../services/carriersService"



export async function createNewCarrier(req: Request, res: Response) {
    const data = req.body as Newcarrier
    const resultado: carrier = NewCarrierService(data)
    res.status(201).send(resultado)
   
  
  
}

export async function getAllCarriersController(req: Request, res: Response) {
  const resultado = await getAllOperadorasRepository()
  res.status(200).send(resultado)
}