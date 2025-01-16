import * as pedidos from '../models/pedidos';
import express from 'express';

const router = express.Router();

router.get('/', async (_, res: express.Response) => {
    try {
      const pedido = await pedidos.getPedidos()
      res.status(200).json(pedido)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
      res.status(500).json({ error: 'Erro ao buscar pedidos' })
    }
})

router.post('/', async (req, res) => {
    try {
      const pedido = await pedidos.cadastrarPedido(req.body)
      res.status(201).json(pedido)
    } catch (error) {
      console.error('Erro ao cadastrar pedido:', error)
      res.status(500).json({ error: 'Erro ao cadastrar pedido' })
    }
})

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const mensagem = await pedidos.updatePedido(Number(id), req.body)
      res.status(200).json(mensagem)
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error)
      res.status(500).json({ error: 'Erro ao atualizar pedido' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params
      const mensagem = await pedidos.deletePedido(Number(id))
      res.status(200).json(mensagem)
    } catch (error) {
      console.error('Erro ao deletar pedido:', error)
      res.status(500).json({ error: 'Erro ao deletar pedido' })
    }
})

export default router;