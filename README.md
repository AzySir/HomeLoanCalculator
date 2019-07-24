# HomeLoanCalculator
<b>Part 1 (FrontEnd Testing Scenario) - Coding Challenge</b><br />
<h6>Part 2 (API Testing Scenario): https://github.com/AzySir/OpenWeather/ </h6>

<hr />
<h2>Overview</h2>

You recently applied for a role of Automation Test Engineer and have made it to the short list of candidates. Since we are looking for someone who can create an automated test framework, we require you to complete the following exercise.

The task consists of programming exercises relating to frontend and API testing. In addition, it also contains related testing questions.

<h2>Frontend Testing Scenario</h2>

Our developers have finished coding a borrowing calculator and would like to make sure that the calculator continues to work as they make other changes to the page. They have asked you to build automated tests covering various use cases to verify that the calculator is working properly. They intend to run these tests as part of continuous testing.

The current working production page is here: https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/

<h3>Exercise</h3>

Develop the following three tests:
1.	A person with the following details: 
a.	Single, 
b.	0 dependants, 
c.	buying a home to live in, 
d.	with income of $80,000, 
e.	other income $10,000, 
f.	living expenses $500, 
g.	current home loan repayments $0,
h.	other loan repayments $100, 
i.	other commitments $0 
j.	and total credit card limits $10,000 
has a borrowing estimate of $479,000.
2.	Clicking the ‘start over’ button clears the form.
3.	When entering only $1 for Living expenses and leaving all other fields as zero, clicking ‘Work out how much I could borrow’ returns the following message
“Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.”


<h2>Implementation Requirements</h2>

•	You will need to create a project in either JavaScript or Java with minimal dependencies <br />
•	The project should use Cucumber (gherkin - BDD) with an open source UI test automation runtime of your choice (e.g. Puppeteer, WebdriverIO) <br />
•	The tests should target a browser of your choice (e.g. Chrome, Firefox) <br />
•	The tests should run through Command Line Interface in order to support CI/CD <br />
•	All tests should pass and produce new results every time they are run <br />
•	The solution should output results to JSON or XML and be able to generate HTML reports from the output file.  <br />





<h2>API Testing Scenario</h2>

Your new team has an upcoming need to implement API testing. They do not have prior experience in that field and have requested you to create a project that will give them a template on how a proper testing solution should be setup and utilised. They intend to run the solution as part of continuous testing.

They have asked you to implement an API testing solution against an open API weather station available from the following URL. Please note that you will to register with the website in order to utilise their API.
https://openweathermap.org/stations

<h3>Exercise</h3>

Using the API specification detailed in the URL above, develop the following tests:

1.	Validate that attempt to register a weather station without an API key will return the following in message body.<br />

cod : 401<br />
message : "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."<br />

2.	Successfully register two stations with the following details and verify that HTTP response code is 201.

<li>"external_id": "DEMO_TEST001",</li>
<li>"name": "Team Demo Test Station 001",</li>
<li>"latitude": 33.33,</li>
<li>"longitude": -122.43,</li>
<li>"altitude": 222</li>
<li>"external_id": "DEMO_TEST002",</li>
<li>"name": "Team Demo Test Station 002",</li>
<li>"latitude": 44.44,</li>
<li>"longitude": -122.44,</li>
<li>"altitude": 111</li>

3.	Using “[GET] /stations” API verify that the stations were successfully stored in the DB and their values are the same as specified in the registration request.

4.	Delete both of the created stations and verify that returned HTTP response is 204.

5.	Repeat the previous step and verify that returned HTTP response is 404 and that message body contains “message”: “Station not found".


<h3>Implementation Requirements</h3>

<li>You will need to create a project in either JavaScript or Java with minimal dependencies</li>
<li>The project should use Cucumber (gherkin - BDD) with an open source test automation runtime of your choice (e.g. Rest Assured)</li>
<li>The tests should run through Command Line Interface in order to support CI/CD</li>
<li>All tests should pass and produce new results every time they are run</li>
<li>The solution should output results to JSON or XML and be able to generate HTML reports from the output file.</li>



<h3>Sharing Instructions</h3>

Please complete the solutions and share them via public repository in GitHub. Please do not use ANZ Bank in any of the references. The repositories should contain clear instructions (README.md) on how to setup, tests and generate report as well as specify where to find results.

<h3>Questions</h3>

1.	What other possible scenario would you suggest for given page? Suggest 3-5 with your suggestion.

2.	If this test was part of a much larger test suite, how would you speed it up to test particular flow? 

3.	Which approaches could be used to reduce overall execution time? Describe how they could be implemented into your code base.

4.	Sometimes UI tests can fail unpredictably. For example, the page may not have fully loaded before test automation attempts to click a button on a webpage. How would you improve reliability of these tests without increasing execution time?  

5.	From your experience, what is the focus of UI Automation testing – Integration, Functional or Acceptance testing? Briefly explain why.

Good luck!

