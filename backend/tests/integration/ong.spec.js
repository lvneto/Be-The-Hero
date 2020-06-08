const request = require ('supertest');
const app = require('../../src/app');
const connection = require ('../../src/database/connection');
describe('ONG', () =>{
  beforeEach(async ()=>{
    await connection.migrate.latest();

  });
  afterAll(async()=>{
    await connection.destroy();
  })

  it ('Should be able to create a new ONG',async () =>{
    const response = await request(app)
    .post('/ongs')
    .send( {
        name: "APAD",
        email:"contato@teste.bruno.br",
        whatsapp:"4700000000",
        city:"Rio Grande do Sul",
        uf:"sc"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
    });
});