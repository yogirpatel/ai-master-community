Feature: This file will test the Library page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: FORMED Landing Page
  When I click on On Demand page
  When navigate to market page
  When i enter home page then library link is between market and on demand page
  Then library link is displaying in between
  When Show products link is hovered
  Then study,watch,listen,products are displayed
  When Show products link is hovered
  When i click on Listen page 
  Then Listen page is displayed
  
  
  
