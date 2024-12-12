import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electronAPI: {
      cadastrarPedido: (pedidoData: any) => Promise<any>
    }
    api: unknown
  }
}
export {}
