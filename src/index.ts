import { createTables } from "./dynamodb/createTables";
import { setupEndpoints } from "./controller/controller";
import { exampleApp } from "./exampleApp";
import { exampleLogger } from "./exampleLogger";

const port = 3000;

createTables()
  .then(() => {
    return setupEndpoints();
  })
  .then(() => {
    exampleApp.listen(port, () => {
      exampleLogger.info(`Express listening on port ${port}`);
    });
  })
  .catch((error) => {
    exampleLogger.error("Failure during startup: " + error);
  });
