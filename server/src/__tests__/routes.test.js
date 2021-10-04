const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});
describe("POST /api/events", () => {
  describe("given firstName, lastName, email, date", () => {
    //should respond with json object containing event object
    test("should respond with json object containing event", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "Test",
        lastName: "Testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.body.firstName).toBe("Test");
      expect(response.body.lastName).toBe("Testtest");
      expect(response.body.email).toBe("test@test.pl");
      expect(response.body.date).toBe("2021-10-04T00:00:00.000Z");
    });

    //should response status 200 code
    test("should response status 200 code", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "Test",
        lastName: "Testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(200);
    });
    //should specify json in content type header
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "Test",
        lastName: "Testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
  describe("Required fields are missing", () => {
    test("firstName missing - should response with status code 400 and error First Name is required", async () => {
      const response = await request(app).post("/api/events").send({
        lastName: "Testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["First Name is required"]);
    });
    test("lastName missing - should response with status code 400 and error Last Name is required", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["Last Name is required"]);
    });
    test("email missing - should response with status code 400 and error Email is required", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "testtest",
        lastName: "Testtest",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["Email is required"]);
    });
    test("date missing - should response with status code 400 and error Date is required", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "testtest",
        lastName: "Testtest",
        email: "test@test.pl",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["Date is required"]);
    });
  });
  describe("Invalid data", () => {
    test("Email address is  not valid - should response with status code 400 and error Email must be a valid email address", async () => {
      const response = await request(app).post("/api/events").send({
        lastName: "Testtest",
        firstName: "testtest",
        email: "test",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual([
        "Email must be a valid email address",
      ]);
    });
    test("First name is not valid - should response with status code 400 and error First name must be valid", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: 1233,
        lastName: "Testtest",
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["First name must be valid"]);
    });
    test("Last name is not valid - should response with status code 400 and error First name must be valid", async () => {
      const response = await request(app).post("/api/events").send({
        firstName: "Testtest",
        lastName: 1234,
        email: "test@test.pl",
        date: "2021-10-04",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toStrictEqual(["Last name must be valid"]);
    });
  });
});
