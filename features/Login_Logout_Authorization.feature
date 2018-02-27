Feature: This file will test the Library page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: FORMED Landing Page
  Then there is a home icon 
  When i enter home page then library link is between market and on demand page
  Then library link is displaying in between
  When i move to shops products 
  Then study,watch,listen,products are displayed
  When i click on Watch 
  Then videos are shown  
  When i Serach for rental count down
  Then Rental count down is displayed on the video
  When i click on Listen page 
  Then Listen page is displayed
  
  
  