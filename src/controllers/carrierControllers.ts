import { Request, Response } from "express"
import { CustomError, Newcarrier } from "Protocols/types"
import { createNewCarriersService, findCarrierService, getAllCarriersService } from "../services/carriersService"

export async function createNewCarrier(req: Request, res: Response) {
    const data = req.body as Newcarrier
    let resultado = await findCarrierService(data)
    if(resultado) {
        throw {
            type: "Conflict",
            message: "Essa operadora já esta cadastrada"
        } 
    }
    if(!resultado) {
        resultado = await createNewCarriersService(data)
    }
    res.status(201).send(resultado) 
}
export async function getAllCarriers(req: Request, res: Response ) {
    const data = await getAllCarriersService()
    res.status(200).send(data)
}