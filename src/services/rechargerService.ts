import { findNumberForRecharger, findRechargesByPhoneRepository, insertNewRechargeRepository } from "../respositories/rechargesRepositories";
import { CustomError, NewRecharge, NewRechargeData } from "../Protocols/types";

export async function newRechargeService(data: NewRecharge) {
    const verifyNumber: NewRechargeData = await findNumberForRecharger(data.phoneNumber)
    console.log(verifyNumber)
    if(!verifyNumber) {
        throw {
            type: "Not Found",
            message: "Esse número não esta cadastrado"
        } as CustomError
    }
    const resutado = await insertNewRechargeRepository(verifyNumber, data)
    
    return resutado
}

export async function findRechargesByPhoneService(number: string) {
    const resultado = await findRechargesByPhoneRepository(number)
    return resultado
}