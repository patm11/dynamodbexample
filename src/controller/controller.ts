import { requestHandlers } from "./requestHandlers";
import { exampleApp } from "../exampleApp";
import { exampleLogger } from "../exampleLogger";

export const setupEndpoints = (): Promise<void> => {
  return new Promise<void>((success, failure) => {
    try {
      // heartbeat endpoint - lets us know the app is responding
      exampleApp.get("/", requestHandlers.appHeartBeatGET());
      // create item endpoint - create items in DynamoDB
      exampleApp.post("/item", requestHandlers.createItemPOST());
      // get item endpoint - get stored items from Dynamo
      exampleApp.get("/item/:id", requestHandlers.getItemsGET());

      success();
    } catch (error) {
      exampleLogger.error(error);
      failure();
    }
  });
};
