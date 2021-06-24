const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function startDockerApp () {
  const { stdout, stderr } = await exec("yarn start:docker");
  console.info(stdout);
  console.info(stderr);
}

async function runFunctionalTests () {
  console.info("Intentional pause to allow docker-compose to complete");
  await new Promise(resolve => { setTimeout(resolve, 3000); });
  const { stdout, stderr } = await exec("yarn test:functional");
  console.info(stdout);
  console.info(stderr);
}

async function stopDockerApplication () {
  console.info("Shutting down docker compose...");
  const { stdout, stderr } = await exec("yarn stop:docker");
  console.info(stdout);
  console.info(stderr);
}

async function functionalTestHandler () {
  try {
    // start the app
    await startDockerApp();
    // run the functional tests
    await runFunctionalTests();
  } catch (error) {
    console.log(`Error during functional test exec: ${JSON.stringify(error)}`);
  } finally {
    // shut down the application after tests have run
    await stopDockerApplication();
  }
}

functionalTestHandler()
  .then(() => {
    console.info("End functional test script");
  })
  .catch(() => {
    console.error("Functional test script ran unsuccessfully");
  });
