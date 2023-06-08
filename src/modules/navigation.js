/**
 * Navigates the given page to the specified URL.
 *
 * @param {Page} page - The Puppeteer page object.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<Response>} A promise that resolves to the response when the navigation is complete.
 */
const navigateTo = async (page, url) => await page.goto(url);

/**
 * Clicks the element matching the provided selector on the given page.
 *
 * @param {Page} page - The Puppeteer page object.
 * @param {string} selector - The selector of the element to click.
 * @returns {Promise<void>} A promise that resolves when the element is successfully clicked.
 */
const clickElement = async (page, selector) => {
    await page.waitForSelector(selector);
    await page.click(selector);
}

/**
 * Follows the link specified by the link selector on the given page.
 *
 * @param {Page} page - The Puppeteer page object.
 * @param {string} linkSelector - The selector of the link element to follow.
 * @returns {Promise<void>} A promise that resolves when the link is successfully followed.
 */
const followLink = async (page, linkSelector) => await page.$(linkSelector).then(link => link.click());

module.exports = {
    navigateTo,
    clickElement,
    followLink,
};