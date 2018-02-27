Feature: This file will test the Credit Plan Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: FORMED Landing Page
  Then there is a home icon 
  When i click on login button to verify for forgot password
  Then forgot password is displayed
  When i Enter Name and password for individual user
  Then Login page is displayed
  When i click on market 
  Then there is get credit plan
  When i click on get credits plan 
  Then get credits plan link is displayed
  When  i click on user name drop down
  Then then account is displayed
  When i click on account
  Then then credits plan is displayed
  


