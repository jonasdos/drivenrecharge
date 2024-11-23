import db from "../data/database";
import { NewPhone, verifyPhones } from "../Protocols/types";


export async function findPhoneByNumber(number: string) {
    const resultado = await db.query(`
        select * from phones 
        where number = $1
        `, [number])
    return resultado.rows[0]

}
export async function verifyPhonesByCpf(cpf: string) {
    const resultado = await db.query(`
        select clients.id, clients.nome, clients.cpf, phones.number
        from clients
        inner join 
        phones
        on clients.id = phones.id_client
        where clients.cpf = $1`, [cpf])
        return resultado.rows
}