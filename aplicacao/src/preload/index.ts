import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
const { ipcRenderer } = require('electron')

// Custom APIs for renderer
const api = {
  // Pedido
  cadastrarPedido: (pedidoData) => ipcRenderer.invoke('cadastrar-pedido', pedidoData),
  UpdatePedido: (id, pedidoData) => ipcRenderer.invoke('update-pedido', id, pedidoData),
  deletePedido: (id) => ipcRenderer.invoke('delete-pedido', id),
  getPedidos: () => ipcRenderer.invoke('get-pedidos'),
  // Itens do Pedidos 
  cadastrarItensPedido: (pedidoData) => ipcRenderer.invoke('cadastrar-itens-pedido', pedidoData),
  UpdateItensPedido: (id, pedidoData) => ipcRenderer.invoke('update-itens-pedido', id, pedidoData),
  deleteItensPedido: (id) => ipcRenderer.invoke('delete-itens-pedido', id),
  getItensPedidos: () => ipcRenderer.invoke('get-itens-pedidos')
}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    // Expondo a API padrão do Electron Toolkit
    contextBridge.exposeInMainWorld('electronAPI', {
      api: electronAPI
    })

    // Expondo sua API customizada
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
