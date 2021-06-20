import { mocked } from "ts-jest/utils";
import { createTables } from "../../src/dynamodb/createTables";
import { exampleDynamoDb } from "../../src/dynamodb/exampleDynamoDb";
import { CREATE_TABLE_INPUT } from "../../src/constants";

jest.mock("../../src/dynamodb/exampleDynamoDb");
const dynamoDbMock = mocked(exampleDynamoDb);

describe("Create tables tests", () => {
  beforeEach(() => {
    dynamoDbMock.createTable.mockClear();
  });

  it("Create tables is called with the expected input", async () => {
    (dynamoDbMock.createTable as jest.Mock).mockReturnValue({
      promise: () => Promise.resolve({})
    });

    await createTables();

    expect(dynamoDbMock.createTable).toBeCalledWith(CREATE_TABLE_INPUT);
  });
});
