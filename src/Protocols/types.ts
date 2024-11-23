export type Newcarrier = {
  name: string,
  code: number
}
export type carrier = {
  id: number,
  name: string,
  code: number
}
export type Error = {
  type: string,
  message: string
} & globalThis.Error

export type NewPhone = {
  number: string,
  carrier: string,
  name: string,
  cpf: string,
  description: string
}