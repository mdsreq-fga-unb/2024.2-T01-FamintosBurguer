export interface IPedido {
  status: string
  cliente: string
  data: string
  total: number
  items: {
    name: string
    price: string
    quantity: number
    observation: string
  }[]
}
