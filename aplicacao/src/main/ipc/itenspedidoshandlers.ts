import { ipcMain } from 'electron'
import { ipcLogger } from '../utils/ipcLogger'
import * as pedido_itens from '../service/pedidos_itens'

export function registerItensPedidoHandlers() {
  ipcMain.handle('get-itens-pedidos', ipcLogger('get-itens-pedidos', pedido_itens.getItensPedidos))
  ipcMain.handle('get-itens-mais-pedidos', ipcLogger('get-itens-mais-pedidos', pedido_itens.getAlimentosMaisPedidos))
  ipcMain.handle('get-item-id-pedidos', ipcLogger('get-item-id-pedidos', (__event, itemId) => pedido_itens.getItemIdPedidos(itemId)))
  ipcMain.handle('get-itens-pedido-id', ipcLogger('get-itens-pedido-id', (__event, pedidoId) => pedido_itens.getItensPedidoId(pedidoId)))
  ipcMain.handle('cadastrar-itens-pedido', ipcLogger('cadastrar-itens-pedido', (__event, pedidoData) => pedido_itens.cadastrarItensPedido(pedidoData)))
  ipcMain.handle('update-itens-pedido', ipcLogger('update-itens-pedido', (__event, id, pedidoData) => pedido_itens.updateItensPedido(id, pedidoData)))
  ipcMain.handle('delete-itens-pedido', ipcLogger('delete-itens-pedido', (__event, id) => pedido_itens.deleteItensPedido(id)))
}