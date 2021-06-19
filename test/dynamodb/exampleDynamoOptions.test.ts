import { DynamoOptionsConfig, getConfigValue } from "../../src/dynamodb/exampleDynamoOptions";

describe("Test the get config function", () => {

    it("Get default value when expected", () => {
        const defaultValue = "http://localhost:5000/default";
        const propertyName = "BLAH_URL";
        const config: DynamoOptionsConfig = {
            defaultValue: defaultValue,
            propertyName: propertyName
        }

        const result = getConfigValue(config);

        expect(result).toEqual(defaultValue);
    });

    it("Get expected environment property", () => {
        const environmentVariable = "SOME_DB_USERNAME";
        const defaultValue = "dummy";
        const propertyName = "DB_USERNAME";

        process.env[propertyName] = environmentVariable;

        const config: DynamoOptionsConfig = {
            defaultValue: defaultValue,
            propertyName: propertyName
        }

        const result = getConfigValue(config);

        expect(result).toEqual(environmentVariable);
    });
});