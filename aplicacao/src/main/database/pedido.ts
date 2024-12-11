/* eslint-disable prettier/prettier */
import { db } from './database'

// Criação de tabelas, se necessário
export async function inicializaTabeladePedido(): Promise<void> {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS Pedido (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Desconto DOUBLE,
      SubTotal DOUBLE,
      ValorTotal DOUBLE,
      Pagamento TEXT NOT NULL,
      DataHora DATE NOT NULL,
      Status TEXT NOT NULL
    )`
  ).run()
}

export * from './pedido'