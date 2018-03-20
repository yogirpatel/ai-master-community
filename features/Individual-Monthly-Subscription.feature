Feature: Individual-Monthly-Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Individual-Monthly-Subscription
    When navigate to market page
    When Show products link is hovered
    Then Click on onDemand Link and Verify
    When Click on Individual subscription
    Then Select Monthly for Individual subscription
    Then Click on Add to cart in gifts
    Then Add to cart success message is displayed
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    When Click on Create Account
    Then Enter Details in create Account
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    Then Enter Billing Information for Monthly Individual
    Then Enter Payment Menthod
    Then Order Confirmation is displayed