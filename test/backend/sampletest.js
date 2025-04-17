const request = require('supertest');
const app = require('../../backend/app');

describe('GET /api/items', () => {
    it('should return a list of items', async () => {
        const response = await request(app).get('/api/items');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
