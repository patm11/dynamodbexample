import { RequestHandler } from "express"
import { putItem } from "../dynamodb/dynamoAccess";

export const appHeartBeatGET = (): RequestHandler => {
    return (request, response) => {
        response.send("The app works")
    }
}

export const createItemPOST = (): RequestHandler => {
    return (request, response) => {
        console.log(request.body);
        putItem(JSON.parse(request.body)).then(() => {
            console.log("Successfully added item");
            response.sendStatus(200);
        }).catch(() => {
            response.sendStatus(500);
        });
    }
}