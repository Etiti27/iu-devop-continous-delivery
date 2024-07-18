// __tests__/app.test.js
const request = require('supertest');
const app = require('../app')

describe('User API', () => {
  afterEach(() => {
    // Clear the users array after each test
    app.locals.users = [];
  });

  it('should create a new user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };

    const response = await request(app)
      .post('/users')
      .send(newUser)
      .expect(201);

    expect(response.body).toEqual(newUser);
  });

  it('should retrieve users', async () => {
    const newUser = { name: 'Jane Doe', email: 'jane@example.com' };

    await request(app)
      .post('/users')
      .send(newUser);

    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.body).toEqual([newUser]);
  });
});
