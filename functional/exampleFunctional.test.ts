import axios from "axios";

describe("Functional tests for the dynamodb example web service", () => {
  const BASE_URL = "http://localhost:3000";

  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  });

  it("Can detect the app heartbeat", async () => {
    const response = await client.get("/");

    expect(response.status).toEqual(200);
  });
});
