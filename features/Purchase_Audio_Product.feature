Feature: This file will test the Audio page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: FORMED Landing Page
  When I click on On Demand page
  Then there is a home icon
  When navigate to market page
  When Show products link is hovered
  Then Click on audio dramas Link and Verify
  When i click on Item 
  Then Product detailed page is displayed
  When i click on Add to cart for confirmation message
  Then Confirmation message is displayed
  When i click on Add to cart
  Then Product is added to cart and is displayed in Cart drop down  
  When i click on Add to cart for two products
  Then carts counter is increased  
  When i click on cart to search for title,thumbnail,Producer,Delete, checkout button
  Then Cart displayed with following items
  
  