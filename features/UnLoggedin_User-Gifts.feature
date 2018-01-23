Feature: UnLoggedin User - Gifts
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: UnLoggedin User - Gifts
    Then there is a home icon
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
    When Click on Create Account
    Then Enter Details in create Account
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    Then Enter Billing Information
    Then Enter Payment Menthod
    Then Order Confirmation is displayed
