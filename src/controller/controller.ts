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

      success();
    } catch (error) {
      exampleLogger.error(error);
      failure();
    }
  });
};
