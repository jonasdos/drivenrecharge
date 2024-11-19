import db from "../data/database";

export async function getAllOperadorasRepository() {
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