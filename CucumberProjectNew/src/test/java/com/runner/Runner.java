package com.runner;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class) //ctrl+shift+o will import junit.cucumber
@CucumberOptions(features="src/test/resources/FeatureFiles/TagDemo.feature" , glue= {"com.stepDefinition"},
monochrome=true,
plugin= {"html:Reports//HTMLReports", "json:Reports//JsonReports//cucumber.json", "junit:Reports//JUnitReports//cucumber.xml"},//generate report
dryRun=false, //mapping between feature file an step file
strict=true, // it will check if any step is not defined in step definition file
tags= {"@FunctionalTest and not @SmokeTest"}
		
		)

public class Runner {
	

}
