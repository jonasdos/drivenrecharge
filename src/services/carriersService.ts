import { Carrier, CustomError, NewCarrier } from "Protocols/types";
import { createNewCarriersRepository, findCarriersByNameRepository, getAllCarriersRepository } from "../respositories/carriersRepositories";

export async function findCarrierService(name: string) {
  
  const resultado: Carrier | undefined = await findCarriersByNameRepository(name)


  return resultado
}

export async function createNewCarriersService (data: NewCarrier) {

  const validaCarrier:Carrier | undefined = await findCarrierService(data.name)


  if(validaCarrier) {
    throw {
      type: "Conflict",
      message: "Essa operadora já esta cadastrada"
  } as CustomError
  } 
  const resultado = await createNewCarriersRepository(data)
  return resultado
}

export async function getAllCarriersService() {
  const resultado = await getAllCarriersRepository()
  return resultado
}