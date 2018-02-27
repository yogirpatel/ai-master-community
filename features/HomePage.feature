Feature: This file will test the home page
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"


  # from at document
  Scenario: FORMED Landing Page
    Then there is a home icon
	When I click on On Demand page
	Then On Demand page is displayed
	When I click on Learn more
	Then video plays
    When i click on login button and enter username and password
    Then there is On demand , Library , market is displayed
	When i click on Market page
	Then Get credit link is displayed
	When i click on get credits plan
	Then Credit Plans page is displayed
	When i click on cart icon when there are no items in cart
	Then cart page is displayed
    When i move to Digital products
	Then Digital products drop down list is displayed
	When i navigate to market page to serach for search button
	Then search icon is displayed
	When i click on market button
	Then Special offers are displayed
	When i click on Terms of use
	Then terms of use is displayed
	When i click on privacy policy
	Then privacy policy page is displayed
	When i click on help
	Then help page is displayed
	When i move to Digital products
	Then mega-menu is displayed
	When i click on search icon and enter text
	Then results page is displayed
	When unlogged in user on clicking on demand
    Then on demand page with enter free trail , enter code , Sign up group is displayed
    When i click on library page if there is no content
    Then your library is empty and some message is displayed
    When i click on market page and move to Digital products
    Then menu elements are displayed
    When i click on login button and enter username and password
    Then there is On demand , Library , market is displayed
    When an unlogged in user enters home page
    Then Formed icon is displayed in home page 
    When i click on market side user name drop down
    Then account, Subscription ,Logout are displayed 
    When i click on Formed side user name drop down
    Then account, Account , Subscription are displayed
    When i click on library link and there is no content 
    Then your library is  empty and some message is displayed
    When i navigate to market page and click on Get credits plan
	Then credits plan page is displayed
	When navigate to account name and see whether user name is in caps 
	Then username displays in all caps
	When i search  a Formed icon for a loggedin user
	Then Formed icon is displayed
	When i navigate to Account drop down and click on logout
	Then Home page is displayed






 
 

	
	
	