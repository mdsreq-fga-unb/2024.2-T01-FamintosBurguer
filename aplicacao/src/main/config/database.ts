import 'reflect-metadata'
import { Pedido } from '../entity/pedido'
import { ItensPedido } from '../entity/itenspedido'
import { DataSource } from 'typeorm'
import { Alimento } from '../entity/alimentos'
import { IngredientesAlimento } from '../entity/ingredientesalimento'
import { Ingrediente } from '../entity/ingredientes'
import path from 'path'
import { app } from 'electron'

const dbPath = path.join(app.getPath('userData'), 'app-database.sqlite');

// Define a fonte de dados (DataSource)
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(dbPath), // Caminho do banco
  synchronize: true, // Cria automaticamente tabelas com base nas entidades // Ajustar para banco de dados em Produção
  logging: false, // Ative para depuração
  entities: [Pedido, ItensPedido, Alimento, IngredientesAlimento, Ingrediente], // Adicione suas entidades aqui
})