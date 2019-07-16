const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized', '--window-size=1920,1080']});
    const page = await browser.newPage();
    const myurl = "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/"
    await page.goto(myurl);
    


    //FUNCTION()
    //Initialize the XPaths for each element we're looking at 
    const application_type = await page.$x('//input[@id="application_type_single"]'); //Applciation Type 
    const number_of_dependants = await page.$x('//select[@title="Number of dependants"]'); //Number of dependants drop down
    const number_of_dependants_option = await page.$x('//select[@title="Number of dependants"]/option'); //Number of dependants drop down
    const property_type = await page.$x('//*[@id="borrow_type_home"]'); //Borrower Type
    const your_earnings = await page.$x('//input[@aria-labelledby="q2q1"]'); // Your Earnings Input Box
    const your_other_income = await page.$x('//input[@aria-labelledby="q2q2"]'); //Your other Income
    const living_expenses = await page.$x('//input[@aria-labelledby="q3q1"]'); //Living Expenses
    const current_home_loan_repayments = await page.$x('//input[@aria-labelledby="q3q2"]'); //Current Home Loan Repayments 
    const other_loan_repayments = await page.$x('//input[@aria-labelledby="q3q3"]'); //Current Home Loan Repayments 
    const other_commitments = await page.$x('//input[@aria-labelledby="q3q4"]'); //Other Commitments
    const total_credit_card_limits = await page.$x('//input[@aria-labelledby="q3q5"]'); //Current Home Loan Repayments 
    const calculate_button = await page.$x("//button[contains(., 'Work out how much I could borrow')]");
    const start_over_button = await page.$x('//button[@class="start-over"]');
    const error_text = await page.$x('//span[@class="borrow__error__text"]');

    // a.	Single, 
    // await application_type[0].click();

    // b.	0 dependants, 
    await number_of_dependants[0].click();
    // await page.select('//select[@title="Number of dependants"]/option', '0');
    // await number_of_dependants_option[0].click();
    // console.log(number_of_dependants_option.length);
    // await number_of_dependants_option[0].select("0");
    // const number_of_dependants_options = page.$x('//*[@id="application_type_single"]/option');
    // for (let option of number_of_dependants_options) {
    //     // await console.log(page.evaluate(el => el.innerHTML, option));
    //     console.log(option);
    // }
    
    // c.	buying a home to live in, 
    // await property_type.click()
    
    // d.	with income of $80,000, 
    await your_earnings[0].click()
    await your_earnings[0].type("80000")

    // e.	other income $10,000, 
    await your_other_income[0].click()
    await your_other_income[0].type("10000")

    // f.	living expenses $500, 
    await living_expenses[0].click()
    await living_expenses[0].type("500")

    // g.	current home loan repayments $0,
    await current_home_loan_repayments[0].click()
    await current_home_loan_repayments[0].type("0")

    // h.	other loan repayments $100, 
    await other_loan_repayments[0].click();
    await other_loan_repayments[0].type("100");

    // i.	other commitments $0 
    await other_commitments[0].click();
    await other_loan_repayments[0].type("0");

    // j.	and total credit card limits $10,000 
    await total_credit_card_limits[0].click();
    await total_credit_card_limits[0].type("10000");

    await page.screenshot({path: 'result/fillinfo.png'});

    //Click on "Work out how much I could borrow"
    await calculate_button[0].click()

    await page.screenshot({path: 'result/calculateresult.png'});

    // 2.	Clicking the ‘start over’ button clears the form.
    await start_over_button[0].click();

    await page.screenshot({path: 'result/startover.png'});

    /*3. When entering only $1 for Living expenses and leaving all other fields as zero, clicking ‘Work out how much I could borrow’ returns the following message
    “Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.”*/

    //Living Expense = 1
    await living_expenses[0].click()
    await living_expenses[0].type("1")

    //Calculate
    await calculate_button[0].click()

    //Verify the error message
    const error_message = await page.evaluate(text => text.textContent, error_text[0]);
    const find_message = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.";
    if (error_message.trim() == find_message) {
        console.log("Error message is correct");
    }
    else {
        console.log("Error message failed!");
        console.log("From Browser: " + error_message);
        console.log("Epexceted Message: " + find_message);
    }

    await page.screenshot({path: 'result/calculator.png'});
    
    await page.close();

    
})();



