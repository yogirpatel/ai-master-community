import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expects = chai.use(chaiAsPromised).expect;
import {browser, by, element, protractor, $} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
import { Key } from 'protractor/node_modules/@types/selenium-webdriver';
import { callbackify } from 'util';
import { Driver } from 'selenium-webdriver/opera';
import { F_OK } from 'constants';
import { async } from 'q';
import { Z_DEFAULT_STRATEGY } from 'zlib';



defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    Given('I navigate to {path}', async (path: string) => {
        await browser.get(path);
		await delay(15000);
    });
    When('navigate to Community page', async  () => {
        element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
        await delay(20000);
    });
    When('Enter parish username and password', async  () => {
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        await delay(15000);
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(10000);
    });
    When('FCM-0010 click on dashboard', async  () => {
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[3]"))).to.eventually.exist;
        await delay(2000);
    });
    When('FCM-0020 click on Feature and Groups tab', async  () => {
        element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/ul/li[2]")).click();
        await delay(15000);
    });
    When('Watch link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='/watch']"))).perform();
        await delay(12000);
    });
    When('FCM-0030 click on movie product in parish admin', async  () => {
        element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[5]/div/a/img"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[5]/div/a/img")).click();
        await delay(25000);
    });
    Then('FCM-0030 One-click custom content wording modification is displayed', async  () =>{
        await expect(browser.findElement(by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='description']/custom-content-creator/div/div/modal-link/a/span")).click();
        await delay(8000);
    });
    Then('FCM-0040 Create Community Feature /Discussion Group prompt is displayed and select create Discussion Group', async  () =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[2]/div[1]")).click();
        await delay(3000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        await delay(3000);
    });
    Then('FCM-0040 click on create group button', async  () =>{
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[2]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(15000);
    });
    Then('FCM-0040 click on view group', async  () =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(8000);
    });
    Then('FCM-0050 click on Add session to existing discussion group button', async () =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[3]/div[1]")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        await delay(5000);
    });
    When('FCM-0050 clcik on Select group then Click on Add session buton', async () =>{
        element(by.xpath(".//*[@id='discussionSelect']")).click();
        await delay(5000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/span/div/ul/li[2]/div")).click();
        await delay(3000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        await delay(5000);
    });
    Then('FCM-0050 session added successfully and Viewgroup and view later meaasges are displayed', async () =>{
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[2]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[3]/a[1]")).click();
        await delay(3000);
    });
    Then('FCM-0060 click on feature content', async () =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[2]/div/div[1]/div[1]")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/div[2]/div[3]/a")).click();
        await delay(5000);
    });
    When('FCM-0060 create community prompt is displayed', async () =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(5000);
    });
    When('FCM-0060 click on create button', async() =>{
        element(by.xpath("html/body/div[5]/div/div/div[2]/div/div[2]/a[1]")).click();
        await delay(25000);
    });
    When('FCM-0080 click on EDIT button in  product', async() =>{
        element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/ul/li[4]/promo-unit-dashboard-wrapper/div/div/div/div/div/modal-link/a/span")).click();
        await delay(10000);
    });
    When('FCM-0090 click on Managesession', async () =>{
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[2]/a/tab-heading/div/h3")).click();
        await delay(4000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a")).click();
        await delay(4000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("myyy");
        await delay(5000);
        element(by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("formed");
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys("https player vimeo.com/video/273353406?color=27b9fc&title=0&byline=0&portrait width=6400 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>FORMED Topic Sharing from <a href=https:vimeo.com/formedcatholic");
        await delay(8000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        await delay(10000);
    });
    When('FCM-0100 create new Managesession', async () =>{
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/div[2]/a")).click();
        await delay(4000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[1]/input")).sendKeys("USA");
        await delay(5000);
        element(by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/name-and-description/div[2]/ng-quill-editor/div/div/div[1]")).sendKeys("formed.org");
        await delay(5000);
        element(by.xpath("/html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-type-selector/div/div/div[2]/div[1]/div[2]/div")).clcik();
        await delay(8000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[2]/div/manage-sessions-view/form/media-embed/div[2]/div[2]/div/textarea")).sendKeys("https player vimeo.com/video/273353406?color=27b9fc&title=0&byline=0&po width=6400 height=360 frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>FORMED Topic Sharing from <a href=https:vimeo.com/formedcatholic");
        await delay(8000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[2]/button")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='sessionSelectDropdown']/i")).click();
        await delay(5000);
    });
    When('FCM-0100 click on Organize session', async() =>{
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/ul/li[3]/a/tab-heading/div/h3")).click();
        await delay(8000);
    });
    When('FCM-0110 click on delete button', async () =>{
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/div[3]/create-group-view/div[1]/div/div[3]/div/organize-sessions-view/div[2]/div/div/ul/li[1]/div[2]/div[2]/a/i")).click();
        await delay(3000);
        element(by.xpath("html/body/div[6]/div/div/div[4]/input")).click();
        await delay(5000);
        element(by.xpath("html/body/div[5]/div/div/promo-unit-modal/a/i")).click();
        await delay(10000);
    });
    Then('FCM-0120 parish admin community page is diaplayed', async () =>{
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[1]/div[1]/div[1]/div/img"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[1]/organization-header/div/div[3]/div/div/share/ul/li[4]/a"))).to.eventually.exist;
        await delay(2000);
    });
    When('FCM-0130 click on group banner from the community page', async () =>{
        element(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div[2]/custom-content-wrapper/div/div/div[1]/promo-unit/div/div[1]/a")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div/div[2]/div[3]/div[1]/div/button"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='newPostButton']/button"))).to.eventually.exist;
        await delay(2000);
    });
    When('FCM-0140 click on Group Roster', async () =>{
        element(by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/button")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div/div[2]/div[1]/div[2]/div/div/ul/li[1]/button"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='newPostButton']/button")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[2]/button")).click();
        await delay(5000);
    });
    When('FCM-0150 click on comments', async () =>{
        element(by.xpath(".//*[@id='content']/div/div/div[4]/div[2]/div/div/ul/li[1]/div/div/div/div/a")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='content']/div/div[2]/div[2]/div/div/div/div[3]/article/div/aside/ul/li[1]/button"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='content']/div/div[2]/div[2]/header/div/ul/li[4]/div/button[1]")).click();
        await delay(5000);
    });
    When('FCM-0160 click on New comment', async () =>{
        element(by.xpath(".//*[@id='content']/div/div[2]/div[2]/header/div/ul/li[4]/div/button[1]")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='composer']/div/div[2]/div/div[1]/div[2]/div/ul/li[2]/button")).click();
        await delay(5000);
    });
    Then('click on logout button in community page with parish user', async () =>{
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='account-dropdown']/div/div[2]/a[3]")).click();
        await delay(15000);
    });
    Then('FCM-0170 individual user community page is displayed', async () =>{
        await expect(browser.findElement(by.xpath(".//*[@id='promo1']/div/div/div/img"))).to.eventually.exist;
        await delay(2000);
    });
    When('FCM-0180 community page is displayed', async () =>{
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[1]/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[2]/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/organization-header/div/div[3]/div/div/share/ul/li[3]/a"))).to.eventually.exist;
        await delay(2000);
    });
    When('FCM-0180 Click on username drop down for parish user but northing published', async  () => {
        await delay(15000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        await delay(10000);
    });
    Then('click on log out for parish user but northing published' , async () =>{
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        await delay(10000);
    });
    Then('LLP-0050 Click on username drop down for individual user', async  () => {
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("Honey@123");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        await delay(10000);
    });
    When('click on logout button in community page individual user', async  () => {
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        await delay(15000);
    });
    When('FCM-0070 click on NEW button', async () =>{
        element(by.xpath("html/body/main/div[1]/div[1]/div/div[2]/div/div/div[2]/custom-content-tab/div/div/div[3]/div/div[2]/span/a")).click();
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[1]/modal-link/a/span"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='workspace']/div/div[2]/span/div/ul/li[2]/modal-link/a/span"))).to.eventually.exist;
        await delay(15000);
    });
});
    
