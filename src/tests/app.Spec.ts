/* eslint-disable prettier/prettier */
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Test end point response', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});
