import { ipcMain } from 'electron'
import { ipcLogger } from '../utils/ipcLogger'
import * as pedido_itens from '../service/pedidos_itens'

export function registerItensPedidoHandlers() {
  ipcMain.handle('get-pedidos', ipcLogger('get-itens-pedidos', pedido_itens.getItensPedidos))
  ipcMain.handle(
    'cadastrar-pedido',
    ipcLogger('cadastrar-itens-pedido', (__event, pedidoData) =>
      pedido_itens.cadastrarItensPedido(pedidoData)
    )
  )
  ipcMain.handle(
    'update-pedido',
    ipcLogger('update-itens-pedido', (__event, id, pedidoData) =>
      pedido_itens.updateItensPedido(id, pedidoData)
    )
  )
  ipcMain.handle(
    'delete-pedido',
    ipcLogger('delete-itens-pedido', (__event, id) => pedido_itens.deleteItensPedido(id))
  )
}

// Tem que alterar para as funções do arquivo models/ingredientes.ts
