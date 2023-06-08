const {clickElement} = require("../modules/navigation");
const {extractTable} = require("../modules/extraction");
const {saveToXlsx} = require("../modules/dataPersistence");
const {FILES_PATH} = require("../core");
const {runFramework} = require("../../index");

const URL = 'https://exemplo.com.br';

/**
 * Retrieves the steps for performing a specific task.
 *
 * @returns {Array<Function>} An array of step functions.
 */
const getSteps = () => {
    /**
     * Step 1: Clicks on the element with the selector '#id a'.
     *
     * @param {Page} page - The Puppeteer page instance.
     * @returns {Promise<void>} A promise that resolves when the step is complete.
     */
    const step1 = (page) => clickElement(page, '#id a');

    /**
     * Step 2: Clicks on the element with the selector '#buttonId'.
     *
     * @param {Page} page - The Puppeteer page instance.
     * @returns {Promise<void>} A promise that resolves when the step is complete.
     */
    const step2 = (page) => clickElement(page, '#buttonId');

    /**
     * Step 3: Extracts data from the table with the selector '#tableId'
     * and saves it to a file.
     *
     * @param {Page} page - The Puppeteer page instance.
     * @returns {Promise<void>} A promise that resolves when the step is complete.
     */
    const step3 = async (page) => {
        const data = await extractTable(page, '#tableId');
        await saveToXlsx(data, `${FILES_PATH}/result.xlsx`);
    };

    return [step1, step2, step3];
};

/**
 * Runs the robot with the provided steps and URL.
 */
const run = async () => {
    const steps = getSteps();
    await runFramework(steps, URL);
}

run().then(() => {
    console.log('Done!')
    process.exit(0);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
