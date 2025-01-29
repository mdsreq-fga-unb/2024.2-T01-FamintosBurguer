import request from 'supertest';

const BASE_URL = 'http://localhost:3000'; // Atualize conforme necessário

describe('Testando CRUD de Alimentos', () => {

  test('Listar Pedidos', async () => {
    const response = await request(BASE_URL).get('/alimentos');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

});
