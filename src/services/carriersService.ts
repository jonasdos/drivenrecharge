import { carrier, Newcarrier } from "Protocols/types";
import { createNewCarriersRepository, findCarriersByName, getAllCarriersRepository } from "../respositories/carriersRepositories";

export async function findCarrierService(data: Newcarrier) {
  
  let resultado = await findCarriersByName(data.name)


  return resultado
}

export async function createNewCarriersService (data: Newcarrier) {
  const resultado = await createNewCarriersRepository(data)
  return resultado
}

export async function getAllCarriersService() {
  const resultado = await getAllCarriersRepository()
  return resultado
}