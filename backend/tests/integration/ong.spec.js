const request = require('supertest');
const app = require('../../src/app');
const connetion = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async() => {
        await connetion.migrate.rollback();
        await connetion.migrate.latest();
    });

    afterAll(async() => {
        await connetion.destroy();
    });

    it('should be able to create a new ONG', async() => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAE",
            email: "contato@apae.com.br",
            whatsapp: "43000000000",
            city: "Carlopolis",
            uf: "PR"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});