const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("responds with Hello World!", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });

  it("responds with Woof for GET /dogs", async () => {
    const response = await request(app).get("/dogs");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Woof");
  });
});
