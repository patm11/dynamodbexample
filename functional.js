const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function functionalTestHandler () {
  try {
    // start the app and run the functional tests
    const startDockerOutput = await exec("yarn start:docker");
    console.info(startDockerOutput);
    console.info("Intentional pause to allow docker-compose to complete");
    await new Promise(resolve => { setTimeout(resolve, 3000); });
    const functionalTestOutput = await exec("yarn test:functional");
    console.info(functionalTestOutput);
  } catch (error) {
    console.log(`Error during functional test exec: ${JSON.stringify(error)}`);
  } finally {
    console.info("Shutting down docker compose...");
    const { stdout, stderr } = await exec("yarn stop:docker");

    if (stderr) {
      console.error(JSON.stringify(stderr));
    } else {
      console.info(JSON.stringify(stdout));
    }
  }
}

functionalTestHandler()
  .then(() => {
    console.info("Successful functional test run");
  })
  .catch(() => {
    console.error("Unsuccessful functional test run");
  });
