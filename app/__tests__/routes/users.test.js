const supertest = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/users';

test('Should response statuscode 200 in users route', async () => {
  return supertest(app).get(MAIN_ROUTE)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);

    });
});

test('Should response users json list', async () => {
  return supertest(app).post(MAIN_ROUTE)
    .send({ name: 'any Name', password: 'anypassword', email: `${Date.now()}@mail.com` })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('any Name');
    });
});
