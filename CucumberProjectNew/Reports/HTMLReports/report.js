$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/DataTable.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM using DataTable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on loginPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters credentials using DataTable",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_credentials_using_DataTable(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
});