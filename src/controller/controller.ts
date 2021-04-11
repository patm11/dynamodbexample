import { appHeartBeatGET, createItemPOST } from "./requestHandlers";
import { exampleApp } from "../exampleApp";

export const setupEndpoints = (): Promise<void> => {

    return new Promise<void>((success, failure) => {
        try {
            // heartbeat endpoint - lets us know the app is responding
            exampleApp.get("/", appHeartBeatGET());
            // create item endpoint - create items in DynamoDB
            exampleApp.post("/item", createItemPOST());

            success();
        } catch (error) {
            console.log(error);
            failure();
        }
    });
}