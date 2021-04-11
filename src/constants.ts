import {
    AttributeDefinition,
    AttributeDefinitions, AttributeValue,
    CreateTableInput,
    KeySchema,
    KeySchemaElement, PutItemInput, PutItemInputAttributeMap,
} from "aws-sdk/clients/dynamodb";

export const TABLE_NAME: string = "TestTable";
const ATTRIBUTE_ID: string = "id";
const ATTRIBUTE_DATE: string = "date";

const HASH: string = "HASH";
const RANGE: string = "RANGE";

const ATTRIBUTE_TYPE_STRING: string = "S";
const ATTRIBUTE_TYPE_NUMBER: string = "N";

const KEY_SCHEMA_ID_ELEMENT: KeySchemaElement = {
    AttributeName: ATTRIBUTE_ID, KeyType: HASH
};

const KEY_SCHEMA_DATE_ELEMENT: KeySchemaElement = {
    AttributeName: ATTRIBUTE_DATE, KeyType: RANGE
};

const ATTRIBUTE_DEFINITION_ID: AttributeDefinition = {
    AttributeName: ATTRIBUTE_ID, AttributeType: ATTRIBUTE_TYPE_STRING
};

const ATTRIBUTE_DEFINITION_DATE: AttributeDefinition = {
    AttributeName: ATTRIBUTE_DATE, AttributeType: ATTRIBUTE_TYPE_NUMBER
}

const ATTRIBUTE_DEFINITIONS: AttributeDefinitions = [
    ATTRIBUTE_DEFINITION_ID,
    ATTRIBUTE_DEFINITION_DATE
];

const KEY_SCHEMA: KeySchema = [
    KEY_SCHEMA_ID_ELEMENT,
    KEY_SCHEMA_DATE_ELEMENT
];

export const CREATE_TABLE_INPUT: CreateTableInput = {
    TableName: TABLE_NAME,
    KeySchema: KEY_SCHEMA,
    AttributeDefinitions: ATTRIBUTE_DEFINITIONS,
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
}

const BUILD_ID_ATTRIBUTE_VALUE = (id: string): AttributeValue => {
    return {
        S: id
    }
};

const BUILD_DATE_ATTRIBUTE_VALUE = (date: Date): AttributeValue => {
    return {
        N: date.getUTCMilliseconds().toString()
    }
};

const BUILD_ATTRIBUTE_MAP = (idAttributeValue: AttributeValue, dateAttributeValue: AttributeValue): PutItemInputAttributeMap => {
    return {
        [ATTRIBUTE_ID]: idAttributeValue,
        [ATTRIBUTE_DATE]: dateAttributeValue
    }
}

export const BUILD_PUT_ITEM_INPUT = (id: string, date: Date): PutItemInput => {
    return {
        TableName: TABLE_NAME,
        Item: BUILD_ATTRIBUTE_MAP(BUILD_ID_ATTRIBUTE_VALUE(id), BUILD_DATE_ATTRIBUTE_VALUE(date))
    };
}