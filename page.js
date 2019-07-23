
const puppeteer = require('puppeteer');
async function getPage() {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized', '--window-size=1920,1080']});
    const page = await browser.newPage();
    const myurl = "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/"
    await page.goto(myurl);
    return page;
}

module.exports = { getPage }

