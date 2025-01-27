import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { Alimento } from '../main/entity/alimentos'
import { ItensPedido } from '../main/entity/itenspedido'
import { Pedido } from '../main/entity/pedido'

// Custom APIs for renderer
const api = {
  // Pedido
  cadastrarPedido: (pedidoData): Promise<Pedido> =>
    ipcRenderer.invoke('cadastrar-pedido', pedidoData),
  UpdatePedido: (id, pedidoData): Promise<Pedido> =>
    ipcRenderer.invoke('update-pedido', id, pedidoData),
  deletePedido: (id): Promise<boolean> => ipcRenderer.invoke('delete-pedido', id),
  getPedidos: (): Promise<ItensPedido[]> => ipcRenderer.invoke('get-pedidos'),

  // Itens do Pedidos
  cadastrarItensPedido: (pedidoData): Promise<Pedido> =>
    ipcRenderer.invoke('cadastrar-itens-pedido', pedidoData),
  UpdateItensPedido: (id, pedidoData): Promise<Pedido> =>
    ipcRenderer.invoke('update-itens-pedido', id, pedidoData),
  deleteItensPedido: (id): Promise<boolean> => ipcRenderer.invoke('delete-itens-pedido', id),
  getItensPedidos: (): Promise<ItensPedido[]> => ipcRenderer.invoke('get-itens-pedidos'),
  getAlimentos: (): Promise<Alimento[]> => ipcRenderer.invoke('getAlimentos')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', {
      api: electronAPI
    })
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Erro ao configurar contextBridge:', error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI

  // @ts-ignore (define in dts)
  window.api = api
}
