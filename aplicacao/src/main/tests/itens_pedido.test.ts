import request from 'supertest';
import { Pedido } from '../entity/pedido';
import { ItensPedido } from '../entity/itenspedido';
import { Alimento } from '../entity/alimentos';
import { AppDataSource } from '../config/database';


const BASE_URL = 'http://localhost:3000'; // Atualize conforme necessário


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
      observacao: 'Sem cebola',
    });
    const alimento = await alimentoRepo.save(novoAlimento);
    alimentoId = alimento.id;
  });

  afterAll(async () => {
    const pedidoRepo = AppDataSource.getRepository(Pedido);
    const alimentoRepo = AppDataSource.getRepository(Alimento);
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

    // Excluir todos os itens de pedido criados
    await itensPedidoRepo.delete({ id: pedidoId });

    // Excluir o pedido e o alimento criados
    await pedidoRepo.delete({ id: pedidoId });
    await alimentoRepo.delete({ id: alimentoId });

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

    // Criação direta no banco de dados com o repositório
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const item = itensPedidoRepo.create(novoItem);
    const savedItem = await itensPedidoRepo.save(item);

    // Teste para garantir que o item foi criado corretamente
    expect(savedItem.id).toBeDefined();
    expect(savedItem.quantidade).toBe(novoItem.quantidade);

    // Armazenar o ID para uso em outros testes
    itemId = savedItem.id;
  });

  test('Listar Itens de Pedido', async () => {
    // Listando diretamente no banco de dados com o repositório
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const itensPedido = await itensPedidoRepo.find();

    // Verificação se os itens estão sendo retornados corretamente
    const response = await request(BASE_URL).get('/pedidos_itens');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(itensPedido.length);
  });

  test('Atualizar um Item de Pedido', async () => {
    const itemAtualizado = {
      quantidade: 3,
      custom: false,
      observacao: 'Adicionar molho especial',
    };

    // Atualizando diretamente no banco de dados com o repositório
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const itemExistente = await itensPedidoRepo.findOneBy({ id: itemId });

    if (itemExistente) {
      // Testando se a atualização vai ser realizada corretamente
      const response = await request(BASE_URL)
      .put(`/pedidos_itens/${itemId}`)
      .send(itemAtualizado);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Item de pedido atualizado com sucesso!');
    } else {
      throw new Error('Item de pedido não encontrado');
    }
  });

  test('Excluir um Item de Pedido', async () => {
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const itemExistente = await itensPedidoRepo.findOneBy({ id: itemId });

    if (itemExistente) {
      // Testando se a exclusão vai ser realizada corretamente  
      const response = await request(BASE_URL)
      .delete(`/pedidos_itens/${itemId}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Item de pedido deletado com sucesso!');
    }
  });
});
