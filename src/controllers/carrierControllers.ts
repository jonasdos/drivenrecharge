import { Request, Response } from "express"
import { Carrier, NewCarrier } from "Protocols/types"
import { getAllCarriersService } from "../services/carriersService"
import { createNewCarriersService } from "../services/carriersService"


export async function getAllCarriers(req: Request, res: Response) {
  const resultado = await getAllCarriersService()
  res.status(200).send(resultado)
}
export async function createNewCarrier(req: Request, res: Response) {

    const data = req.body as NewCarrier
    const resultado = await createNewCarriersService(data)
    res.status(201).send(resultado)
}

