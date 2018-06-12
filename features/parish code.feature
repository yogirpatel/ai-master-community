Feature: parish code
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: parish code
  When navigate to market page
  When i move to digital products
  Then click on ondemand subscription
  Then VR-0020 sign in group detail is displayed
  When VR-0020 click on checkout button
  When PBP-0070 Click on the create an account
  Then PBP-0070 Enter Details in create Account
  When PBC-0010 click on pay by check
  Then PBC-0020 Billing information are displayed
  When VR-0030 Choose organization
  Then PBC-0030 order conformation is displayed
  When click on Dashboard
  When click on login user in ondemand page
  When subscription information is displayed
  When click on logout button