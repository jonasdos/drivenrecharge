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

export async function createNewPhoneRepository(data: NewPhone) {
    const clientData = await db.query(`
        select * 
        from clients 
        where cpf = $1        
        `, [data.cpf])
    console.log("Cliente data: ", clientData.rows[0])
    if(clientData.rowCount == 0) {
        const clientId = await db.query(`
            insert into clients (nome, cpf)
            values($1, $2)
            returning *`, [data.name, data.cpf])
        const carrierId = await db.query(`
            select *
            from carriers
            where name = $1
            `,[data.carrier])
        const resultado = await db.query(`
            insert into phones
            (number, description, id_carrier, id_client)
            values($1, $2, $3, $)
            returning *`, 
            [data.number, 
            data.description, 
            carrierId.rows[0].id, 
            clientId.rows[0].id])
            console.log("se não existia cpf...", resultado.rows[0])
            return resultado.rows[0]
    } else {
        console.log("entrou no false...")
        const carrierId = await db.query(`
            select *
            from carriers
            where name = $1
            `,[data.carrier])
            console.log("coletou ", carrierId.rows[0].id)
        const resultado = await db.query(`
            insert into phones
            (number, description, id_carrier, id_client)
            values($1, $2, $3, $4)
            returning *`, 
            [data.number, 
            data.description, 
            carrierId.rows[0].id, 
            clientData.rows[0].id])
            
            console.log("se não existia cpf...", resultado.rows[0])
            return resultado.rows[0]

    }
}
export async function verifyCarriersByName(carrierName: string) {
    const carrierId = await db.query(`
         select *
         from carriers
         where name = $1`,[carrierName])
         
    return carrierId.rows[0]
}

export async function findNumbersBycpfRepository(cpf: string) {
    const resultado = await db.query(`
        select phones.number, carriers.name, clients.nome 
        from clients
        inner join phones on phones.id_client = clients.id
        inner join carriers on phones.id_carrier = carriers.id
        where clients.cpf = $1
                `,[cpf])
    return resultado.rows
}