const XlsxPopulate = require('xlsx-populate');

/**
 * Saves the provided data to an XLSX file at the specified file path.
 *
 * @param {Array<Array<any>>} data - The data to be saved, represented as a two-dimensional array.
 * @param {string} filePath - The file path to save the XLSX file.
 * @returns {Promise<void>} A promise that resolves when the XLSX file is successfully saved.
 */
const saveToXlsx = async (data, filePath) => {
    const workbook = await XlsxPopulate.fromBlankAsync();
    const sheet = workbook.sheet(0);

    let rowIndex = 1;
    for (const rowData of data) {
        let columnIndex = 1;
        for (const cellData of rowData) {
            sheet.cell(rowIndex, columnIndex).value(cellData);
            columnIndex++;
        }
        rowIndex++;
    }

    await workbook.toFileAsync(filePath);
};

module.exports = {
    saveToXlsx,
};