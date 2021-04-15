$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/TagDemo.feature");
formatter.feature({
  "name": "Using of tagd on Cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario 2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario2",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagDemo.this_is_Scenario2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario 3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "This is Scenario3",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagDemo.this_is_Scenario3()"
});
formatter.result({
  "status": "passed"
});
});