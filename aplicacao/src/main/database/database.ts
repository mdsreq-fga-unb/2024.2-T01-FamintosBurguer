/* eslint-disable prettier/prettier */
import * as pedidos from './pedido'
import Database from 'better-sqlite3'
import path from 'path'
import { app } from 'electron'

// Inicializa e exporta o banco de dados
export const dbPath = path.join(app.getPath('userData'), 'famintos-database.sqlite')
export const db = new Database(dbPath)

// Inicializa/Cria tabelas caso necessário
export function inicializaTabelas(): void {
  pedidos.inicializaTabeladePedido()
}
export * from './database'
