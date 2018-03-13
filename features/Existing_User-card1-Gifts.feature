Feature: Existing_User-card1-Gifts
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Existing_User-card1-Gifts
    When i click on login button to verify for forgot password
    When Enter Name and password for individual user with multiple cards
    When navigate to market page
    When Show products link is hovered
    Then Click on gifts Link and Verify
    Then Verify Gifts
    When Click on annual formed subscription
    Then Enter Details
    Then Click on Add to cart in gifts
    Then Add to cart success message is displayed
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    Then Select card 2
    Then Enter CVV
    Then Order Confirmation is displayed
    Then Click on profile dropdown
    Then Click on account
    Then Click on Your orders
    Then Order Details is displayed
    Then i click on account and logout
