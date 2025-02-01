import { ipcMain } from 'electron'
import { ipcLogger } from '../utils/ipcLogger'
import AlimentosService from '../service/alimentosService'

export function alimentosController(): void {
  const alimentosService = new AlimentosService()

  ipcMain.handle(
    'getAlimentos',
    ipcLogger('getAlimentos', async () => {
      return alimentosService.getAlimentos()
    })
  )
}
