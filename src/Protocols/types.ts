export type Carrier = {
  id: number,
  name: string,
  code: number
}
export type NewCarrier = Omit<Carrier, "id">

export type CarriersTable = Carrier[]

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
export type PhoneDb = {
  id: number,
  number: string,
  description: string,
  id_carrier: number,
  id_client: number
}
export type PhoneByCpf = {
  id: number,
  name: string,
  cpf: string,
  number: string
} 
export type PhonesByCpf = PhoneByCpf[]

export type ClientDb = {
  id: number,
  name: string,
  cpf: string
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
export type RechargeDb = {
  id: number,
  id_phone: number,
  id_carrier: number, 
  carrier_name: string, 
  id_client: number, 
  recharge_value: number, 
  recharge_date: Date
}
export type RechargePhone = {
  number: string,
  name: string,
  code: number,
  recharhe_value: number,
  recharge_date: Date
}
export type RechargesByPhone = RechargePhone[]

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