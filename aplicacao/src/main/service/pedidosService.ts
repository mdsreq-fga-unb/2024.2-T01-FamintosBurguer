import { AppDataSource } from '../config/database'
import { Pedido } from '../entity/pedido'
import { Between, Repository } from 'typeorm'
import { IPedido } from '../interface/IPedido'
import { ItensPedido } from '../entity/itenspedido'

export default class PedidosService {
  private repository: Repository<Pedido>

  constructor() {
    this.repository = AppDataSource.getRepository(Pedido)
  }

  async postPedido(pedido: IPedido): Promise<Pedido> {
    try {
      const itemRepo = AppDataSource.getRepository(ItensPedido)
      const dadosPedido = new Pedido()

      dadosPedido.cliente = pedido.cliente
      dadosPedido.data = new Date(pedido.data)
      dadosPedido.total = pedido.total
      dadosPedido.status = pedido.status

      const savedPedido = await this.repository.save(dadosPedido)

      for (const item of pedido.items) {
        const dadosItem = itemRepo.create({
          name: item.name,
          preco: Number(item.price),
          quantidade: item.quantity,
          observacao: item.observation,
          pedido: savedPedido
        })
        await itemRepo.save(dadosItem)
      }

      return savedPedido
    } catch (error) {
      throw new Error(`Erro ao salvar pedido: ${error}`)
    }
  }

  async getPedidosByDate(startDate: Date, endDate: Date): Promise<Pedido[]> {
    return this.repository.find({
      where: {
        data: Between(startDate, endDate)
      }
    })
  }

  async getPedidoByStatus(statusdata: string): Promise<Pedido[]> {
    return this.repository.find({
      where: {
        status: statusdata
      }
    })
  }

  async getPedidosId(PedidoId: number): Promise<Pedido[]> {
    return this.repository.find({
      where: {
        id: PedidoId
      }
    })
  }

  async getPedidos(): Promise<Pedido[]> {
    return this.repository.find()
  }

  async updatePedido(id: number, pedidoData: Pedido): Promise<{ message: string }> {
    await this.repository.update(id, pedidoData)
    return { message: 'Pedido atualizado com sucesso!' }
  }

  async deletePedido(id: number): Promise<{ message: string }> {
    await this.repository.delete(id)
    return { message: 'Pedido deletado com sucesso!' }
  }
}
