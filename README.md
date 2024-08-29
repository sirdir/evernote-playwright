# evernote-playwright

## prerequisites

installed nodejs - https://nodejs.org/en current LTS is v20.17.0, but 18 will do as well

installed TypeScript - dependency one should be enouth, but to install globally you can use `npm install -g typescript` but in any case here is the link with instructions https://www.typescriptlang.org/download/

I do expect that you have nodejs and ts installed already and there should be no problems with them

## setup project

run this two instructions

`npm install` - install all dependencies

`npx playwright install --with-deps` - install browsers and insure that mandatory system dep are installed as well

## run tests

`npx playwright test --ui` - not for CI, but preferred way of running locally, it will start debug window and you can rung test by pressing green-arrow button or by pressing F5. It will run the tests and you will see a full trace of your tests and hover back and forward over each action to see what was happening during each step and pop out the DOM snapshot to a separate window for a better debugging experience. For more info visit https://playwright.dev/docs/test-ui-mode

`npx playwright test` - will run tests in headless mode and will open html report as it finish

`npx playwright test --headed` - same as `npx playwright test` but browser will open and you will see all interactions
