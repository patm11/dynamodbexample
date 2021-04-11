import {DocumentClient} from "aws-sdk/clients/dynamodb";
import {exampleDynamoOptions} from "./exampleDynamoOptions";


export const exampleDynamoClient = new DocumentClient(exampleDynamoOptions)