@Formed-Community-MVP
Feature: This file will test the Formed Community MVP
  As a user of FORMED, I should be able to go to the homepage and
  assert that all the elements are there

  Background:
    Given I navigate to "/"

  # from at document
  Scenario: create a feature using 1-click custom content for a Movie
  When navigate to Community page
  Then Enter parish username and password
  When FCM-0010 click on dashboard
  When FCM-0020 click on Feature and Groups tab
  When Watch link is hovered
  When FCM-0030 click on movie product in parish admin
  Then FCM-0030 One-click custom content wording modification is displayed
  Then FCM-0040 Create Community Feature /Discussion Group prompt is displayed and select create Discussion Group
  Then FCM-0040 click on create group button
  Then FCM-0040 click on view group
  When Watch link is hovered
  When FCM-0030 click on movie product in parish admin
  Then FCM-0030 One-click custom content wording modification is displayed
  Then FCM-0050 click on Add session to existing discussion group button
  When FCM-0050 click on Select group then Click on Add session buton
  Then FCM-0050 session added successfully and Viewgroup and view later meaasges are displayed
  When Watch link is hovered
  When FCM-0030 click on movie product in parish admin
  Then FCM-0030 One-click custom content wording modification is displayed
  Then FCM-0060 click on feature content
  Then FCM-0060 create community prompt is displayed
  When FCM-0060 click on create button
  When FCM-0070 click on NEW button
  When FCM-0080 click on EDIT button in  product
  When FCM-0090 click on Managesession
  When FCM-0100 create new Managesession
  When FCM-0100 click on Organize session
  When FCM-0110 click on delete button
  When navigate to Community page
  Then FCM-0120 parish admin community page is diaplayed
  When FCM-0130 click on group banner from the community page
  When FCM-0140 click on Group Roster
  When FCM-0150 click on comments
  When FCM-0160 click on New comment
  Then click on logout button in community page with parish user
  When navigate to Community page
  Then LLP-0050 Click on username drop down for individual user
  Then FCM-0170 individual user community page is displayed
  When click on logout button in community page individual user
  When FCM-0180 Click on username drop down for parish user but northing published
  When navigate to Community page
  Then FCM-0180 community page is displayed
  Then click on log out for parish user but northing published
  


