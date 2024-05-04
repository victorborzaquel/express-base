import * as request from 'supertest';
import {db} from '../../src/database';
import {http} from '../../src/http';

describe('Create User (E2E)', () => {
  beforeAll(async () => {
    await db.initialize();
  });
  afterAll(async () => {
    await db.dropDatabase();
    await db.destroy();
  });
  it('should create a user', async () => {
    return request(http)
      .post('/users')
      .set('Accept', 'application/json')
      .send({name: 'Victor4'})
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.name).toEqual('Victor4');
      });
  });
  it('should create a user', async () => {
    return request(http)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        console.log(response.body);
        expect(response.body[0].name).toEqual('Victor4');
      });
  });
});
