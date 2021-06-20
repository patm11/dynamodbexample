import { DynamoDB } from "aws-sdk";
import { exampleDynamoOptions } from "./exampleDynamoOptions";

export const exampleDynamoDb = new DynamoDB(exampleDynamoOptions);
