/**
 * Extracts the text from the element matching the specified selector on the page.
 *
 * @param {Page} page - The Puppeteer page instance.
 * @param {string} selector - The selector of the element to extract text from.
 * @returns {Promise<string>} A promise that resolves to the extracted text from the element.
 */
const extractText = (page, selector) => {
    const element = page.$(selector);
    return element.evaluate((node) => node.innerText);
};

/**
 * Extracts the value of the specified attribute from the element matching the selector on the page.
 *
 * @param {Page} page - The Puppeteer page instance.
 * @param {string} selector - The element selector.
 * @param {string} attributeName - The name of the attribute to extract.
 * @returns {Promise<string|null>} A promise that resolves to the extracted attribute value or null if not found.
 */
const extractAttribute = async (page, selector, attributeName) => {
    await page.waitForSelector(selector);
    const element = page.$(selector);
    return element.evaluate((node, attr) => node.getAttribute(attr), attributeName);
};

/**
 * Extracts the data from a table on the page.
 *
 * @param {Page} page - The Puppeteer page instance.
 * @param {string} tableSelector - The selector of the table to extract.
 * @returns {Promise<Array<Array<string>>>} A promise that resolves to an array containing the table data,
 *    where each array element represents a row in the table and contains an array of column values.
 */
const extractTable = async (page, tableSelector) => {
    await page.waitForSelector(tableSelector);
    const table = await page.$(tableSelector);
    const rows = await table.$$('tr');
    return await extractDataFromRows(rows);
};

const extractDataFromRows = async (rows) => {
    const tableData = [];
    for (const row of rows) {
        const columns = await row.$$('td');
        const rowData = [];
        for (const column of columns) {
            const cellValue = await column.evaluate((node) => node.innerText);
            rowData.push(cellValue);
        }
        tableData.push(rowData);
    }
    return tableData;
};

module.exports = {
    extractText,
    extractAttribute,
    extractTable,
};