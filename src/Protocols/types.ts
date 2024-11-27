export type Newcarrier = {
  name: string,
  code: number
}
export type carrier = {
  id: number,
  name: string,
  code: number
}
export type CustomError = {
  type: string,
  message: string
} 

export type NewPhone = {
  name: string,
  number: string,
  carrier: string,
  cpf: string,
  description: string
}

export type verifyPhones = {
  id: number,
  nome: string,
  cpf: string,
  number: string
}

export type NewRecharge = {
  phoneNumber: string,
  rechargeValue: number,
  
}
export type NewRechargeData = {
  id: number,
  number: string,
  description: string,
  id_carrier: number,
  id_client: number
}