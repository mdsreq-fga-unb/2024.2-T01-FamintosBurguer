import * as pedidos_itens from '../service/pedidos_itens'
import express from 'express'

const router = express.Router()

router.get('/', async (_, res: express.Response) => {
  try {
    const pedido_itens = await pedidos_itens.getItensPedidos()
    res.status(200).json(pedido_itens)
  } catch (error) {
    console.error('Erro ao buscar os itens do pedido:', error)
    res.status(500).json({ error: 'Erro ao buscar os itens do pedido' })
  }
})

router.get('/:id', async (req, res: express.Response) => {
  const { id } = req.params
  try {
    const pedido_itens = await pedidos_itens.getItemIdPedidos(id)
    res.status(200).json(pedido_itens)
  } catch (error) {
    console.error(`Erro ao buscar o item ${id} do pedido:`, error)
    res.status(500).json({ error: `Erro ao buscar o item ${id} do pedido:` })
  }
})

router.get('/filtrar/:pedido', async (req, res: express.Response) => {
  const { pedido } = req.params
  try {
    const itens_pedido = await pedidos_itens.getItensPedidoId(pedido)
    res.status(200).json(itens_pedido)
  } catch (error) {
    console.error(`Erro ao buscar itens do pedido ${pedido}: `, error)
    res.status(500).json({ error: `Erro ao buscar os itens do pedido ${pedido}.` })
  }
})


router.post('/', async (req, res) => {
  try {
    const pedido_itens = await pedidos_itens.cadastrarItensPedido(req.body)
    res.status(201).json(pedido_itens)
  } catch (error) {
    console.error('Erro ao cadastrar os itens do pedido:', error)
    res.status(500).json({ error: 'Erro ao cadastrar os itens do pedido' })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const mensagem = await pedidos_itens.updateItensPedido(Number(id), req.body)
    res.status(200).json(mensagem)
  } catch (error) {
    console.error('Erro ao atualizar os itens do pedido:', error)
    res.status(500).json({ error: 'Erro ao atualizar os itens do pedido' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const mensagem = await pedidos_itens.deleteItensPedido(Number(id))
    res.status(200).json(mensagem)
  } catch (error) {
    console.error('Erro ao deletar os itens do pedido:', error)
    res.status(500).json({ error: 'Erro ao deletar os itens do pedido' })
  }
})

export default router
