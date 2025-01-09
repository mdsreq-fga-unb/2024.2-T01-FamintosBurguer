import * as path from 'path';
import request from 'supertest';
import { app } from 'electron';
import { DataSource } from 'typeorm';
import { Pedido } from '../entity/pedido';
import { ItensPedido } from '../entity/itenspedido';
import { Alimento } from '../entity/alimentos';
import { IngredientesAlimento } from '../entity/ingredientesalimento';
import { Ingrediente } from '../entity/ingredientes';

const BASE_URL = 'http://localhost:3000'; // Atualize conforme necessário
const userDataPath = typeof app !== 'undefined' ? app.getPath('userData') : './test-data'; // Caminho simulado para testes

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(userDataPath, 'teste-database.sqlite'),
  synchronize: true,
  logging: false,
  entities: [ItensPedido, Pedido, Alimento, IngredientesAlimento, Ingrediente],
});

describe('Testando CRUD de Itens de Pedido', () => {
  let pedidoId: number;
  let alimentoId: number;
  let itemId: number;

  beforeAll(async () => {
    await AppDataSource.initialize();

    // Criação de entidades relacionadas para testes
    const pedidoRepo = AppDataSource.getRepository(Pedido);
    const alimentoRepo = AppDataSource.getRepository(Alimento);

    const novoPedido = pedidoRepo.create({
      cliente: 'Cliente Teste',
      desconto: 10,
      total: 100,
      subtotal: 90,
      data: '2024-12-01',
      pagamento: 'Cartão',
      status: 'Pendente',
    });
    const pedido = await pedidoRepo.save(novoPedido);
    pedidoId = pedido.id;

    const novoAlimento = alimentoRepo.create({
      nome: 'Alimento Teste',
      valor: 20,
      observacao: 'Sem cebola'
    });
    const alimento = await alimentoRepo.save(novoAlimento);
    alimentoId = alimento.id;
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  test('Criar um Novo Item de Pedido', async () => {
    const novoItem = {
      quantidade: 2,
      custom: true,
      observacao: 'Sem cebola, adicionar queijo extra',
      pedidoId,
      alimentoId,
    };

    const response = await request(BASE_URL)
      .post('/itens-pedido')
      .send(novoItem);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.quantidade).toBe(novoItem.quantidade);

    // Armazenar o ID para uso em outros testes
    itemId = response.body.id;
  });

  test('Listar Itens de Pedido', async () => {
    const response = await request(BASE_URL).get('/itens-pedido');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Atualizar um Item de Pedido', async () => {
    const itemAtualizado = {
      quantidade: 3,
      custom: false,
      observacao: 'Adicionar molho especial'
    };

    const response = await request(BASE_URL)
      .put(`/itens-pedido/${itemId}`)
      .send(itemAtualizado);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      'Item de pedido atualizado com sucesso!'
    );
  });

  test('Excluir um Item de Pedido', async () => {
    const response = await request(BASE_URL).delete(`/itens-pedido/${itemId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      'Item de pedido deletado com sucesso!'
    );
  });
});
