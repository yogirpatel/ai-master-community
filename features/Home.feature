Feature: This file search icon 
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Purchase Home Page 
  Then there is home icon
  Then HPF-0011 on demand,community,library,market is displayed
  When PBP-0010 click on market page
  Then HPF-0020 market details are displayed
  When I Move to digital products
  When i click on search icon and enter text
  When PBP-0010 click on market page
  When HPF-0030 click on demand page
  When HPF-0030 I click on Learn more
  Then video plays
  Given I navigate to "/"
  When HPF-0050 i click on library link
  Then your library is  empty and some message is displayed
  When i click on market from demand
  When Click on Login button from Market page
  Then i Enter Name and password for individual user
  When HPF-0030 click on demand page
  When HPF-0060 Click on user name
  When PBP-0010 click on market page
  Then HPF-0070 login user market page details
  When click on logout button
  When Click on Login button from Market page
  When Enter Name and password for individual
  When HPF-0080 click on library page
  Then HPF-0080 display library page
  When click on logout button
  
  
  
  
  
  
  
  
  
  

    