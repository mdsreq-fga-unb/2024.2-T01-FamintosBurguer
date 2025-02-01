import 'reflect-metadata'
import { app, shell, BrowserWindow, nativeTheme } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { AppDataSource } from './config/database'
import { registerPedidoHandlers } from './ipc/pedidoshandlers'
import { registerItensPedidoHandlers } from './ipc/itenspedidoshandlers'
import { alimentosController } from './ipc/alimentoshandlers'
import icon from '../../resources/icon.png?asset'
import path from 'path'
import * as express from './config/express'


if (process.env.NODE_ENV === 'development') {
  express.Express()
}

app.whenReady().then(async () => {
  try {
    app.commandLine.appendSwitch('disable-features', 'Autofill')
    app.commandLine.appendSwitch('disable-features', 'AutofillServerCommunication')

    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
      console.log('Banco de dados inicializado!')
    }

    // Registrar os IPC handlers para comunicação com o preloader
    registerPedidoHandlers()
    registerItensPedidoHandlers()
    alimentosController()

    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    electronApp.setAppUserModelId('com.electron')

    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })
  } catch (error) {
    console.error('Erro ao inicializar a aplicação:', error)
  }
})

function createWindow(): void {
  nativeTheme.themeSource = 'dark'
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
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

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
