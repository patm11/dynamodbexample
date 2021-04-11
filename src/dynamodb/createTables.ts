import { exampleDynamoDb } from "./exampleDynamoDb";
import { CREATE_TABLE_INPUT } from "../constants";

export const createTables = (): Promise<void> => {

    return new Promise<void>((success, failure) => {

        exampleDynamoDb.createTable(CREATE_TABLE_INPUT, (error, output) => {
            if (error) {
                console.log(JSON.stringify(error));
                failure();
            } else {
                console.log(JSON.stringify(output))
                success();
            }
        });
    });
}