import { NewRecharge, NewRechargeData } from "Protocols/types";
import db from "../data/database";


export async function findNumberForRecharger(number: string) {
    const resultado = await db.query(`
        select * 
        from phones
        where number = $1 `, [number])
    return resultado.rows[0]

}

export async function insertNewRechargeRepository(data: NewRechargeData, values: NewRecharge) {
    const carrierName = await db.query(`
        select * 
        from carriers
        where id =  $1`, [data.id_carrier])

    const resultado =  await db.query(`
        insert into recharges
        (id_phone, id_carrier, carrier_name, id_client, recharge_value, recharge_date)
        values($1, $2, $3, $4, $5, $6)
        returning *`,
    [data.id, data.id_carrier, carrierName.rows[0].name, data.id_client, values.rechargeValue, new Date()])
    return resultado.rows[0]
}

export async function findRechargesByPhoneRepository(number: string) {
    console.log("Chamou repository recharges", number)
    const resultado = await db.query(`
        select phones.number, carriers.name, carriers.code, clients.nome,
recharges.recharge_value, recharges.recharge_date
from phones
inner join carriers on phones.id_carrier = carriers.id
inner join clients on phones.id_client = clients.id
inner join recharges on phones.id = recharges.id_phone
where phones.number = $1
                `,[number])
 
    return resultado.rows
}