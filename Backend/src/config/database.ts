import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'famintos-pg', // Nome do serviço definido no docker-compose.yml
  port: 5432, // Porta padrão do PostgreSQL
  username: 'famintos_root', // Variável POSTGRES_USER
  password: 'j5m966qp7jiypfda', // Variável POSTGRES_PASSWORD
  database: 'famintos', // Variável POSTGRES_DB
  synchronize: true, // Altere para false em produção para evitar perda de dados
  logging: false, // Ative se precisar de logs de queries no console
  entities: [], // Suas entidades do projeto
  migrations: [], // Configure se estiver usando migrações
  subscribers: [] // Configure se estiver usando subscribers
});
