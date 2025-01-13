import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Pedido } from '../entity/pedido';
import { ItensPedido } from '../entity/itenspedido';
import { Alimento } from '../entity/alimentos';
import { IngredientesAlimento } from '../entity/ingredientesalimento';
import { Ingrediente } from '../entity/ingredientes';
import databasePath from '../config/config'

// Define a fonte de dados (DataSource)
export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databasePath,
  synchronize: false,
  logging: true,
  migrations: ['src/main/migrations/*.ts'], // Caminho correto para as migrations
  entities: [Pedido, ItensPedido, Alimento, IngredientesAlimento, Ingrediente],
});
