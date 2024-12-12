import 'reflect-metadata'
import { Pedido } from '../entity/pedido'
import { DataSource } from 'typeorm'
import path from 'path'
import { app } from 'electron'

// Define a fonte de dados (DataSource)
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(app.getPath('userData'), 'app-database.sqlite'), // Caminho do banco
  synchronize: true, // Cria automaticamente tabelas com base nas entidades
  logging: false, // Ative para depuração
  entities: [Pedido] // Adicione suas entidades aqui
})
