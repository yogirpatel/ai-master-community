Feature: This file search icon 
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase search product Page 
    Then there is home icon
    When PBP-0010 click on market page
    Then i Enter Name and password for individual user
    When ABP-0010 click on get credit plan
    Then ABP-0010 plan details are displayed
    Then ABP-0010 account overview is displayed
    When ABP-0020 click on login settings
    Then ABP-0020 login details are displayed
    Then ABP-0020 Password settings are displayed
    When ABP-0030 click on payment method
    Then ABP-0030 payment method details is displayed
    Then ABP-0040 edit page is displayed in payment method
    When ABP-0050 click on credit plan
    Then ABP-0050 credit plan details are displayed
    Then ABP-0050 credit plan subscription is displayed
    When ABP-0010 click on get credit plan
    When ABP-0050 click on cancel credit plan
    Then ABP-0050 cancel credit plan prompt is displayed
    When ABP-0060 click on your orders
    Then ABP-0070 orders page is displayed
    When ABP-0070 View details is displayed 
  