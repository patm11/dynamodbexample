import { Item } from "../items/item";
import { BUILD_PUT_ITEM_INPUT, BUILD_QUERY_INPUT } from "../constants";
import { exampleLogger } from "../exampleLogger";
import { exampleDynamoDb } from "./exampleDynamoDb";
import { convert } from "../items/itemConverter";

export const putItem = async (item: Item): Promise<void> => {
  return new Promise<void>((success, failure) => {
    const { id, date } = item;
    const input = BUILD_PUT_ITEM_INPUT(id, date);
    exampleLogger.info(`Put item input: ${JSON.stringify(input)}`);
    exampleDynamoDb
      .putItem(input)
      .promise()
      .then((result) => {
        exampleLogger.info(`Successful put item: ${JSON.stringify(result)}`);
        success();
      })
      .catch((error) => {
        exampleLogger.error(`Error when calling dynamo: ${error}`);
        failure(error);
      });
  });
};

export const getItems = (id: string): Promise<Item[]> => {
  return new Promise<Item[]>((success, failure) => {
    const input = BUILD_QUERY_INPUT(id);
    exampleDynamoDb.query(input)
      .promise()
      .then((result) => {
        exampleLogger.info(`Retrieved items: ${JSON.stringify(result.Items)}`);
        const items = convert(result.Items);
        success(items);
      })
      .catch((error) => {
        exampleLogger.error(`Error during query: ${error}`);
        failure(error);
      });
  });
};
