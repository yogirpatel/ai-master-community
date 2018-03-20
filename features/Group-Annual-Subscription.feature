Feature: Group-Annual-Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Group-Annual-Subscription
    When navigate to market page
    When Show products link is hovered
    Then Click on onDemand Link and Verify    
    When Click on Group subscription    
    Then Select Annual for Group subscription
    Then Click on Add to cart in gifts
    Then Add to cart success message is displayed
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    When Click on Create Account
    Then Enter Details in create Account
    Then Click on Cart
    Then Click on Checkout in Cart Summary
    Then Enter Billing Information for Group
    Then Enter Payment Menthod for Group
    Then Enter Organisation information
    Then Order Confirmation is displayed for Group
