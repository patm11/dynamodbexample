import { RequestHandler } from "express"
import { getItem, putItem } from "../dynamodb/dynamoAccess";
import { exampleLogger } from "../exampleLogger";

interface RequestHandlers {
    appHeartBeatGET: () => RequestHandler
    createItemPOST: () => RequestHandler
    getItemGET: () => RequestHandler
}

class ExampleRequestHandlers implements RequestHandlers {
    appHeartBeatGET(): RequestHandler {
        return (request, response) => {
            exampleLogger.info("Request received at heartbeat endpoint");
            response.send("The app works");
        };
    }

    createItemPOST(): RequestHandler {
        return (request, response) => {
            exampleLogger.info("Create item POST request body: " + request.body);
            putItem(request.body).then(() => {
                exampleLogger.info("Successfully added item");
                response.sendStatus(200);
            }).catch(() => {
                response.sendStatus(500);
            });
        };
    }

    getItemGET(): RequestHandler {
        return (request, response) => {
            // TODO: parse inputs from the request and send to dynamo access
        };
    }

}

export const requestHandlers = new ExampleRequestHandlers();