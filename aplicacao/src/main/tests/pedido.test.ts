import request from 'supertest'

const BASE_URL = 'http://localhost:3000' // Atualize conforme necessário

describe('Testando CRUD de Pedidos', () => {
  let pedidoId: number

  test('Criar um Novo Pedido', async () => {
    const pedido = {
      cliente: 'Teste Jest',
      desconto: 5,
      total: 100,
      subtotal: 95,
      data: '2024-12-01',
      pagamento: 'Cartão',
      status: 'Pendente'
    }

    const response = await request(BASE_URL).post('/pedidos').send(pedido)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.cliente).toBe(pedido.cliente)

    // Armazenar o ID para uso em outros testes
    pedidoId = response.body.id
  })

  test('Filtrar Pedidos por Status', async () => {
    const status = 'Pendente'

    const response = await request(BASE_URL).get(`/pedidos/filtrar/${status}`)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)

    response.body.forEach((pedido: any) => {
      expect(pedido.status).toBe(status)
    })
  })

  test('Filtrar Pedidos por Data', async () => {
    const startDate = '2024-12-01'
    const endDate = '2024-12-31'

    const response = await request(BASE_URL)
      .get('/pedidos/filtrar/data')
      .query({ startDate, endDate })

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)

    response.body.forEach((pedido: any) => {
      const dataPedido = new Date(pedido.data)
      expect(dataPedido >= new Date(startDate) && dataPedido <= new Date(endDate)).toBe(true)
    })
  })

  test('Filtrar Pedidos por Id', async () => {
    const response = await request(BASE_URL).get(`/pedidos/${pedidoId}`)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)

    response.body.forEach((pedido: any) => {
      expect(pedido.id).toBe(pedidoId)
    })
  })

  test('Listar Pedidos', async () => {
    const response = await request(BASE_URL).get('/pedidos')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })

  test('Atualizar um Pedido', async () => {
    const pedidoAtualizado = {
      cliente: 'Teste Atualizado Jest',
      desconto: 10,
      total: 200,
      subtotal: 190,
      data: '2024-12-02',
      pagamento: 'Dinheiro',
      status: 'Concluído'
    }

    const response = await request(BASE_URL).put(`/pedidos/${pedidoId}`).send(pedidoAtualizado)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Pedido atualizado com sucesso!')
  })

  test('Excluir um Pedido', async () => {
    const response = await request(BASE_URL).delete(`/pedidos/${pedidoId}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Pedido deletado com sucesso!')
  })
})
