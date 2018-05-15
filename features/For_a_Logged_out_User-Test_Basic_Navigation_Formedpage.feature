Feature: For a Logged out User-Test Basic Navigation Formedpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged out User-Test Basic Navigation Formedpage
    When I click on On Demand page
    Then there is home icon
    When navigate to market page
    Then navigate to formed page
    Then Verify Formed page
