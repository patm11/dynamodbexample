import { createTables } from "./dynamodb/createTables";
import { setupEndpoints } from "./controller/controller";
import { exampleApp } from "./exampleApp";

const port = 3000

createTables().then(() => {
    return setupEndpoints();
}).then(() => {
    exampleApp.listen(port, () => {
        console.log(`Express listening on port ${port}`);
    })
}).catch((error) => {
    console.log("Failure during startup: " + error);
});