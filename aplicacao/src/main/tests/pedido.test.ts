import * as path from 'path';
import request from 'supertest';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import { Pedido } from '../entity/pedido';
import { ItensPedido } from '../entity/itenspedido';
import { Alimento } from '../entity/alimentos';
import { IngredientesAlimento } from '../entity/ingredientesalimento';
import { Ingrediente } from '../entity/ingredientes';

const userDataPath = typeof app !== 'undefined' ? app.getPath('userData') : './test-data'; // Caminho simulado para testes

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(userDataPath, 'teste-database.sqlite'),
  synchronize: true,
  logging: false,
  entities: [Pedido, ItensPedido, Alimento, IngredientesAlimento, Ingrediente],
});

describe('Testando CRUD de Pedidos', () => {
  let pedidoId: number;

  beforeAll(async () => {
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  test('Criar um Novo Pedido', async () => {
    const pedido = {
      cliente: 'Teste Jest',
      desconto: 5,
      total: 100,
      subtotal: 95,
      data: '2024-12-01',
      pagamento: 'Cartão',
      status: 'Pendente',
    };

    const response = await request('http://localhost:3000')
      .post('/pedidos')
      .send(pedido);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.cliente).toBe(pedido.cliente);

    // Armazenar o ID para uso em outros testes
    pedidoId = response.body.id;
  });

  test('Listar Pedidos', async () => {
    const response = await request('http://localhost:3000').get('/pedidos');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Atualizar um Pedido', async () => {
    const pedidoAtualizado = {
      cliente: 'Teste Atualizado Jest',
      desconto: 10,
      total: 200,
      subtotal: 190,
      data: '2024-12-02',
      pagamento: 'Dinheiro',
      status: 'Concluído',
    };

    const response = await request('http://localhost:3000')
      .put(`/pedidos/${pedidoId}`)
      .send(pedidoAtualizado);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Pedido atualizado com sucesso!');
  });

  test('Excluir um Pedido', async () => {
    const response = await request('http://localhost:3000').delete(`/pedidos/${pedidoId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Pedido deletado com sucesso!');
  });
});
