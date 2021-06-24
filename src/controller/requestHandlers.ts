import { RequestHandler } from "express";
import { getItems, putItem } from "../dynamodb/dynamoAccess";
import { exampleLogger } from "../exampleLogger";
import { Item } from "../items/item";

interface RequestHandlers {
    appHeartBeatGET: () => RequestHandler
    createItemPOST: () => RequestHandler
    getItemsGET: () => RequestHandler
}

class ExampleRequestHandlers implements RequestHandlers {
  appHeartBeatGET (): RequestHandler {
    return (request, response) => {
      exampleLogger.info("Request received at heartbeat endpoint");
      response.send("The app works");
    };
  }

  createItemPOST (): RequestHandler {
    return async (request, response) => {
      exampleLogger.info(`Create item POST request body: ${JSON.stringify(request.body)}`);
      await putItem(request.body as Item).then(() => {
        exampleLogger.info("Successfully added item");
        response.sendStatus(200);
      }).catch((error) => {
        exampleLogger.error(`Error when handling POSTed item: ${JSON.stringify(error)}`);
        response.sendStatus(500);
      });
    };
  }

  getItemsGET (): RequestHandler {
    return async (request, response) => {
      // TODO: parse inputs from the request and send to dynamo access
      const params = request.params;
      exampleLogger.info(`Params: ${JSON.stringify(params)}`);
      if (!params.id) {
        response.sendStatus(400);
      }

      const items = await getItems(params.id)
        .catch((error) => {
          exampleLogger.error(`Error getting items: ${JSON.stringify(error)}`);
          response.sendStatus(500);
        });

      response.send(items);
    };
  }
}

export const requestHandlers = new ExampleRequestHandlers();
