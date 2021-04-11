package com.runner;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class) //ctrl+shift+o will import junit.cucumber
@CucumberOptions(features="src/test/resources/FeatureFiles/DataTable.feature" , glue= {"com.stepDefinition"},
monochrome=true,
plugin= {"html:Reports//HTMLReports", "json:Reports//JsonReports//cucumber.json", "junit:Reports//JUnitReports//cucumber.xml"},//generate report
dryRun=false,
strict=true
)

public class Runner {
	

}
