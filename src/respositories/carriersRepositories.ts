import { carrier } from "Protocols/types";
import db from "../data/database";

export async function getAllCarriesRepository() {
  try {
    const resultado = await db.query(`SELECT * FROM carriers`)
    return resultado.rows;
  } catch (error) {
   
    throw {
      type: "DatabaseError",
      message: "Erro ao buscar operadoras do banco de dados",
      
    };
  }
}

export async function NewCarriersRepository(carrierData: carrier) {
  const resultado = await db.query(`
    insert 
    `)
}