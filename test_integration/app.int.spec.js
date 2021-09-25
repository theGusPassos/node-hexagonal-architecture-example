import request from 'supertest'
import app from '../src/app'

describe('GET /heroes', () => {
  it('should respond with only default hero', async() => {
    const response = await request(app).get('/heroes')
    expect(response.statusCode).toBe(200)
  })
})
