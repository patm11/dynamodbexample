import { mocked } from "ts-jest";
import { createTables } from "./createTables";
import { exampleDynamoDb } from "./exampleDynamoDb";

jest.mock("./exampleDynamoDb");
const dynamoDbMock = mocked(exampleDynamoDb);

describe("Create tables tests", () => {

    beforeEach(() => {
        dynamoDbMock.createTable.mockClear();
    });

    it("Create tables is called with the expected input", () => {
        createTables();
    })
})