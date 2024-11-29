import { CustomError, NewPhone } from "../Protocols/types";
import { createNewPhoneRepository, findNumbersBycpfRepository, findPhoneByNumber, verifyCarriersByName, verifyPhonesByCpf } from "../respositories/phonesRepositories";


export async function NewPhoneNumberService(data: NewPhone){
const numberExists = await findPhoneByNumber(data.number)

if(numberExists) {
    throw {
        type: "Conflict",
        message: "O telefone já existe na base de dados"
    } as CustomError
}

const userIsValid = await verifyPhonesByCpf(data.cpf)

if(userIsValid.length >= 3) {
    throw {
        type: "Conflict",
        message: "Esse usuário já possui 3 phones cadastrados"
    } as CustomError
}
const carrierIsValid = await verifyCarriersByName(data.carrier)

if(!carrierIsValid) {
    throw {
        type: "Indisponibilidade",
        message: "Operadora não disponível no momento"
    } as CustomError
}
const resultado = createNewPhoneRepository(data)

return resultado 
}
export async function findNumbersBycpfService(cpf: string){
    const resultado = await findNumbersBycpfRepository(cpf)
    return resultado
}