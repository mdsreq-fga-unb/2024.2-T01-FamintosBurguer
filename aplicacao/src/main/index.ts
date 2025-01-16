import 'reflect-metadata'
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { AppDataSource } from './config/database'
import { registerPedidoHandlers } from './ipc/pedidoshandlers'
import { registerItensPedidoHandlers } from './ipc/itenspedidoshandlers'
import icon from '../../resources/icon.png?asset'
import path from 'path'
import * as express from './config/express'

// Desabilita o autofill do Electron
app.commandLine.appendSwitch('disable-features', 'Autofill')
app.commandLine.appendSwitch('disable-features', 'AutofillServerCommunication')

// Configuração do Express para Ambiente de Desenvolvimento/Testes
if (process.env.NODE_ENV === 'development') {
  express.Express()
}

// Inicialize o banco de dados quando o app iniciar
app.on('ready', () => {
  if (!AppDataSource.isInitialized) {
    AppDataSource.initialize()
    .then(() => {
      console.log('Banco de dados inicializado!')
      registerPedidoHandlers()
      registerItensPedidoHandlers()

      // Adicionar aqui os demais handlers
    })
    .catch((error) => console.error('Erro ao inicializar o banco:', error))
  } 
  // Resto da inicialização da janela principal do Electron
})

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

// Função genérica para monitorar e capturar erros
export function ipcLogger(eventName: string, handler: Function) {
  return async (event: any, ...args: any[]) => {
    console.log(`[IPC] Evento recebido: ${eventName}`, { args })
    try {
      const result = await handler(event, ...args)
      console.log(`[IPC] Evento ${eventName} processado com sucesso.`)
      return result
    } catch (error) {
      console.error(`[IPC] Erro no evento ${eventName}:`, error)
      throw error // Repassa o erro para o cliente IPC
    }
  }
}