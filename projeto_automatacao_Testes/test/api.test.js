const request = require('supertest');
const app = require('../app');
const { expect } = require('chai'); // Importe a biblioteca "chai" aqui

describe('Testes da API', () => {
  let server;

  before((done) => {
    server = app.listen(3000, () => {
      console.log('Servidor de teste rodando na porta 3000');
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  it('Deve retornar uma mensagem de boas-vindas', async () => {
    const response = await request(app).get('/api');
    expect(response.status).to.equal(200); // Use "expect" da biblioteca "chai"
    expect(response.body).to.deep.equal({ message: 'Bem-vindo à API!' }); // Use "expect" da biblioteca "chai"
  });

  it('Deve somar dois números', async () => {
    const data = { num1: 4, num2: 1 };
    const response = await request(app).post('/api/somar').send(data);
    expect(response.status).to.equal(200); // Use "expect" da biblioteca "chai"
    expect(response.body).to.deep.equal({ resultado: 5 }); // Use "expect" da biblioteca "chai"
  });

  it('Deve retornar erro ao somar números inválidos', async () => {
    const data = { num1: 6 };
    const response = await request(app).post('/api/somar').send(data);
    expect(response.status).to.equal(400); // Use "expect" da biblioteca "chai"
    expect(response.body).to.deep.equal({ error: 'Certifique-se de fornecer "num1" e "num2".' }); // Use "expect" da biblioteca "chai"
  });
});
