import { putItem } from "../../src/dynamodb/dynamoAccess";
import { Item } from "../../src/items/item";
import { exampleDynamoClient } from "../../src/dynamodb/exampleDynamoClient";
import { mocked } from "ts-jest/utils";
import { PutItemInput } from "aws-sdk/clients/dynamodb";
import { TABLE_NAME } from "../../src/constants";

jest.mock("../../src/dynamodb/exampleDynamoClient");
const dynamoClientMock = mocked(exampleDynamoClient);

describe("Dynamo Access tests", () => {

    beforeEach(() => {
        dynamoClientMock.put.mockClear();
    });

    it("Can put item", () => {
        const id = "some_id";
        const date = new Date();
        const item = new Item(id, date);

        putItem(item);

        expect(dynamoClientMock.put).toBeCalledTimes(1);
        const actualParams: PutItemInput = dynamoClientMock.put.mock.calls[0][0];

        // make sure the PutItemInput contains the expected values
        expect(actualParams.TableName).toEqual(TABLE_NAME);
        expect(actualParams.Item.id.S).toEqual(id);
        expect(actualParams.Item.date.N).toEqual(date.getUTCMilliseconds().toString());
    });
});