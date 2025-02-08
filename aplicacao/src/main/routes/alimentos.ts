import AlimentosService from '../service/alimentosService'
import express from 'express'

const router = express.Router()
const alimentos = new AlimentosService()

router.get('/', async (_, res: express.Response) => {
  try {
    const alimento = await alimentos.getAlimentos()
    res.status(200).json(alimento)
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error)
    res.status(500).json({ error: 'Erro ao buscar pedidos' })
  }
})

router.post('/', async (req, res) => {
  try {
    const alimento = await alimentos.postAlimentos(req.body)
    res.status(201).json(alimento)
  } catch (error) {
    console.error('Erro ao cadastrar pedido:', error)
    res.status(500).json({ error: 'Erro ao cadastrar pedido' })
  }
})

export default router
