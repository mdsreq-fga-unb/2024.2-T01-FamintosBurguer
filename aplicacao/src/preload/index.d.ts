import { ElectronAPI } from '@electron-toolkit/preload'

// Verificar com o Isaac a funcionalidade deste arquivo.
declare global {
  interface Window {
    electronAPI: {
      cadastrarPedido: (pedidoData: any) => Promise<any>
      updatePedido: (id: string, pedidoData: any) => Promise<any>
      deletePedido: (id: string) => Promise<any>
      getPedidos: () => Promise<any>
    }
    api: unknown
  }
}
export {}
