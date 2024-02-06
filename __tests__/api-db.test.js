const request = require("supertest");
const app = require("../api/app");
const db = require("../db/connection");

afterAll(() => db.end());

describe('GET /api/book', () => {
    test('200: responds with books', () => {
        return request(app)
        .get("/api/book")
        .expect(200)
        .then(({body})=>{
            console.log(body)
        })
    });
});