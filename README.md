# Qa-Automation-sr

cypress tests in BDD format.


# Steps to install Cypress

`npm install cypress --dev // for npm`

`yarn add cypress --dev // for yarn`

We’ll add the following to our script under Package.json

`"cypress": "cypress open"`

# Steps to install Cucumber 

`npm install --save-dev cucumber`

`npm install --save-dev cypress-cucumber-preprocessor`

Add the following option to our script under Package.json

`cypress-cucumber-preprocessor": {`

   ` "nonGlobalStepDefinitions": true`
    
`}`

To the file under cypress/plugins/index.js file, add the following code:

`const cucumber = require('cypress-cucumber-preprocessor').default`

`module.exports = (on, config) => {`

  `on('file:preprocessor', cucumber())`
  
`}`

goto cypress.json, and give the basic configurations.
`{`
 ` "testFiles": "**/*.feature",`
  
`  "ignoreTestFiles": ["*.js", "*.ts", "*.md"],`
  
 ` "viewportWidth": 1360,`
  
  `"viewportHeight": 790`
  
`}`

The above code will try to run only the .feature files.


# Command to run Cypress tests

`npm run cypress`



## Cypress Docker container

Add a new e2e directory which contains the cypress.json file and your integration/spec.js file. 

Your package.json file doesn't have to include Cypress at all because it's baked into the Cypress Docker image.

