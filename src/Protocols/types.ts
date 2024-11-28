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

export type sumaryData = {
  document: string,
  phones: 
    {
      number: string,
      description: string,
      carrier: {nome: string, code: number },
      recharges: { data: Date, value: number }[]
    }[],
  
}
export type sumaryTable = {
  cpf: string,
  number: string,
  description: string,
  name: string,
  code: number,
  id: number,
  recharge_date: Date,
  recharge_value: number
}
export type sumaryTables = sumaryTable[]