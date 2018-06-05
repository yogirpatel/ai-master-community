Feature: This file will test the Credit Plan Subscription
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: FORMED Landing Page
  # from at document
  Scenario: FORMED Landing Page
  Then there is home icon
  When i click on market 
  Then i move to Digital products
  When Click on espanol Listen Link and Verify
  When CO-0010 Click on Watch in Digital products
  Then Click on Product in watch
  Then Click on Add to Cart in Product Detial Page
  Then i move to Digital products
  When Click on espanol Listen Link and Verify
  When CO-0010 Click on Watch in Digital products
  Then Click on Product2 in watch
  Then Click on Add to Cart in Product Detial Page
  Then Click on Cart
  Then CO-0010 Verify Check Out in Cart
  Then CO-0020 Cart should contain added products
  Then CO-0030 delete product from Cart  
  When Click on Checkout in Cart Summary
  Then CO-0040 Create Account and Continue login is displayed
  Then Click on Create Account
  Then CO-0050 Verify Details in create Account
  Then PBP-0070 Enter Details in create Account
  Then CPS-0060 Enter Billing Information
  Then CPS-0060 Enter Payment Method
  When i click on user name drop down
  When click on get credit plan
  When click on credits
  Then CO-0080 Enter CVV
  Then i move to Digital products
  When click on watch document product
  Then click on watch document
  Then Click on Add to Cart in Product Detial Page
  Then Click on Cart
  When Click on Checkout in Cart Summary
  Then CO-0100 Click on Apply credits to disable
  Then CO-0080 Enter CVV
  Then CPS-0080 Order Confirmation is displayed
  
  
  


