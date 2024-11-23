import { Request, Response } from "express"
import { NewPhone } from "../Protocols/types"
import { verifyNewPhoneNumberService } from "../services/phonesService"

export async function createNewPhone(req: Request, res: Response) {
    const data = req.body as NewPhone
    const dataIsValid = await verifyNewPhoneNumberService(data)
    console.log(dataIsValid)
    res.status(200).send("Teste finalizado sem erros")
}