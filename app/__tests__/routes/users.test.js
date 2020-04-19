const supertest = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/users';

test('Should response statuscode 200 in users route', () => {
  return supertest(app).get(MAIN_ROUTE)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

test('Should response users json list', () => {
  return supertest(app).get(MAIN_ROUTE)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});
