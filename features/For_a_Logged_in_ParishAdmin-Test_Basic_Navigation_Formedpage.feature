Feature: For a Logged in ParishAdmin-Test Basic Navigation Formedpage
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: For a Logged in ParishAdmin-Test Basic Navigation Formedpage
    When I click on On Demand page
    Then there is a home icon
    When Click on Login button
    When Enter Parish Admin Name and password
    When navigate to market page
    When I click on On Demand page
    Then Click on study Link and Verify with parish admin
    Then Click on read Link and Verify with parish admin
    Then Click on watch Link and Verify with parish admin
    Then Click on Listen Link and Verify with parish admin
    When STUDY link is hovered
    Then Click on Faith Information and Verify with parish admin
    Then Click on sacramental-preparation and Verify with parish admin
    Then Click on Bible studies and Verify with parish admin
    Then Click on Current Topics and Verify with parish admin
    Then Click on Youth Disciple and Verify with parish admin
    Then Click on espanol and Verify with parish admin
    When Watch link is hovered
    Then Click on Watch Movies and Verify with parish admin
    Then Click on Documentaries and Verify with parish admin
    Then Click on Apologetics and Verify with parish admin
    Then Click on Watch Youth Disciple and Verify with parish admin
    Then Click on watch espanol and Verify with parish admin
    When listen link is hovered
    Then Click on Listen Talks and Verify with parish admin
    Then Click on Listen audio drama and Verify with parish admin
    Then Click on Listen audio books and Verify with parish admin
    Then Click on Listen espanol and Verify with parish admin
    When Read link is hovered
    Then Click on NonFiction and Verify with parish admin
    Then Click on Fiction and Verify with parish admin
    Then Click on Read Youth and Verify with parish admin
    Then Click on Read espanol and Verify with parish admin
    Then i click on account and logout for parish
