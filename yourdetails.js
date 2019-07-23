// const puppeteer = require('puppeteer');

async function applicationType(page) {
    const application_type = page.$x('//input[@id="application_type_single"]'); //Applciation Type 
    await application_type[0].click();
}

async function numberOfDependants(page) {
    console.log("Number of dependants function");
    console.log(page);
    const number_of_dependants = await page.$x('//select[@title="Number of dependants"]'); //Number of dependants drop down
    // const number_of_dependants = await page.$x('//select[@title="Number of dependants"]'); //Number of dependants drop down
    const number_of_dependants_option = await page.$x('//select[@title="Number of dependants"]/option'); //Number of dependants drop down
    await number_of_dependants[0].click();
}

async function propertyType(page) {
    const property_type = page.$x('//*[@id="borrow_type_home"]'); //Borrower Type
    // c. buying a home to live in, 
        // await property_type.click()
}

module.exports = { applicationType, numberOfDependants, propertyType };