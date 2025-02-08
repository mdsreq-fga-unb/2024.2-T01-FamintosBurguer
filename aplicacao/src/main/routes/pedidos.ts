import PedidosService from '../service/pedidosService'
import express from 'express'

const router = express.Router()
const pedidos = new PedidosService()
router.get('/', async (_, res: express.Response) => {
  try {
    const pedido = await pedidos.getPedidos()
    res.status(200).json(pedido)
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error)
    res.status(500).json({ error: 'Erro ao buscar pedidos' })
  }
})

router.get('/:id', async (req, res: express.Response) => {
  const { id } = req.params
  try {
    const pedido = await pedidos.getPedidosId(Number(id))
    res.status(200).json(pedido)
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error)
    res.status(500).json({ error: 'Erro ao buscar pedidos' })
  }
})

router.get('/filtrar/data', async (req, res) => {
  const { startDate, endDate } = req.query
  if (typeof startDate === 'string' && typeof endDate === 'string') {
    try {
      const pedido = await pedidos.getPedidosByDate(new Date(startDate), new Date(endDate))
      res.status(200).json(pedido)
    } catch (error) {
      console.error('Erro ao buscar pedidos por data:', error)
      res.status(500).json({ error: 'Erro ao buscar pedidos por data' })
    }
  } else {
    res.status(400).json({ error: 'Formato de Data Inválido' })
  }
})

router.get('/filtrar/:status', async (req, res) => {
  const { status } = req.params
  try {
    const pedido = await pedidos.getPedidoByStatus(status as string)
    res.status(200).json(pedido)
  } catch (error) {
    console.error('Erro ao buscar pedidos por status:', error)
    res.status(500).json({ error: 'Erro ao buscar pedidos por status' })
  }
})

router.post('/', async (req, res) => {
  try {
    const pedido = await pedidos.postPedido(req.body)
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

export default router
