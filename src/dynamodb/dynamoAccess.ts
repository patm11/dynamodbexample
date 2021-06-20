import { exampleDynamoClient } from "./exampleDynamoClient";
import { Item } from "../items/item";
import { BUILD_GET_ITEM_INPUT, BUILD_PUT_ITEM_INPUT } from "../constants";
import { exampleLogger } from "../exampleLogger";

export const putItem = (item: Item): Promise<void> => {
  const { id, date } = item;

  return new Promise<void>((success, failure) => {
    exampleDynamoClient.put(BUILD_PUT_ITEM_INPUT(id, date), (error, response) => {
      if (error) {
        exampleLogger.error(JSON.stringify(error));
        failure();
      } else {
        exampleLogger.info("Success: " + JSON.stringify(response));
        success();
      }
    });
  });
};

export const getItem = (id: string, date: Date): Promise<Item> => {
  return new Promise<Item>((success, failure) => {
    exampleDynamoClient.get(BUILD_GET_ITEM_INPUT(id, date), (error, response) => {
      if (error) {
        exampleLogger.error(JSON.stringify(error));
        failure();
      } else {
        exampleLogger.debug(JSON.stringify(response));
        // TODO: parse from the response
        return new Item("some_id", new Date());
      }
    });
  });
};
