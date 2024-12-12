import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
const { ipcRenderer } = require('electron')

// Custom APIs for renderer
const api = {
  cadastrarPedido: (pedidoData) => ipcRenderer.invoke('cadastrar-pedido', pedidoData)
}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    // Expondo a API padrão do Electron Toolkit
    contextBridge.exposeInMainWorld('electronAPI', {
      cadastrarPedido: (pedidoData) => ipcRenderer.invoke('cadastrar-pedido', pedidoData)
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

contextBridge.exposeInMainWorld('electronAPI', {
  cadastrarPedido: (pedidoData) => ipcRenderer.invoke('cadastrar-pedido', pedidoData)
})
