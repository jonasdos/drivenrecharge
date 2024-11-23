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
  number: string,
  carrier: string,
  name: string,
  cpf: string,
  description: string
}

export type verifyPhones = {
  id: number,
  nome: string,
  cpf: string,
  number: string
}[]