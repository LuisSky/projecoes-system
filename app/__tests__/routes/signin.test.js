const supertest = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/signin';

test('Should response statuscode 200 in signin route', () => {
  return supertest(app).get(MAIN_ROUTE)
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
