import {browser, by, element} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
import { Key } from 'protractor/node_modules/@types/selenium-webdriver';


defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
	
    Given('I navigate to {path}', async (path: string) => {
        
        await browser.get(path);
    });
    Then('navigate to formed page', async () => {
        
        element(by.xpath("/html/body/header/section[1]/div[1]/strong/span")).click;
        await delay(5000);
    });
    Then('there is a home icon', async () => {
        
        await expect(browser.getTitle()).to.eventually.contain("FORMED");
        await expect(browser.findElement(by.xpath("//i[@class='icon-formed']"))).to.eventually.exist;
    });

    When('navigate to market page', async () => {
        await delay(5000);
        element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
        await delay(12000);
    });
    
    Then('Show products link is displayed', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']")).isDisplayed();    
        await delay(8000);
    });

    When('Show products link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
    });
    Then('Click on Movies Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/movies.html']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/faith-of-our-fathers.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/mary-of-nazareth.html']")).isDisplayed();
    });
    Then('Click on TV shows Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/tv-shows.html']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/vd-thelostlittlesheep-en.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/vd-lucyandfriendstheprodigalson-en.html']")).isDisplayed();
    });
    Then('Click on espanol Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/spanish.html']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on talks Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on audio dramas Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    
    Then('Click on audiobooks Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audiobooks.html']")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    When('Click on Login button', async () => {
        await delay(8000);
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(2000);
    });
    When('Click on Login button from Marketpage', async () => {
        await delay(8000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(2000);
    });
    When('Enter Name and password for individual user', async () => {
        element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("123456");
        await delay(1000);
        element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        await delay(5000);
    });
    When('Enter Parish Admin Name and password', async () => {
        element(by.xpath("//input[@name='email']")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("formed");
        await delay(1000);
        element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        await delay(10000);
    });
    Then('Click on espanol Listen Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/espa-ol.html']")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on study Link and Verify', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/div/a")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on watch Link and Verify', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on Listen Link and Verify', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[3]/div/a")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on read Link and Verify', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[4]/div/a")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on gifts Link and Verify', async () => {
        await delay(8000);
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[3]/div/a")).click();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/gifts.html']")).click();
        await delay(15000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/6-month-formed-ondemand-subscription.html']")).isDisplayed();
    });
    Then('Click on study Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on watch Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/56be709c6ee44c241e9caef9']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/571e97760acd238c0799ae42']")).isDisplayed();
    });
    Then('Click on Listen Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/listen/57ec3a587e237b6012a3890e']")).isDisplayed();
        element(by.xpath("//a[@href='/listen/5a05e29c9f590010008b07ac']")).isDisplayed();
    });
    Then('Click on read Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/read/578021ad9be60d981135939f']")).isDisplayed();
        element(by.xpath("//a[@href='/read/58f93b08593ee468023c81bb']")).isDisplayed();
    });
    Then('Click on Faith Information and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-faith-formation']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on sacramental-preparation and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-sacramental-preparation']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on Bible studies and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=bible-studies-augustine-institute-originals']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on Current Topics and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-current-topics']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on Youth Disciple and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-youth']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    Then('Click on espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-espanol']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/study/568c41decc00e2a00d468ed7']")).isDisplayed();
        element(by.xpath("//a[@href='/study/59f235f79ca85f10000d86e6']")).isDisplayed();
    });
    When('STUDY link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='/study']"))).perform();
        await delay(5000);
    });
    When('Watch link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='/watch']"))).perform();
        await delay(5000);
    });
    When('listen link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='/listen']"))).perform();
        await delay(5000);
    });
    When('Read link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='/read']"))).perform();
        await delay(5000);
    });
    Then('Click on Watch Movies and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-movies']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/57ed50807e237b6012a3891b']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/57bf6c51453d0e741d128415']")).isDisplayed();
    });
    Then('Click on Documentaries and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-documentaries']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/57ed50807e237b6012a3891b']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/57bf6c51453d0e741d128415']")).isDisplayed();
    });
    Then('Click on Apologetics and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-apologetics']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/57ed50807e237b6012a3891b']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/57bf6c51453d0e741d128415']")).isDisplayed();
    });
    Then('Click on Watch Youth Disciple and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-youth']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/57ed50807e237b6012a3891b']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/57bf6c51453d0e741d128415']")).isDisplayed();
    });
    Then('Click on watch espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-espanol']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/watch/57ed50807e237b6012a3891b']")).isDisplayed();
        element(by.xpath("//a[@href='/watch/57bf6c51453d0e741d128415']")).isDisplayed();
    });
    Then('Click on Listen Talks and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-talks']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/listen/57ec3a587e237b6012a3890e']")).isDisplayed();
        element(by.xpath("//a[@href='/listen/5a05e29c9f590010008b07ac']")).isDisplayed();
    });
    Then('Click on Listen audio drama and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-dramas']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/listen/57ec3a587e237b6012a3890e']")).isDisplayed();
        element(by.xpath("//a[@href='/listen/5a05e29c9f590010008b07ac']")).isDisplayed();
    });
    Then('Click on Listen audio books and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-audiobooks']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/listen/57ec3a587e237b6012a3890e']")).isDisplayed();
        element(by.xpath("//a[@href='/listen/5a05e29c9f590010008b07ac']")).isDisplayed();
    });
    Then('Click on Listen espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-espanol']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/listen/57ec3a587e237b6012a3890e']")).isDisplayed();
        element(by.xpath("//a[@href='/listen/5a05e29c9f590010008b07ac']")).isDisplayed();
    });    
    Then('Click on NonFiction and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-nonfiction']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/read/578021ad9be60d981135939f']")).isDisplayed();
        element(by.xpath("//a[@href='/read/58f93b08593ee468023c81bb']")).isDisplayed();
    });
    Then('Click on Fiction and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-fiction']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/read/578021ad9be60d981135939f']")).isDisplayed();
        element(by.xpath("//a[@href='/read/58f93b08593ee468023c81bb']")).isDisplayed();
    });
    Then('Click on Read Youth and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-youth']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/read/578021ad9be60d981135939f']")).isDisplayed();
        element(by.xpath("//a[@href='/read/58f93b08593ee468023c81bb']")).isDisplayed();
    });
    Then('Click on Read espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-espanol']")).click();
        await delay(6000);
        element(by.xpath("//a[@href='/read/578021ad9be60d981135939f']")).isDisplayed();
        element(by.xpath("//a[@href='/read/58f93b08593ee468023c81bb']")).isDisplayed();
    }); 
    Then('Verify Gifts', async () => {        
        element(by.xpath("//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/6-month-formed-ondemand-subscription.html']")).isDisplayed();
    }); 
    When('Click on annual formed subscription', async () => {
        browser.navigate().refresh();
        await delay(4000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).click();
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/div/strong/a")).click();
        
        
        await delay(6000);
    }); 
    Then('Enter Details', async () => {        
        element(by.xpath("//input[@id='options_267_text']")).sendKeys("rajeshnakka.c212c@gmail.com");    
        await delay(2000);
        element(by.xpath("//input[@id='options_268_text']")).sendKeys("Fname");
        await delay(2000);
        element(by.xpath("//input[@id='options_269_text']")).sendKeys("Lname");
        await delay(2000);
        //element(by.xpath("//input[@id='options_270_text']")).click();
        element(by.xpath(".//*[@id='options_270_text']")).sendKeys("Sample message");        
        await delay(1000);
    }); 
    Then('Click on Add to cart in gifts', async () => {        
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();    
        await delay(15000);
    }); 
    Then('Add to cart success message is displayed', async () => {        
        element(by.linkText("You added 1Year FORMED On Demand Gift Subscription to your shopping cart.")).isDisplayed();    
    });
    Then('Click on Cart', async () => {        
        element(by.xpath("//div[@class='formed__minicart']")).click(); 
        await delay(2000);   
    }); 
    Then('Click on Checkout in Cart Summary', async () => {        
        element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click(); 
        await delay(20000);   
    });
    When('Click on Create Account', async () => {        
        element(by.xpath(".//*[@id='register_modal_trigger']")).click(); 
        await delay(4000);   
    });
    Then('Enter Details in create Account', async () => {
        var x = 999999;
        var rand = Math.floor(Math.random()*x) + 1;        
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
        await delay(20000);   
    });
    Then('Enter Billing Information', async () => { 
        browser.navigate().refresh()
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
        //element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        
        await delay(5000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        await delay(1000);
        //element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        await delay(1000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
    });
    Then('Enter Payment Menthod', async () => { 
        
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[6]/div/button")).click();
        
        await delay(10000);
    });
    Then('Order Confirmation is displayed', async () => { 
        
        await delay(5000);
        element(by.linkText("Thank you for your purchase")).isDisplayed();
        element(by.linkText("Order Number")).isDisplayed();
        element(by.linkText("Order Date")).isDisplayed();
        element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
        element(by.linkText("Payment summary")).isDisplayed();
        element(by.linkText("Sent to: Fname Lname")).isDisplayed();
        element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
        await delay(10000);
    });
    Then('Click on profile dropdown', async () => {  
        await delay(10000);       
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(1000);
    });
    Then('Click on account', async () => { 
        
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();

        await delay(1000);
    });
    Then('Click on Payment methods', async () => { 
        
        element(by.xpath(".//*[@id='account-nav']/ul/li[6]/strong")).click();
        await delay(1000);
    });
    Then('Click on Add Payment methods', async () => { 
        
        element(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[3]/button")).click();
        await delay(1000);
    });
    Then('Click on Your orders', async () => { 
        await delay(3000);
        element(by.xpath(".//*[@id='account-nav']/ul/li[2]")).click();
        await delay(1000);
    });
    Then('Add Payment Methods', async () => {         
        element(by.xpath(".//*[@id='magedelight_cybersource_firstname']")).sendKeys("Test");
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath(".//*[@id='magedelight_cybersource_lastname']")).sendKeys("Test");
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_street']")).sendKeys("Chicago");
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_city']")).sendKeys("Chicago");
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_region_id']/option[13]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_zip']")).sendKeys("60014");
        await delay(5000);
        element(by.xpath("..//*[@id='magedelight_cybersource_telephone']")).sendKeys("3235568");
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();        
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        element(by.xpath(".//*[@id='cybersource_add_card']/fieldset[2]/div[5]/div/label/span")).click();        
        element(by.xpath(".//*[@id='cybersource_add_card_btn']")).click();


    });
    When('Enter Name and password for individual user2', async () => {
        element(by.xpath("//input[@name='email']")).sendKeys("sampletest@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("Beltone@123");
        await delay(1000);
        element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        await delay(5000);
    });
    When('Enter Name and password for individual user with multiple cards', async () => {
        element(by.xpath("//input[@name='email']")).sendKeys("multiplecards@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("Beltone@123");
        await delay(1000);
        element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        await delay(5000);
    });
    When('Enter CVV', async () => {
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        await delay(1000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[6]/div/button")).click();
        await delay(5000);
    });
    Then('Select card 2', async () => {
        await delay(6000);
        element(by.xpath(".//*[@id='magedelight_cybersource_payment_profile_id']/option[2]")).click();
        await delay(1000);
    });
    Then('Order Details is displayed', async () => {
        await delay(6000);
        element(by.linkText("Order #")).isDisplayed();
        element(by.linkText("Order Total")).isDisplayed();
        element(by.linkText("Status")).isDisplayed();
        element(by.linkText("Complete")).isDisplayed();
        element(by.linkText("Credits ")).isDisplayed();
        element(by.linkText("Order #")).isDisplayed();

        await delay(1000);
    });
});