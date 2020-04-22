const supertest = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/auth';


describe('Tests for signin route', () => {

  test('Should response statuscode 200 in signin route', async () => {
    return supertest(app).get(`${MAIN_ROUTE}/signin`)
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  test('Should responde 401 with invalid password', async () => {
    return supertest(app).post(`${MAIN_ROUTE}/signin`)
      .send({ email: 'anyuser@mail.com', password: 'anypassword' })
      .then((res) => {
        expect(res.status).toBe(401);
      });
  });
});
