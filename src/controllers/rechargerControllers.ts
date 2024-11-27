import { Request, Response } from "express";
import { findRechargesByPhoneService, newRechargeService } from "../services/rechargerService";
import { NewRecharge } from "../Protocols/types";



export async function newRecharger(req: Request, res: Response) {
    try {const data = req.body  as NewRecharge  
    const resultado = await newRechargeService(data)
    
    res.status(201).send(resultado)
}
    catch {
        throw {
            type: "Erro na função",
            message: "Deu ruim newRecharger"
        }
    }
    
}
export async function findRechargesByPhone(req: Request<{ number: string }>, res: Response){
    const data = req.params.number
    console.log("get recargas", data)
    const resultado = await findRechargesByPhoneService(data)
    res.status(200).send(resultado)

}