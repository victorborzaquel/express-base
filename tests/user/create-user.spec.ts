import * as request from 'supertest';
import {UserJson} from '../../src/api/presenters/user.presenter';
import {CreateUserDto} from '../../src/cases/create-user';
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
    const dto: CreateUserDto = {
      name: 'Victor4',
      password: '123',
      username: 'victor',
    };
    return request(http)
      .post('/users')
      .set('Accept', 'application/json')
      .send(dto)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response: {body: UserJson}) => {
        expect(response.body.name).toEqual('Victor4');
        expect(response.body.id).toBeTruthy();
        expect(response.body.createdAt).toBeTruthy();
        expect(response.body.updatedAt).toBeTruthy();
        expect(response.body.username).toEqual('victor');
        expect(response.body['password']).toBeUndefined();
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
