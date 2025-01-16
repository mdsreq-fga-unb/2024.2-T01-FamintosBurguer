import { AppDataSource } from '../config/database'
import { Pedido } from '../entity/pedido'

const pedidoRepository = AppDataSource.getRepository(Pedido)

export async function getPedidos() {
  return await pedidoRepository.find()
}

export async function cadastrarPedido(pedidoData: any) {
  const novoPedido = pedidoRepository.create(pedidoData)
  return await pedidoRepository.save(novoPedido)
}

export async function updatePedido(id: number, pedidoData: any) {
  await pedidoRepository.update(id, pedidoData)
  return { message: 'Pedido atualizado com sucesso!' }
}

export async function deletePedido(id: number) {
  await pedidoRepository.delete(id)
  return { message: 'Pedido deletado com sucesso!' }
}

export * from './pedidos';