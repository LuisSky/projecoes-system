const supertest = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/auth';

describe('Testing Auth router', () => {
  test('Should responde 401 with invalid password', async () => {
    return supertest(app).post(MAIN_ROUTE)
      .send({ email: 'anyuser@mail.com', password: 'anypassword' })
      .then((res) => {
        expect(res.status).toBe(401);
      });
  });
});
