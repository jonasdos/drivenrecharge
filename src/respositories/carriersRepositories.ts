import { carrier, Newcarrier } from "Protocols/types";
import db from "../data/database";

export async function findCarriersByName(name: string ){
  const consultaCarrier = await db.query<carrier>(`select * from carriers where name = $1`, [name])
  const resultado = consultaCarrier.rows[0]
  return resultado
}
export async function createNewCarriersRepository(data: Newcarrier) {
  const {name, code} = data
  const resultado = await db.query<carrier>(`insert into carriers (name, code)
    values($1, $2)
    returning *`, [name, code])
    return resultado.rows[0]
}
export async function getAllCarriersRepository(){
  const resultado = await db.query<carrier>(`select * from carriers`)
  return resultado.rows
}

