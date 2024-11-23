import { Request, Response } from "express"
import { NewPhone } from "../Protocols/types"
import { NewPhoneNumberService } from "../services/phonesService"

export async function createNewPhone(req: Request, res: Response) {
    const data = req.body as NewPhone  
    const resultado = await NewPhoneNumberService(data)
    res.status(200).send(resultado)
}