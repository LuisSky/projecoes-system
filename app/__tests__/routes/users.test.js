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

describe('Insert user tests', () => {

  const inserUserTemplate = async (overWriteData, callBack) => {
    const validData = { name: 'any Name', password: 'anypassword', email: `${Date.now()}@mail.com` };
    return supertest(app).post(MAIN_ROUTE)
      .send({ ...validData, ...overWriteData })
      .then((res) => callBack(res));
  };

  test('Should insert user with sucess', () => {
    return inserUserTemplate({}, (res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('any Name');
    });
  });

  test('Should store the encrypted password', () => {

    const pass = 'testpassword';

    return inserUserTemplate({ password: pass }, (res) => {
      expect(res.status).toBe(201);
      expect(res.body.password).not.toBe(pass);
    });
  });

});
