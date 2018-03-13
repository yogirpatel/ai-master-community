Feature: Existing_User-addcard-Gifts
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Existing_User-addcard-Gifts
    When i click on login button to verify for forgot password
    When i Enter Name and password for individual user
    When Show products link is hovered
    Then Click on gifts Link and Verify
    Then Verify Gifts
    When Click on annual formed subscription
    Then Enter Details
    Then Click on Add to cart in gifts
    Then Add to cart success message is displayed
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    Then Enter CVV
    Then Order Confirmation is displayed
