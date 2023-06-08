const core = require('./src/core');
const { URL, getSteps } = require('./src/robots/myApp');

/**
 * Runs the framework to perform a specific task.
 *
 * @returns {Promise<void>} A promise that resolves when the framework execution is complete.
 */
async function runFramework() {
    await core.configure({});
    getSteps().forEach(step => core.addStep(step));
    await core.run(URL);
}

runFramework().then(() => {
    console.log('Done!');
    process.exit(0);
}).catch(error => {
    console.error(error);
    process.exit(1);
});