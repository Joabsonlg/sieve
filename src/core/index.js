const {launch} = require('puppeteer');
const {navigateTo} = require('../modules/navigation');

let browser;
let page;

const steps = [];
const FILES_PATH = '/home/your_name/Documents';

/**
 * Configures the Puppeteer automation with the specified options.
 * @param {Object} options - The configuration options for Puppeteer.
 * @param {boolean} [options.headless=true] - Whether to run Puppeteer in headless mode or not.
 * @returns {Promise<void>} - A promise that resolves when the configuration is complete.
 */
async function configure(options) {
    const defaultOptions = {
        headless: false,
    };
    const mergedOptions = {...defaultOptions, ...options};
    browser = await launch(mergedOptions);
    page = await browser.newPage();
}

/**
 * Adds a step function to the list of automation steps to be executed.
 * @param {function} stepFunction - The step function to be added.
 * @returns {void}
 */
async function addStep(stepFunction) {
    steps.push(stepFunction);
}

/**
 * Runs the Puppeteer automation on the specified URL.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<void>} - A promise that resolves when the automation is complete.
 */
async function run(url) {
    await navigateTo(page, url);
    await Promise.all(steps.map(step => step(page)));
}

module.exports = {
    configure,
    addStep,
    run,
    FILES_PATH
};