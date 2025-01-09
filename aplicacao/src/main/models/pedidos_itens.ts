import { AppDataSource } from '../config/database'
import { Pedido } from '../entity/pedido';
import { Alimento } from '../entity/alimentos';
import { ItensPedido } from '../entity/itenspedido';

// Inicialize o DataSource antes de usá-lo
AppDataSource.initialize().catch((error) => console.error('Erro ao inicializar o DataSource:', error));

// Função para cadastrar um novo item de pedido
export async function cadastrarItensPedido(itensPedidoData: any) {
  const { quantidade, custom, observacao, pedidoId, alimentoId } = itensPedidoData;

  const pedidoRepo = AppDataSource.getRepository(Pedido);
  const alimentoRepo = AppDataSource.getRepository(Alimento);
  const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

  try {
    const pedido = await pedidoRepo.findOneBy({ id: pedidoId });
    if (!pedido) {
      throw new Error(`Pedido com ID ${pedidoId} não encontrado.`);
    }

    const alimento = await alimentoRepo.findOneBy({ id: alimentoId });
    if (!alimento) {
      throw new Error(`Alimento com ID ${alimentoId} não encontrado.`);
    }

    const novoItem = itensPedidoRepo.create({
      quantidade,
      custom,
      observacao,
      pedido,
      alimento,
    });

    return await itensPedidoRepo.save(novoItem);
  } catch (error) {
    console.error('Erro ao cadastrar item de pedido:', error);
    throw new Error('Não foi possível cadastrar o item do pedido.');
  }
}

// Função para atualizar um item de pedido existente
export async function updateItensPedido(id: number, itensPedidoData: any) {
  const { quantidade, custom, observacao, pedidoId, alimentoId } = itensPedidoData;

  const pedidoRepo = AppDataSource.getRepository(Pedido);
  const alimentoRepo = AppDataSource.getRepository(Alimento);
  const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

  try {
    const itemExistente = await itensPedidoRepo.findOneBy({ id });
    if (!itemExistente) {
      throw new Error(`Item de pedido com ID ${id} não encontrado.`);
    }

    if (pedidoId) {
      const pedido = await pedidoRepo.findOneBy({ id: pedidoId });
      if (!pedido) throw new Error(`Pedido com ID ${pedidoId} não encontrado.`);
      itemExistente.pedido = pedido;
    }

    if (alimentoId) {
      const alimento = await alimentoRepo.findOneBy({ id: alimentoId });
      if (!alimento) throw new Error(`Alimento com ID ${alimentoId} não encontrado.`);
      itemExistente.alimento = alimento;
    }

    itemExistente.quantidade = quantidade !== undefined ? quantidade : itemExistente.quantidade;
    itemExistente.custom = custom !== undefined ? custom : itemExistente.custom;
    itemExistente.observacao = observacao !== undefined ? observacao : itemExistente.observacao;

    await itensPedidoRepo.save(itemExistente);

    return { message: 'Item de pedido atualizado com sucesso!' };
  } catch (error) {
    console.error('Erro ao atualizar item de pedido:', error);
    throw new Error('Não foi possível atualizar o item do pedido.');
  }
}

// Função para deletar um item de pedido
export async function deleteItensPedido(id: number) {
  const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

  try {
    const itemExistente = await itensPedidoRepo.findOneBy({ id });
    if (!itemExistente) {
      throw new Error(`Item de pedido com ID ${id} não encontrado.`);
    }

    await itensPedidoRepo.delete(id);

    return { message: 'Item de pedido deletado com sucesso!' };
  } catch (error) {
    console.error('Erro ao deletar item de pedido:', error);
    throw new Error('Não foi possível deletar o item do pedido.');
  }
}

// Função para obter todos os itens de pedido
export async function getItensPedidos() {
  const itensPedidoRepo = AppDataSource.getRepository(ItensPedido);

  try {
    return await itensPedidoRepo.find({ relations: ['pedido', 'alimento'] });
  } catch (error) {
    console.error('Erro ao buscar itens de pedido:', error);
    throw new Error('Não foi possível buscar os itens do pedido.');
  }
}