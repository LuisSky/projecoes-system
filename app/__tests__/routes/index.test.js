const supertest = require('supertest');
const app = require('../../src/app');

test('Should response statuscode 200 in main route', () => {
  return supertest(app).get('/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
