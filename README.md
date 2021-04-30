# Qa-Automation-sr
cypress tests in BDD format.


# Steps to install Cypress
npm install cypress --dev // for npm
yarn add cypress --dev // for yarn

We’ll add the following to our script under Package.json
"cypress": "cypress open"

# Steps to install Cucumber 
npm install --save-dev cucumber
npm install --save-dev cypress-cucumber-preprocessor
Add the following option to our script under Package.json
cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
}

To the file under cypress/plugins/index.js file, add the following code:
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
**Now, onto cypress.json, you can give basic configurations.
{
  "testFiles": "**/*.feature",
  "ignoreTestFiles": ["*.js", "*.ts", "*.md"],
  "viewportWidth": 1360,
  "viewportHeight": 790
}
The above code will try to run only the .feature files, ignoring any other unnecessary file. **

# Command to run Cypress tests
npm run cypress
