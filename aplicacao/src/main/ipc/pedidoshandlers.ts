import { ipcMain } from 'electron'
import { AppDataSource } from '../config/database'
import { Pedido } from '../entity/pedido'

// Função para registrar os manipuladores IPC
export function registerPedidoHandlers() {
  const pedidoRepository = AppDataSource.getRepository(Pedido)

  ipcMain.handle('get-pedidos', async () => {
    return await pedidoRepository.find() // Busca todos os usuários
  })

  ipcMain.handle('cadastrar-pedido', async (__event, pedidoData) => {
    try {
      const repository = AppDataSource.getRepository(Pedido)
      const novoPedido = repository.create(pedidoData)
      const pedidoSalvo = await repository.save(novoPedido)
      return pedidoSalvo // Retorna o pedido salvo para o frontend
    } catch (error) {
      console.error('Erro ao salvar pedido:', error)
      throw error
    }
  })
}
