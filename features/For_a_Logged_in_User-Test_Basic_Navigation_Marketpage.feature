Feature: For a Logged in User-Test Basic Navigation Marketpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in User-Test Basic Navigation Marketpage
    When I click on On Demand page
    Then there is a home icon
    When navigate to market page
    When i click on login button to verify for forgot password
    Then forgot password is displayed
    When i Enter Name and password for individual user	
    Then Show products link is displayed
    When Show products link is hovered
    Then Click on TV shows Link and Verify
    When Show products link is hovered
    Then Click on espanol Link and Verify
    When Show products link is hovered
    Then Click on talks Link and Verify
    When Show products link is hovered
    Then Click on audio dramas Link and Verify
    When Show products link is hovered
    Then Click on audiobooks Link and Verify
    When Show products link is hovered
    Then Click on espanol Listen Link and Verify
    When Show products link is hovered
    Then Click on gifts Link and Verify