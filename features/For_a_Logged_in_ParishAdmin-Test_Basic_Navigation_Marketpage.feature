Feature: For a Logged in ParishAdmin-Test Basic Navigation Marketpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in ParishAdmin-Test Basic Navigation Marketpage
    When I click on On Demand page
    Then there is home icon
    When LLP-0020 Click on Login button
    When LPA-0010 Enter Parish Admin Name and password
    When navigate to market page
    Then Show products link is displayed
    When Show products link is hovered
    Then Click on Movies Link and Verify
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
    Then Click on watch Link and Verify
    Then Click on read Link and Verify
    Then Click on Listen Link and Verify
    Then i click on account and logout for parish
