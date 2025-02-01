export function ipcLogger<TArgs extends unknown[], TResult>(
  eventName: string,
  handler: (event: Electron.IpcMainInvokeEvent, ...args: TArgs) => Promise<TResult>
): (event: Electron.IpcMainInvokeEvent, ...args: TArgs) => Promise<TResult> {
  return async (event, ...args) => {
    console.log(`[IPC] Evento recebido: ${eventName}`, { args })
    try {
      const result = await handler(event, ...args)
      console.log(`[IPC] Evento ${eventName} processado com sucesso.`)
      return result
    } catch (error) {
      console.error(`[IPC] Erro no evento ${eventName}:`, error)
      throw error
    }
  }
}
