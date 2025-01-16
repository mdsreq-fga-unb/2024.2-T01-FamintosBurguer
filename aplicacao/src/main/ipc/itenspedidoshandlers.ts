import { ipcMain } from 'electron'
import { ipcLogger } from '../index' // Função que loga eventos IPC
import * as pedido_itens from '../models/pedidos_itens'

export function registerItensPedidoHandlers() {
  ipcMain.handle('get-itens-pedidos', ipcLogger('get-itens-pedidos', pedido_itens.getItensPedidos))
  ipcMain.handle('cadastrar-itens-pedido', ipcLogger('cadastrar-itens-pedido', (__event, pedidoData) => pedido_itens.cadastrarItensPedido(pedidoData)))
  ipcMain.handle('update-itens-pedido', ipcLogger('update-itens-pedido', (__event, id, pedidoData) => pedido_itens.updateItensPedido(id, pedidoData)))
  ipcMain.handle('delete-itens-pedido', ipcLogger('delete-itens-pedido', (__event, id) => pedido_itens.deleteItensPedido(id)))
}