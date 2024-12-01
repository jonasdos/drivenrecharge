import { Carrier, CarriersTable, NewCarrier } from "../Protocols/types";
import prisma from "../data/database";
import db from "../data/database";

export async function findCarriersByNameRepository(name: string ){

  const resultado = await prisma.carriers.findMany({
    where: {
      name: name
    }
  })

  return resultado
}
export async function createNewCarriersRepository(data: NewCarrier) {
  const {name, code} = data
  const resultado = await prisma.carriers.create({
    data: {
      name: name,
      code: code
    }
  })
    return resultado
}
export async function getAllCarriersRepository(){
  const resultado = await prisma.carriers.findMany({
    
  })
  return resultado
}

