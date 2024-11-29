import db from "../data/database";
import { Carrier, ClientDb, NewPhone, PhoneDb, PhonesByCpf } from "../Protocols/types";


export async function findPhoneByNumber(number: string) {
    const resultado = await db.query<PhoneDb>(`
        select * from phones 
        where number = $1
        `, [number])
    return resultado.rows[0]

}
export async function verifyPhonesByCpf(cpf: string) {
    const resultado = await db.query<PhonesByCpf>(`
        select clients.id, clients.name, clients.cpf, phones.number
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
   
    if(clientData.rowCount == 0) {
        const clientId = await db.query<ClientDb>(`
            insert into clients (name, cpf)
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
            values($1, $2, $3, $4)
            returning *`, 
            [data.number, 
            data.description, 
            carrierId.rows[0].id, 
            clientId.rows[0].id])
            
            return resultado.rows[0]
    } else {
       
        const carrierId = await db.query<Carrier>(`
            select *
            from carriers
            where name = $1
            `,[data.carrier])
           
        const resultado = await db.query<PhoneDb>(`
            insert into phones
            (number, description, id_carrier, id_client)
            values($1, $2, $3, $4)
            returning *`, 
            [data.number, 
            data.description, 
            carrierId.rows[0].id, 
            clientData.rows[0].id])
            
           
            return resultado.rows[0]

    }
}
export async function verifyCarriersByName(carrierName: string) {
    const carrierId = await db.query<Carrier>(`
         select *
         from carriers
         where name = $1`,[carrierName])
         
    return carrierId.rows[0]
}

export async function findNumbersBycpfRepository(cpf: string) {
    const resultado = await db.query(`
        select phones.number, carriers.name, clients.name 
        from clients
        inner join phones on phones.id_client = clients.id
        inner join carriers on phones.id_carrier = carriers.id
        where clients.cpf = $1
                `,[cpf])
    return resultado.rows
}