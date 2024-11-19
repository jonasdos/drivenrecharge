import { carrier, Newcarrier } from "Protocols/types";

export function NewCarrierService(data: Newcarrier) {
  console.log(data)
  const resultado: carrier = {id: 12, name: data.name, code: data.code}
  return resultado
}