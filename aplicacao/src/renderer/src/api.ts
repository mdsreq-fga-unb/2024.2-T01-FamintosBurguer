import { Alimento } from '../../main/entity/alimentos'
import { IPedido } from '../../main/interface/IPedido'

declare global {
  interface Window {
    api: {
      getAlimentos: () => Promise<Alimento[]>
      postPedido: (pedidoData: IPedido) => Promise<{ message: string }>
    }
  }
}
