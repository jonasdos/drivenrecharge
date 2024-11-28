
import { sumaryTable, sumaryTables } from "../Protocols/types";
import db from "../data/database";

export async function sumaryRepository(cpf: string){
  const resultado = await db.query<sumaryTable>(`
select 
clients.cpf, 
phones.number, 
phones.description, 
carriers.name,
carriers.code,
recharges.id,
recharges.recharge_date,
recharges.recharge_value
from clients
inner join phones on clients.id = phones.id_client
inner join carriers on phones.id_carrier = carriers.id
inner  join recharges on clients.id = recharges.id_client
where clients.cpf = $1
order by phones.number, recharges.id
    `, [cpf])

return resultado


}