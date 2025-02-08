import { ipcMain } from 'electron'
import { ipcLogger } from '../utils/ipcLogger'
import PedidosService from '../service/pedidosService'

export function PedidoController(): void {
  const pedidosService = new PedidosService()

  ipcMain.handle('get-pedidos', ipcLogger('get-pedidos', pedidosService.getPedidos))
  ipcMain.handle(
    'get-pedidos-id',
    ipcLogger('get-pedidos', (__event, Id) => pedidosService.getPedidosId(Id))
  )
  ipcMain.handle(
    'get-pedidos-status',
    ipcLogger('get-pedidos-status', (__event, status) => pedidosService.getPedidoByStatus(status))
  )
  ipcMain.handle(
    'get-pedidos-data',
    ipcLogger('get-pedidos-data', (__event, startDate, endDate) =>
      pedidosService.getPedidosByDate(startDate, endDate)
    )
  )
  ipcMain.handle(
    'postPedido',
    ipcLogger('postPedido', async (__event, pedidoData) => {
      return pedidosService.postPedido(pedidoData)
    })
  )

  ipcMain.handle(
    'update-pedido',
    ipcLogger('update-pedido', (__event, id, pedidoData) =>
      pedidosService.updatePedido(id, pedidoData)
    )
  )
  ipcMain.handle(
    'delete-pedido',
    ipcLogger('delete-pedido', (__event, id) => pedidosService.deletePedido(id))
  )
}
