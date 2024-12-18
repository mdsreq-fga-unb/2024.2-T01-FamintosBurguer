import 'reflect-metadata'
import { Pedido } from '../entity/pedido'
import { ItensPedido } from '../entity/itenspedido'
import { DataSource } from 'typeorm'
import { Alimento } from '../entity/alimentos'
import { IngredientesAlimento } from '../entity/ingredientesalimento'
import { Ingrediente } from '../entity/ingredientes'
import path from 'path'
import { app } from 'electron'

// Define a fonte de dados (DataSource)
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(app.getPath('userData'), 'app-database.sqlite'), // Caminho do banco
  synchronize: true, // Cria automaticamente tabelas com base nas entidades
  logging: false, // Ative para depuração
  entities: [Pedido, ItensPedido, Alimento, IngredientesAlimento, Ingrediente] // Adicione suas entidades aqui
})
