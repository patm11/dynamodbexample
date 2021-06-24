import { putItem } from "../../src/dynamodb/dynamoAccess";
import { Item } from "../../src/items/item";
import { mocked } from "ts-jest/utils";
import { exampleDynamoDb } from "../../src/dynamodb/exampleDynamoDb";

jest.mock("../../src/dynamodb/exampleDynamoDb");
const dynamoDbMock = mocked(exampleDynamoDb);

describe("Dynamo Access tests", () => {
  beforeEach(() => {
    dynamoDbMock.putItem.mockClear();
  });

  it("Can put item", () => {
    const id = "some_id";
    const date = new Date();
    const item = new Item(id, date);

    putItem(item);

    expect(dynamoDbMock.putItem).toBeCalledTimes(1);
    // const actualParams: PutItemInput = dynamoDbMock.putItem.mock.calls[0][0];
    //
    // // make sure the PutItemInput contains the expected values
    // expect(actualParams.TableName).toEqual(TABLE_NAME);
    // expect(actualParams.Item.id.S).toEqual(id);
    // expect(actualParams.Item.date.N).toEqual(
    //   `${date.getTime()}`
    // );
  });

  it("Can get an item", () => {

  });
});
