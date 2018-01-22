Feature: Existing_User-addcard-Gifts
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Existing_User-addcard-Gifts
    Then there is a home icon
    When Click on Login button
    When Enter Name and password for individual user
    When navigate to market page
    
