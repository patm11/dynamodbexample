/**
 * Defines dynamo options config
 */
export interface DynamoOptionsConfig {
    propertyName: string,
    defaultValue: string
}

/**
 * Gets a value from process.env or the given default value
 *
 * @param {DynamoOptionsConfig} config the options config
 * @returns {string} the config value
 */
export const getConfigValue = (config: DynamoOptionsConfig): string => {
    const { propertyName, defaultValue } = config;
    let rVal = process.env[propertyName];

    if(rVal == undefined) {
        rVal = defaultValue;
    }

    return rVal;
}

const dynamoDbEndpointConfig: DynamoOptionsConfig = {
  propertyName: "DYNAMODB_URL",
  defaultValue: "http://localhost:8000"
};

const accessKeyIdConfig: DynamoOptionsConfig = {
    propertyName: "DYNAMODB_ACCESS_KEY_ID",
    defaultValue: "dummy"
};

const secretAccessKeyConfig: DynamoOptionsConfig = {
    propertyName: "DYNAMODB_SECRET_ACCESS_KEY",
    defaultValue: "dummy"
};

const regionConfig: DynamoOptionsConfig = {
    propertyName: "AWS_REGION",
    defaultValue: "us-west-2"
};

const dynamoDbEndpoint = getConfigValue(dynamoDbEndpointConfig);
const accessKeyId = getConfigValue(accessKeyIdConfig);
const secretAccessKey = getConfigValue(secretAccessKeyConfig);
const region = getConfigValue(regionConfig);

export const exampleDynamoOptions = {
    endpoint: dynamoDbEndpoint,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    },
    region: region
}