import { ipcMain } from 'electron'
import { ipcLogger } from '../index' // Função que loga eventos IPC
import * as pedido from '../models/pedidos'

export function registerPedidoHandlers() {
  ipcMain.handle('get-pedidos', ipcLogger('get-pedidos', pedido.getPedidos))
  ipcMain.handle('cadastrar-pedido', ipcLogger('cadastrar-pedido', (__event, pedidoData) => pedido.cadastrarPedido(pedidoData)))
  ipcMain.handle('update-pedido', ipcLogger('update-pedido', (__event, id, pedidoData) => pedido.updatePedido(id, pedidoData)))
  ipcMain.handle('delete-pedido', ipcLogger('delete-pedido', (__event, id) => pedido.deletePedido(id)))
}
