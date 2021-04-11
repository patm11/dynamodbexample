import { exampleDynamoClient } from "./exampleDynamoClient";
import { Item } from "../items/item";
import { BUILD_PUT_ITEM_INPUT } from "../constants";

export const putItem = (item: Item): Promise<void> => {

    const {id, date} = item;

    return new Promise<void>((success, failure) => {
        exampleDynamoClient.put(BUILD_PUT_ITEM_INPUT(id, date), (error, response) => {
            if (error) {
                console.log(JSON.stringify(error));
                failure();
            } else {
                console.log("Success: " + JSON.stringify(response))
                success();
            }
        });
    });
}