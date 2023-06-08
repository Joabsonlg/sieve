const core = require('./src/core');

/**
 * Runs the framework to perform a specific task.
 *
 * @returns {Promise<void>} A promise that resolves when the framework execution is complete.
 */
async function runFramework(steps, URL) {
    await core.configure({});
    steps.forEach(step => core.addStep(step));
    await core.run(URL);
}

module.exports = {
    runFramework
}