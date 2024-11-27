import { Request, Response } from "express"
import { NewPhone } from "../Protocols/types"
import { findNumbersBycpfService, NewPhoneNumberService } from "../services/phonesService"

export async function createNewPhone(req: Request, res: Response) {
    const data = req.body as NewPhone  
    const resultado = await NewPhoneNumberService(data)
    res.status(200).send(resultado)
}
export async function findNumbersBycpf(req: Request<{ document: string }>, res: Response) {
    const data = req.params.document
    
    const resultado = await findNumbersBycpfService(data)
    res.status(200).send(resultado)
}