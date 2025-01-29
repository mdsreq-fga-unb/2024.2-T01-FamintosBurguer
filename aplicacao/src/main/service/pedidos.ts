import { AppDataSource } from '../config/database'
import { Pedido } from '../entity/pedido'
import { Between } from 'typeorm'

const pedidoRepository = AppDataSource.getRepository(Pedido)

export async function getPedidosByDate(startDate: Date, endDate: Date) {
  return await pedidoRepository.find({
    where: {
      data: Between(startDate, endDate),
    },
  });
}

export async function getPedidoByStatus(statusdata: string) {
  return await pedidoRepository.find({
    where: {
      status: statusdata,
    },
  });
}

export async function getPedidosId(PedidoId: any) {
  return await pedidoRepository.find({
    where: {
      id: PedidoId,
    },
  });
}

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