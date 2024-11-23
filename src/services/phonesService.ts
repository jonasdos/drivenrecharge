import { CustomError, NewPhone } from "../Protocols/types";
import { findPhoneByNumber, verifyPhonesByCpf } from "../respositories/phonesRepositories";


export async function verifyNewPhoneNumberService(data: NewPhone){
const numberExists = await findPhoneByNumber(data.number)
console.log(numberExists)
if(numberExists) {
    throw {
        type: "Conflict",
        message: "O telefone já existe na base de dados"
    } as CustomError
}

const userIsValid = await verifyPhonesByCpf(data.cpf)
console.log(userIsValid)
if(userIsValid.length >= 3) {
    throw {
        type: "Indisponibilidade",
        message: "Esse usuário já possui 3 phones cadastrados"
    } as CustomError
}

 return true
}