Feature: This file Library page
  

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: Library page
  Then there is home icon
  When PBP-0010 click on market page
  When LP-0010 i Enter Name and password for new individual user
  When LP-0020 click on library page
  When click on logout button
  When i click on login button and enter username and password
  When LP-0020 click on library page
  Then LP-0030 Purchase products is displayed
  When LP-0040 click on Titel string 
  When LP-0050 click on watch
  Then LP-0060 click on play button
  When LP-0070 click on Listen
  Then LP-0070 click on play button
  When LP-0080 click on Read
  Then LP-0090 Download format is displayed
  When click on logout button