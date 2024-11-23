import db from "data/database";


export async function findPhoneByNumber(number: string) {
    const resultado = await db.query(`
        select * from phones 
        where number = $1
        `, [number])
    return resultado.rows[0]

}