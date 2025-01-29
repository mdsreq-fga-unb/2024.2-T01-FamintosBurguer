import { ipcMain } from 'electron'
import { ipcLogger } from '../utils/ipcLogger'
import * as pedido from '../models/pedidos'

export function registerPedidoHandlers() {
  ipcMain.handle('get-pedidos', ipcLogger('get-pedidos', pedido.getPedidos))
  ipcMain.handle('get-pedidos-id', ipcLogger('get-pedidos', (__event, Id) =>pedido.getPedidosId(Id)))
  ipcMain.handle('get-pedidos-status', ipcLogger('get-pedidos-status', (__event, status) =>  pedido.getPedidoByStatus(status)))
  ipcMain.handle('get-pedidos-data', ipcLogger('get-pedidos-data', (__event, startDate, endDate) => pedido.getPedidosByDate(startDate, endDate)))
  ipcMain.handle('cadastrar-pedido', ipcLogger('cadastrar-pedido', (__event, pedidoData) => pedido.cadastrarPedido(pedidoData)))
  ipcMain.handle('update-pedido', ipcLogger('update-pedido', (__event, id, pedidoData) => pedido.updatePedido(id, pedidoData)))
  ipcMain.handle('delete-pedido', ipcLogger('delete-pedido', (__event, id) => pedido.deletePedido(id)))
}
