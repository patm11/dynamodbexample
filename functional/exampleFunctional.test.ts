import axios from "axios";
import { Item } from "../src/items/item";

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

  it("Can create and retrieve a new item", async () => {
    const id = "someId";
    const date = new Date();
    const item = new Item(id, date);

    const responsePOST = await client.post("/item", item);

    expect(responsePOST.status).toEqual(200);

    const responseGET = await client.get(`/item/${id}`);

    expect(responseGET.status).toEqual(200);
    expect(responseGET.data).toBeTruthy();
    expect(responseGET.data[0].id).toEqual(id);
  });
});
