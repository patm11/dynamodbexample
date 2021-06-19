import { exampleDynamoDb } from "./exampleDynamoDb";
import { CREATE_TABLE_INPUT } from "../constants";

export const createTables = (): Promise<void> => {

    return new Promise<void>((success, failure) => {

        exampleDynamoDb.createTable(CREATE_TABLE_INPUT).promise().then((result) => {
            console.info(`SUCCESS: ${JSON.stringify(result)}`);
            success();
        }).catch((error) => {
            console.error(`FAILURE: ${JSON.stringify(error)}`);
            failure(error);
        });
    });
}