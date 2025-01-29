import request from 'supertest';
import * as pedidosItens from '../service/pedidos_itens';
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
      tipo: 'Principal',
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

  test('Listar Itens de um Pedido por Id do pedido', async () => {
    // Listando diretamente no banco de dados com o repositório
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const itensPedido = await itensPedidoRepo.find({
      where: { pedido: { id: pedidoId } },
    });

    // Verificação se os itens estão sendo retornados corretamente
    const response = await request(BASE_URL).get(`/pedidos_itens/filtrar/${pedidoId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(itensPedido.length);
  });

  test('Listar Item de Pedido por Id do item', async () => {
    // Listando diretamente no banco de dados com o repositório
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);
    const itemPedido = await itensPedidoRepo.find({
      where:{
        id: itemId
      },
    });

    // Verificação se os itens estão sendo retornados corretamente
    const response = await request(BASE_URL).get(`/pedidos_itens/${itemId}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(itemPedido.length);
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

describe('Testando a função getAlimentosMaisPedidos', () => {
  let pedidoId: number;
  let alimentoId1: number;
  let alimentoId2: number;
  let itemIds: number[] = []; // Array para armazenar os IDs dos itens de pedido criados

  beforeAll(async () => {
    await AppDataSource.initialize();

    // Criação de entidades relacionadas para testes
    const pedidoRepo = AppDataSource.getRepository(Pedido);
    const alimentoRepo = AppDataSource.getRepository(Alimento);
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

    // Cria um pedido
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

    // Cria dois alimentos
    const novoAlimento1 = alimentoRepo.create({
      nome: 'Alimento Teste 1',
      valor: 20,
      tipo: 'Principal',
      observacao: 'Sem cebola',
    });
    const alimento1 = await alimentoRepo.save(novoAlimento1);
    alimentoId1 = alimento1.id;

    const novoAlimento2 = alimentoRepo.create({
      nome: 'Alimento Teste 2',
      valor: 30,
      tipo: 'Sobremesa',
      observacao: 'Com chocolate',
    });
    const alimento2 = await alimentoRepo.save(novoAlimento2);
    alimentoId2 = alimento2.id;

    // Cria itens de pedido para os alimentos e armazena os IDs
    const novoItem1 = itensPedidoRepo.create({
      quantidade: 2,
      custom: true,
      observacao: 'Sem cebola',
      pedido: pedido,
      alimento: alimento1,
    });
    const savedItem1 = await itensPedidoRepo.save(novoItem1);
    itemIds.push(savedItem1.id); // Armazena o ID do item criado

    const novoItem2 = itensPedidoRepo.create({
      quantidade: 3,
      custom: false,
      observacao: 'Com chocolate',
      pedido: pedido,
      alimento: alimento2,
    });
    const savedItem2 = await itensPedidoRepo.save(novoItem2);
    itemIds.push(savedItem2.id); // Armazena o ID do item criado

    const novoItem3 = itensPedidoRepo.create({
      quantidade: 1,
      custom: true,
      observacao: 'Sem cebola',
      pedido: pedido,
      alimento: alimento1,
    });
    const savedItem3 = await itensPedidoRepo.save(novoItem3);
    itemIds.push(savedItem3.id); // Armazena o ID do item criado
  });

  afterAll(async () => {
    const pedidoRepo = AppDataSource.getRepository(Pedido);
    const alimentoRepo = AppDataSource.getRepository(Alimento);
    const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

    // Exclui apenas os itens de pedido criados durante o teste
    await itensPedidoRepo.delete(itemIds);

    // Exclui o pedido e os alimentos criados
    await pedidoRepo.delete({ id: pedidoId });
    await alimentoRepo.delete({ id: alimentoId1 });
    await alimentoRepo.delete({ id: alimentoId2 });

    await AppDataSource.destroy();
  });

  test('Deve retornar os alimentos mais pedidos', async () => {
    // Chama a função diretamente
    const alimentosMaisPedidos = await pedidosItens.getAlimentosMaisPedidos();

    // Verifica se o resultado é um array
    expect(Array.isArray(alimentosMaisPedidos)).toBe(true);

    // Verifica se os alimentos mais pedidos estão no formato esperado
    alimentosMaisPedidos.forEach((item) => {
      expect(item).toEqual(
        expect.objectContaining({
          alimentoId: expect.any(Number),
          totalPedidos: expect.any(Number), // Aceita tanto string quanto number
        }),
      );
    });

    // Verifica se o alimento mais pedido está no topo
    const alimentoMaisPedido = alimentosMaisPedidos[0];
    expect(alimentoMaisPedido.alimentoId).toBe(alimentoId1); // Alimento 1 foi pedido 2 vezes
    expect(alimentoMaisPedido.totalPedidos).toBe(2); // Total de pedidos para o alimento 1
  });
});