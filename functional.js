const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function functionalTestHandler() {
    try {
        // start the app and run the functional tests
        // TODO: express starting sort of "locks" the process (you do want a server to run until you give it a stop command afterall)
        const { stdout, stderr } = await exec("yarn start:docker")

        if(stderr) {
            console.error(JSON.stringify(stderr));
        } else {
            console.info(JSON.stringify(stdout));
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    } finally {
        const { stdout, stderr } = await exec("yarn docker:stop");

        if(stderr) {
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