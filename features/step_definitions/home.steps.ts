import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expects = chai.use(chaiAsPromised).expect;
import {browser, by, element} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
import { Key } from 'protractor/node_modules/@types/selenium-webdriver';
import { callbackify } from 'util';


defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
	
    Given('I navigate to {path}', async (path: string) => {
        
        await browser.get(path);
        await delay(15000);
    });
    Then('navigate to lenlet_cart', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/lenten_trial");
        await delay(15000);
    })
    Then('navigate to getbronze', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/getbronze");
        await delay(15000);
    });
    Then('navigate to 7daytrial', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/7daytrial");
        await delay(15000);
    });
    Then('navigate to SoG', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/SoG");
        await delay(15000);
    });
    Then('navigate to BiaY', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/BiaY");
        await delay(15000);
    });
    Then('navigate to getsilver', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/getsilver");
        await delay(15000);
    });
    Then('navigate to getplatinum', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/getplatinum");
        await delay(15000);
    });
    Then('navigate to getgold', async () => {
        await delay(5000);
        await browser.get("https://market.beta.formed.org/c/getgold");
        await delay(15000);
    });
    When('navigate to formed page', async () => {
        
        element(by.xpath(".//*[@class='icon-formed']")).click();
        await delay(10000);
    });
	When('Formed icon is displayed in home page', async () => {
	   
		
	    element (by.xpath("html/body/header/section[1]/div[1]/strong/span")).isDisplayed();
		
	    element (by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[2]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).isDisplayed();
		   
	});
    Then('there is home icon', async () => {
        //await expect(browser.getTitle()).to.eventually.contain("FORMED");
        //await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a"))).to.eventually.exist;
        await delay(5000);                         
    });
    Then('LLP-0010 Then there is home icon', async () => {

        await expect(browser.getTitle()).to.eventually.contain("FORMED");
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a"))).to.eventually.exist;
        await delay(3000);
    });
    When('navigate to market page', async () => {
        await delay(5000);
        element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
        await delay(15000);
    });
    When('click on watch document product', async () => {
        await delay(5000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/documentaries.html']")).click();
        await delay(15000);
    });
    Then('click on watch document', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/div/strong/a")).click();
        await delay(15000);
    });
    Then('Show products link is displayed', async () => {
        await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;    
        await delay(8000);
    });
    When('I click on On Demand page', async () => {
        await delay(8000);
        element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
        await delay(10000);
    });          
	 When('On Demand page is displayed', async () => {	 
	    element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/h1")).isDisplayed();
	});
	When('HPF-0030 I click on Learn more', async () => {
       await delay(1000);
       element(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div/a/p")).click();	
       await delay(8000);
    });
    When('LP-0020 market page is displayed', async () => {
       await delay(1000);
       await expect(browser.findElement(by.xpath(".//*[@id='homepage_hero']/div"))).to.eventually.exist;
       await delay(8000);
	});
	When('video plays', async () => {
        await delay(2000);
        element(by.xpath(".//*[@id='player']/div/div/div[7]/div[2]/button")).click();
        await delay(2000);
        element(by.xpath(".//*[@title='Pause']")).isDisplayed();
        	
	});	
	
	When('i click on Market page',async () => {
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
		await delay(10000);
		await expect(browser.findElement(by.xpath("html/body/header/section[1]/div[8]/div/a/span"))).to.eventually.exist;
	});
	 
	When('Get credit link is displayed',async () => {
	    element(by.xpath(".//*[@href='/creditplans.html']")).isDisplayed();
	});
	 
	 When('i click on Get credits plan',async () => {
        element(by.xpath(".//*[@href='/creditplans.html']")).click();
        await delay(6000);	 
	});
	When('Credit Plans page is displayed',async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/div[2]")).isDisplayed();
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/div[3]")).isDisplayed();
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/div[2]")).isDisplayed();
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[4]/div[2]")).isDisplayed();        
	});
	When('Click on cart with empty', async () => {
	
	    element(by.xpath(".//*[@class='formed__minicart']")).click();
	    await delay(1000);                
    }); 
	When('i click on cart icon when there are no items in cart', async () => {
	
        element(by.xpath(".//*[@id='ui-id-1']")).click();
        element(by.linkText("You have no items in your shopping cart.")).isDisplayed();
	    await delay(1000);                 
    });
	When('cart page is displayed',async () => {
	
	    element(by.xpath(" .//*[@id='minicart-content-wrapper']/div/strong")).isDisplayed();
	    await delay(1000);                 
    });
	When('i move to Digital products',async () => {
	    browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
       
    });
	
	Then('SPP-0060 Product page is displayed',async () => {
        element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/read/fiction.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/a/label/div"))).to.eventually.exist;
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
        await delay(5000);
		//element(by.xpath(".//*[@id='sorter']")).click(); 
	});
    Then('SPP-0070 featured drop down is displayed',async () => {
	 
        await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[3]"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[4]"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[5]"))).to.eventually.exist;
        await delay(2000);
	});
	When('Digital products drop down list is displayed',async () => {
	 
        await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
        await delay(15000);
	});
	Then('SPP-0080 is products displayed',async () => {
	 
        await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[1]/p[1]"))).to.eventually.exist;
        await delay(5000);
    });
    When('SPP-0080 Click second',async () => {
	 
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
        await delay(5000);
	});
	 
	When('i navigate to market page to serach for search button',async () => {
        element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	});
						  
	When('search icon is displayed', async () => {
	 
        await expect(browser.findElement(by.xpath (".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
    });   
	   
	When('i click on market button', async () => {
	  
       element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
       await delay(1000);
    });
	  
	When('Special offers are displayed', async () => {

	    element(by.xpath(".//*[@id='homepage_featured_products']/h1[2]")).isDisplayed();
		element(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[1]/a")).isDisplayed();	
		element(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[2]/a")).isDisplayed();	
		element(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[3]/a")).isDisplayed();	
	
	});
	   
	   
	When('i click on Terms of use',async () => {
	 
	                      
       element(by.xpath(".//*[@href='https://formed.org/terms-and-conditions']")).click();   
       delay(6000);
    });
	   
	   
	When('terms of use is displayed',async () => {
        element(by.xpath(".//*[@id='scroll-top']/div/h1")).isDisplayed();	
	});  
	   
	When('i click on privacy policy', async () => {
	    element(by.xpath(".//*[@href='https://formed.org/privacy-policy']")).click();
	    delay(6000);
	});
	When('privacy policy page is displayed',async () => {
	 
        element(by.xpath(".//*[@id='scroll-top']/div/h1")).isDisplayed();
	});
	   
	When('i click on help', async () => {
	 
	                      
        element(by.xpath(".//*[@href='http://help.market.formed.org']")).click();
        await delay(6000);   
    });
	When('help page is displayed', async () => {
        element(by.linkText("How can we help you today?")).isDisplayed();
	});  
	   
	When('I Move to digital products', async () => {
	 
	    browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
        await delay(5000);
	    element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch.html']")).click();
        await delay(2000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/feature-films.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/documentaries.html']"))).to.eventually.exist;
        await delay(2000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/talks.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/tv-shows.html']"))).to.eventually.exist;
        await delay(2000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/spanish.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen.html']"))).to.eventually.exist;
        await delay(2000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audiobooks.html']"))).to.eventually.exist;
        await delay(2000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/espa-ol.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions.html']"))).to.eventually.exist;
        await delay(2000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']"))).to.eventually.exist;
        await delay(2000);
    });
						  
    When('i click on search icon and enter text', async () => {
	   element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
       await delay(4000);
	   element(by.xpath(".//*[@id='search']")).sendKeys("Listen");
	   await delay(2000);                  
       element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
       await delay(8000);
    });
	   
	When('results page is displayed', async () => {
			 
       element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/div/strong/a")).isDisplayed();
			 
	});  	  
	When('unlogged in user on clicking on demand', async () => {   	   
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(2000);
	    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
	    await delay(5000);
		element(by.xpath(".//*[@href='https://beta.formed.org/']")).click();
        await delay(10000);
    });
		
	When('on demand page with enter free trail,enter code,Sign up group is displayed',async () => {

        element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/registration-column/modal-link/a/span")).isDisplayed();	
        element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[3]/registration-column/a")).isDisplayed();	
        element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a")).isDisplayed();	
		await delay(2000);
	});
    When('Enter CVV',async () => {

        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("226");	
        await delay(2000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
		await delay(15000);
	});
	   
	When('LBP-0010 Click on library page', async () => {

	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[3]/a")).click();
        await delay(6000);	   
				   
	});
    Then('SPP-0010 digital products and search icon are displayed', async () => {
	
       await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
	   await delay(3000);
    });
    When('LP-0020 click on library page', async () => {
      element(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']")).click();
      await delay(10000);
    });
	When('SPP-0020 click on the search icon', async () => {

	    element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        await delay(3000);
		element(by.xpath(".//*[@id='search']")).sendKeys("pope");
        await delay(6000);
		element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
        await delay(10000);
    });
    Then('LP-0030 Purchase products is displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[2]/a/label/div[1]"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[3]/a/label/div[2]"))).to.eventually.exist;
        await delay(3000);
    });
	When('HPF-0030 click on demand page', async () => {

        element(by.xpath(".//*[@href='https://beta.formed.org/']")).click();
	    await delay(10000);                         
		await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/registration-column/modal-link/a/span"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[3]/registration-column/a"))).to.eventually.exist;
	    await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a"))).to.eventually.exist;
	    await delay(3000);
    });
	Then('SPP-0030 Search product page is displayed', async () => {
	   
       await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div/section[1]/a/div/h2"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[3]/div/div/div[1]/div[3]/span"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol"))).to.eventually.exist;
	   await delay(3000);   
       await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dt[4]"))).to.eventually.exist;
	   await delay(3000);         	   
	});
	When('SPP-0040 click on watch in left side view', async () => {
	   element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
       await delay(6000);
	});
	Then('SPP-0040 Watch sub options are displayed', async () => {
	   
       await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[1]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[2]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[3]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[4]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/a/label/div")).click();
       await delay(15000);
	});
	Then('HPF-0011 on demand,community,library,market is displayed', async () => {
	   
       await expect(browser.findElement(by.xpath(".//*[@href='/']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@href='/community']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div/a/p"))).to.eventually.exist;
	   await delay(3000);
	});
	Then('SPP-0040 Listen sub options are displayed', async () => {
	   
       await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[1]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[2]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[3]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/a/label/div")).click();
       await delay(15000);  
	
	});
	Then('SPP-0040 Read sub options are displayed', async () => {
       await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[2]/a/label"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[3]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[4]/a/label/div"))).to.eventually.exist;
	   await delay(3000);
    });  
    When('LP-0040 click on Titel string', async () => {
        element(by.xpath(".//*[@id='sorter']")).click();
	    await delay(10000);                         
		await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
	    await delay(3000);   
    });
	Then('LP-0020 library page and message is displayed', async () => {
       await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a"))).to.eventually.exist;
	   await delay(3000);
	   element(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a")).click();
       await delay(10000);	             
	});
	When('PBP-0010 click on market page',async () => {
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[4]/a")).click();
        await delay(10000);
	});  
    Then('HPF-0020 market details are displayed', async () => {
       await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath("html/body/header/section[1]/div[8]/div/a/span"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='biy-banner-desktop']"))).to.eventually.exist;
	   await delay(3000);
	});
	When('SPP-0040 select one or more attribute filter',async () => {		 
	    element(by.xpath(".//*[@id='narrow-by-list']/dd[4]/ol/form/li[5]/a/label/div")).click();
        await delay(6000);
		element(by.xpath(".//*[@id='narrow-by-list']/dd[4]/ol/form/li[6]/a/label/div")).click();
        await delay(6000);
		await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[2]/div/a"))).to.eventually.exist;
	    await delay(3000);
	});
	When('HPF-0060 Click on user name', async () => {
		element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(6000);
		await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
		await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
		await delay(2000);
		await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
		await delay(5000);
    });
	When('SPP-0050 click on filter product',async () => {
		 
	    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[2]/div/a")).click();
        await delay(10000);
	});
    Then('SPP-0050 Product details are displayed',async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div[1]/img"))).to.eventually.exist;
        await delay(3000);
		element(by.xpath(".//*[@id='product__description--toggle']")).click();
        await delay(10000);
	});
	Then('HPF-0070 login user market page details', async () => {	   
       await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown-button']"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	   await delay(3000);
	});
	Then('SPP-0050 Expand attributes',async () => {
        element(by.xpath(".//*[@id='product__description--toggle']']")).click();
        await delay(6000);
		await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[2]"))).to.eventually.exist;
        await delay(3000);
        element(by.xpath(".//*[@id='product__description--toggle']']")).click();
        await delay(6000);		
	});
	Then('SPP-0050 collapse attributes',async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='product__description']"))).to.eventually.exist;
        await delay(3000);
	});
	When('PBP-0060 click on incart icon',async () => {
	   element(by.xpath(".//*[@class='action showcart']")).click();
       await delay(6000);
       await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li/div[1]/span/img"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/div"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[2]"))).to.eventually.exist;
	   await delay(3000);
    });      
	When('PBP-0060 click on title',async () => {
	    element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[1]/a")).click();
        await delay(10000);
	});
	When('click on library page',async () => {
	   element(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']")).click();
       await delay(10000);
	   await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[2]/div/div[2]"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/h1"))).to.eventually.exist;
	   await delay(3000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	   await delay(3000);
		
	});
	 When('HPF-0080 click on library page', async () => {
       element(by.xpath("//a[@href='https://market.beta.formed.org/mylibrary/']")).click();
       await delay(10000);
    });
    Then('HPF-0080 display library page', async () => {
        element(by.linkText("Your Library is Empty")).isPresent();
        await delay(5000);
	});
	When('click on logout button',async () => {
	   element(by.xpath(".//*[@id='account-dropdown-button']")).click();
       await delay(5000);
	   element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
       await delay(10000);
    });
    When('click on logout button in market',async () => {
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(5000);
	});
	When('PBP-0060 click on remove option',async () => {
	    element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/div/div/a")).click();
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='minicart-content-wrapper']/div"))).to.eventually.exist;
	    await delay(3000);
	});
	When('PBP-0060 Click on check out option',async () => {
	    element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        await delay(15000);		
	});
	Then('PBP-0010 click on Read option in digital products',async () => {
		 
	    browser.actions().mouseMove(element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
        await delay(3000);
						  
    });	   
	Then('PBP-0010 Read Products page is displayed',async () => {
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
        await delay(3000);
	    await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
        await delay(3000); 
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read/fiction.html']")).click();
        await delay(10000);
	});
	When('PBP-0020 click on the read product', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(10000);
	});	
	Then('PBP-0020 Read Products page are displayed',async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[1]/p[1]"))).to.eventually.exist;
        await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='related__items']"))).to.eventually.exist;
        await delay(5000);
	});
	When('PBP-0030 click on Add to cart button', async () => {
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
        await delay(5000);
	});
	Then('PBP-0030 Message and cart icon number and incart displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div"))).to.eventually.exist;
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
        await delay(5000);
	});
	When('PBP-0040 Click on incart button', async () => {
        element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
        await delay(5000);
		// element(by.xpath(".//*[@id='minicart-content-wrapper']/div")).isDisplayed();
	});
	When('PBP-0050 click on product in you may also like', async () => {
        element(by.xpath(".//*[@id='related__items']/div[2]/div/ol/li[2]/div/a/img")).click();
        await delay(5000);
        
	});
	When('PBP-0050 cart icon button is increased by 1', async () => {
        await expect(browser.findElement(by.xpath("html/body/header/section[1]/div[7]/div/a"))).to.eventually.exist;
        await delay(5000);
	});
	When('i click on login button and enter username and password', async () => {
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        await delay(10000);
    });
    When('click on get credit plan', async () => {
        element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).click();
        await delay(5000);
    });
    When('displayed get credit plan', async () => {
        await expect(browser.findElement(by.xpath(".//*[@class='Get Credit Plan']"))).to.eventually.exist;
        await delay(5000);
    });
    When('click on credits', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/form/button")).click();
        await delay(8000);
        element(by.xpath(".//*[@class='counter qty']")).click();
        await delay(8000);
        element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        await delay(15000);

    });
	When('there is On demand,community,Library,market is displayed', async () => {
	   
	  element(by.xpath(".//*[@href='https://beta.formed.org/']")).isDisplayed();	   
	  element(by.xpath(".//*[@href='https://beta.formed.org//community']")).isDisplayed();  
	  element(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']")).isDisplayed();
	  element(by.xpath(".//*[@href='https://market.beta.formed.org/']")).isDisplayed();
	
	});
	   
	   
	When('an unlogged in user enters home page', async () => {
	   
	    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
		await delay(2000);
    });
		
	When('Formed icon is displayed', async () => {
	   
		
	    element(by.xpath("html/body/header/section[1]/div[1]/strong/span")).isDisplayed();
		
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
		element(by.xpath("html/body/header/section[1]/div[2]/ul/li[2]/a")).isDisplayed();
		element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).isDisplayed();
		   
	});
	   
	   
	When('i click on market side user name drop down', async () => {
        
	    element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]']")).click();
        await delay(5000);
						  
						  
	      element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	});
		  
	When('account, Subscription ,Logout are displayed', async () => {
        
		element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).isDisplayed();
		
		element(by.xpath(".//*[@id='account-dropdown']/div/a[2]")).isDisplayed();
		
		
		element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).isDisplayed();
		
		
		
	});
	   
	
    When('i click on Formed side user name drop down', async () => {
		  
		element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).click();
		  
	});
		  
    When('account, Account , Subscription are displayed', async () => {
		  
	    browser.actions().mouseMove(element(by.xpath(".//*[@id='account-dropdown-button']"))).click();
		   
		   
		element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]")).isDisplayed();
		
		element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).isDisplayed();
		
		
		element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).isDisplayed();
			
	   
	});
	   
	   
	When('HPF-0050 i click on library link', async () => {
	      
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[3]/a")).click();
		await delay(2000);
    });
	Then('your library is  empty and some message is displayed',async () => {
	
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).to.eventually.exist;
	   await delay(2000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p"))).to.eventually.exist;
       await delay(2000);
	   await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a"))).to.eventually.exist;
       await delay(2000);
	});
	   
	When('i navigate to market page and click on Get credits plan', async () => {
	   
                         
	    element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).click();
				   
	});
				   
				   
	When('credits plan page is displayed', async () => {
	   
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/h1")).isDisplayed();	
                      	
	   
	});
	   
	// I can't find here where is credit balance
	   
	//I can't find the page when library items  are purchased
	   
	   
	When('navigate to account name and see whether user name is in caps', async () => {
	   
	   
	    browser.actions().mouseMove(element(by.xpath(".//*[@id='account-dropdown-button']"))).click();
	   
	});
	When('username displays in all caps', async () => {
	   
	   
	    element(by.xpath(".//*[@id='account-dropdown-button']")).isDisplayed();
				 
				 
	});
				 
	   
	When('i search  a Formed icon for a loggedin user', async () => {
	   
	   element(by.xpath("html/body/header/section[1]/div[1]/a/span")).isDisplayed();
	   
    });
	   
	When ('i navigate to Account drop down and click on logout', async () => {
		
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	   
	                    
	    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	   
	    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
					 
	});
    When ('Verify Formed page', async () => {		
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/registration-column/modal-link/a"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[3]/registration-column/a"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a"))).to.eventually.exist;
	});				 
	When ('Home page is displayed', async () => {		
	    element(by.xpath("html/body/header/section[1]/div[1]/strong/span")).isDisplayed();
	});		 
	When('i click on login button to verify for forgot password', async  () => { 
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(5000);   
    });
    When('CO-0010 i click on login button and enter username and password', async  () => { 
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
        await delay(5000); 
        
    });
    When('forgot password is displayed', async  () => {    
      await delay(1000);  
      await expect(browser.findElement(by.xpath(".//*[@class='forgotPassword']"))).to.eventually.exist;
      //element(by.xpath("html/body/header/section[1]/div[6]/ul/li/div/div/div/div/div/div/div/div/div[2]/div/form/div/div[3]/a")).isDisplayed();
         
    });
    Then('i Enter Name and password for individual user', async () => {
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(2000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        await delay(2000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        await delay(15000);
         });
    Then('i Enter Name and password for new individual user', async () => {
            await delay(5000);
            element(by.xpath(".//*[@id='login-dropdown-button']")).click();
            await delay(1000);
            element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("charanstar.powe@gmail.com");
            await delay(1000);
            element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
            await delay(1000);
            element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
            await delay(15000);
        });     
    When('Login page is displayed', async () => {    
         element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();  
    });
      
    Then('i click on market', async () => {
          element(by.xpath(".//a[@href='https://market.beta.formed.org']")).click();
          await delay(15000);
    });
        
    When('i click on market from demand', async () => {
        element(by.xpath(".//a[@href='https://market.beta.formed.org/']")).click();
        await delay(15000);
  });
     When('PBP-0070 Click on the create an account', async () => {
      await delay(5000);
      element(by.xpath(".//*[@id='register_modal_trigger']")).click();
      await delay(10000);
	});
	Then('PBP-0070 Enter Details in create Account', async () => {
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
    Then('LP-0010 i Enter Name and password for new individual user', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("sair7989@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Krishna@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        await delay(15000);
    });     
    Then('PBP-0070 Billing information are displayed', async () => { 
        browser.navigate().refresh();
        element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
        element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        await delay(12000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        await delay(5000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        await delay(1000);
        element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        await delay(1000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
        
        
    });
    Then('PBP-0070 Enter Payment Method', async () => { 
        
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
        await delay(3000);
    });
    Then('PBP-0070 Verify the Checkout Page', async () => { 
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
        await delay(15000);
    });
    Then('PBP-0070 Click on View library', async () => { 
        element(by.xpath(".//*[@class='action primary view-in-library']")).click();
        await delay(12000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).click();
        await delay(8000);

    });
    Then('PBP-0070 Order Confirmation is displayed for Group', async () => {         
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/strong"))).to.eventually.exist;
        //element(by.linkText("Order Date")).isDisplayed();
        //element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
        //element(by.linkText("Payment summary")).isDisplayed();
        //element(by.linkText("Sent to: Fname Lname")).isDisplayed();
        //element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
        await delay(10000);
    });
	When('PBP-0070 Click on view in library', async () => {
      await delay(3000);
      element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
      await delay(10000);
	  
	});
	
	When('PBP-0070 Click on purchase product', async () => {
      await delay(3000);
      element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a")).click();
      await delay(10000);
	});
	Then('PBP-0070 purchase product is displayed', async () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div")).isDisplayed();
      await delay(5000);
	});
	Then('PVP--0080 View in my library button is displayed', async () => { 
        
        element(by.xpath(".//*[@id='product-viewinlibrary-button']")).isDisplayed();
		await delay(5000);
		element(by.xpath(".//*[@id='product-viewinlibrary-button']")).click();
        await delay(10000);
    });
	Then('PVP--0080 purchase video product is displayed', async () => { 
        
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).isDisplayed();
		await delay(6000);
	});
    Then('CPS-0010 there is get credit plan', async () => {
        await expect(browser.findElement(by.xpath("//a[@href='/creditplans.html']"))).to.eventually.exist;
        //element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
    });
    When('CPS-0020 Click on Product Detail page', async () => {
      
        element(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[1]/a/img")).click();
        await delay(10000);
    });
    Then('CPS-0020 Get Credit Plan prompt is displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[2]/div[3]/div/span/button"))).to.eventually.exist;
        //element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
    });
    When('a user without get credit plan click on shopping product', async () => {
      
        element(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[1]")).click();
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[1]/div[2]/div[3]/div/span/button")).isDisplayed();
        await delay(10000);
    });
          
    When('CPS-0030 i click on get credits plan', async () => {      
      element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[2]/div[3]/div/span/button")).click();
      await delay(10000);
    });

    Then('CPS-0030 get credits plan link is displayed', async () => {      
     await expect(browser.findElement(by.xpath(".//*[@id='offer-dt']/p[4]/a/button"))).to.eventually.exist;
     await delay(10000);
    }); 
    Then('PBP-0070 View in library is displayed', async () => {      
     await expect(browser.findElement(by.xpath(".//*[@id='product-viewinlibrary-button']"))).to.eventually.exist;
     await delay(10000);
    });
    When('i click on user name drop down', async () => {  
       element(by.xpath(".//*[@id='account-dropdown-button']")).click();
       await delay(10000);
    });  
    When('then account is displayed', async () => {     
    await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
    await delay(3000);
    });
    When('i click on account', async () => {
         
      element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
      await delay(10000);
    });
    Then('i click on account and logout', async () => {
      
        await delay(5000);
        element(by.xpath(".//*[@id='account-dropdown']")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
        await delay(5000);
    });
    Then('i click on account and logout for parish', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='account-dropdown']")).click();
        await delay(4000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
        await delay(5000);
      });      
      When('CPS-0050 Click on Monthly credit plan', async () => {          
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/form/button")).click();
        await delay(10000);
      });	
      When('CPS-0100 Click on Annual credit plan', async () => {          
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/form/button")).click();
        await delay(5000);
      });
    When('get credits plan is displayed', async () => {
      
         
      
      element(by.xpath(".//*[@id='account-nav']/ul/li[7]/a")).isDisplayed();
     });	
      When('i click on Tv SHOWS', async () => {
	
	  
        browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
		
		
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[4]/div/a")).click();
		
	});
	When('Tv Shows page is displayed', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]")).isDisplayed();	
	});
	When('Cart displayed with following items', async () => { 	 
        element(by.xpath(".//*[@id='mini-cart']/li/div[1]/div/strong[1]/a")).isDisplayed();		
		element(by.xpath(".//*[@id='mini-cart']/li/div[1]/div/strong[2]")).isDisplayed();		
		element(by.xpath(".//*[@id='top-cart-btn-checkout']")).isDisplayed();			     
	 
    });	
     When('i enter home page then library link is between market and on demand page', async () => {
	 
	 
        element(by.xpath("/html/body/header/section[1]/div[1]/strong/span")).click();
	 
	});
	 
	 When('library link is displaying in between', async () => {
	 
	 
	 
        element(by.xpath("html/body/header/section[1]/div[2]/ul/li[2]/a")).isDisplayed();
	 
	});
	 
	When('i move to shops products', async () => {
	 
        browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
	});
	 	 
	 When('study,watch,listen,products are displayed', async () => {
	 
	 
	 
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a")).isDisplayed();
		
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/div/a")).isDisplayed();
	    
		
        element(by.xpath("")).isDisplayed();
		
		
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/h1")).isDisplayed();
	 
	});
	 
	 
	 When('i click on Watch', async () => {
	 
	    
        browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
        element(by.xpath(" html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a ")).click();
	});
	 
	 
	 
	 When('videos are shown', async () => { 
	 
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/h1")).isDisplayed();
	});	 
	When('i Serach for rental count down', async () => {                 	 
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
	});	 
	 
	When('Rental count down is displayed on the video', async () => {                 	 
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[1]/div[1]/div/img")).isDisplayed();
	});
	When('i click on audio dramas', async () => {
	  
        browser.actions().mouseMove(element(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).perform();
		
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[2]/div/a")).click();
		
	});
		
		 When('Audio dramas page is displayed', async () => {
		 
		 
	     
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/h1")).isDisplayed();
		
	});
	When('i click on Listen page', async () => {
	 
	 
        element(by.xpath(".//a[@href='https://market.beta.formed.org/shop-products/listen.html']")).click();
	});
	
	When('Listen page is displayed', async () => {

	  
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/h1")).isDisplayed();
	 
    });		
    When('i click on Item', async () => {
	 
	 
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(5000);
	});
		When('Product detailed page is displayed', async () => {
		
		
        element(by.xpath(".//*[@id='product__description']/div[1]")).isDisplayed();
		
        element(by.xpath(".//*[@id='related__items']/div[1]/h2")).isDisplayed();
		
        element(by.xpath(" .//*[@id='maincontent']/div[2]/div/div[4]/div[1]/div[1]/div/img ")).isDisplayed();
        await delay(5000);
	});	
		
		
		When('i click on Add to cart for confirmation message', async () => {    
		
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();    
		
        await delay(15000);
    }); 
	   
       When('Confirmation message is displayed', async () => {        
	   
        element(by.linkText("    ")).isDisplayed();    
		await delay(5000);
    });
		
	 When('i click on Add to cart', async () => {
	 
	 
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
		
        await delay(5000);
	 
	 });
	 
	 	 When('Product is added to cart and is displayed in Cart drop down', async () => {
	 
        element(by.xpath(".//*[@id='ui-id-1']")).click();
	 
        element(by.xpath(".//*[@id='minicart-content-wrapper']/div/h2[1]")).isDisplayed();
	    await delay(5000);
	 });
	 
	When('i click on Add to cart for two products', async () => { 
        element(by.xpath(".//*[@id='ui-id-1']")).click();
	    await delay(5000);	 
	 });
	 When('carts counter is increased', async () => {
        element(by.xpath("html/body/header/section[1]/div[7]/div/a/span[2]/span[1]")).isDisplayed();
	    await delay(5000);
	});
	 
	When('i click on cart to search for title,thumbnail,Producer,Delete, checkout button', async () => { 
        element(by.xpath(".//*[@id='ui-id-1']")).click();
	    await delay(5000);	 
	});
	When('Cart displayed with following items', async () => {
        element(by.xpath(".//*[@id='mini-cart']/li/div[1]/div/strong[1]/a")).isDisplayed();
		
		element(by.xpath(".//*[@id='mini-cart']/li/div[1]/div/strong[2]")).isDisplayed();
		
		element(by.xpath(".//*[@id='top-cart-btn-checkout']")).isDisplayed();
		await delay(5000);	     
	 }); 
    When('Show products link is hovered', async () => {
        browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
    });
    Then('Click on Movies Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/feature-films.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	    await delay(2000);
    });
    Then('Click on TV shows Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/tv-shows.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	    await delay(2000);  
    });
    Then('Click on espanol Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/spanish.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await delay(2000); 
    }); 
       
    Then('click on feature film link and verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch/feature-films.html']")).click();
        await delay(10000);
        element(by.xpath("//a[@href='.//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img']")).isDisplayed();
        element(by.xpath("//a[@href='.//*[@id='amasty-shopby-product-list']/h1']")).isDisplayed();
        await delay(2000);
    });
    Then('click on product', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();
        await delay(10000);
    });
    Then('click on product', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/a/img")).click();
        await delay(10000);
    });
    Then('Click on talks Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(2000); 
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(2000); 
    });
    Then('Click on audio dramas Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await delay(2000); 
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a"))).to.eventually.exist;
        await delay(2000); 
    });
    
    Then('Click on audiobooks Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/listen/audiobooks.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await delay(2000);  
    });
    When('Click on Login button from Market page', async () => {
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(10000);
    });
    Then('Enter Name and password for individual user', async () => {
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
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
        await delay(5000);
    });
    Then('Click on study Link and Verify', async () => {
        element(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/div/a")).click();
        await delay(6000);
        //element(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']")).isDisplayed();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/don-bosco-spanish.html']")).isDisplayed();
    });
    Then('Click on watch Link and Verify', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await delay(5000);
    });
    Then('Click on Listen Link and Verify', async () => {
        element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/a/label/div")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
        await delay(2000);
        
    });
    Then('Click on read Link and Verify', async () => {
        await delay(5000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/read.html']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
        await delay(2000);
    });
    Then('Click on gifts Link and Verify', async () => {
        await delay(8000);
        element(by.xpath(".//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/gifts.html']")).click();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/gifts.html']")).click();
        await delay(15000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/6-month-formed-ondemand-subscription.html']")).isDisplayed();
    });
    When('Click on Individual subscription', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/formed-on-demand-subscription-for-individuals.html']")).click();
        await delay(8000);
    });
    When('Click on Group subscription', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/formed-on-demand-subscription-for-groups.html']")).click();
        await delay(8000);
    });
    Then('Select Annual for Individual subscription', async () => {
        element(by.xpath(".//*[@id='item_936']")).click();
        await delay(1000);
    });
    Then('Select Monthly for Individual subscription', async () => {
        element(by.xpath(".//*[@id='item_937']")).click();
        await delay(1000);
    });
    Then('Select Annual for Group subscription', async () => {
        element(by.xpath(".//*[@id='item_932']")).click();
        await delay(1000);
    });
    Then('Select Monthly for Group subscription', async () => {
        element(by.xpath(".//*[@id='item_933']")).click();
        await delay(1000);
    });
    Then('Individual subscription is displayed', async () => {
        //element(by.linkText("Individual On Demand Subscription")).to.eventually.exist;
        element(by.xpath("//*[@class='price-box price-final_price']")).to.eventually.exist;
        await delay(8000);
    });
    Then('Group subscription is displayed', async () => {
        element(by.linkText("Group On Demand Subscription")).to.eventually.exist;
        element(by.xpath("//*[@class='price-box price-final_price']")).to.eventually.exist;
        await delay(8000);
    });
    Then('Click on onDemand Link and Verify', async () => {
        await delay(8000);
        element(by.xpath(".//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
        //element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/gifts.html']")).click();
        await delay(15000);
        element(by.xpath("//a[@href='https://market.beta.formed.org/formed-on-demand-subscription-for-groups.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/formed-on-demand-subscription-for-individuals.html']")).isDisplayed();
    });

    Then('LPA-0020 Click on study Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	    await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	    await delay(3000);
        
    });
    Then('LPA-0020 Click on watch Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	    await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	    await delay(3000);
        
    });
    Then('LPA-0020 Click on Listen Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	    await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0020 Click on read Link and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	    await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	    await delay(3000);
	    await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0030 Click on sacramental-preparation and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-sacramental-preparation']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='study-sacramental-preparation']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0030 Click on Faith Information and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-faith-formation']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='study-faith-formation']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        await delay(3000);
    });
    Then('LPA-0030 Click on Bible studies and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=bible-studies-augustine-institute-originals']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='bible-studies-augustine-institute-originals']/div/div[1]/h1"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0030 Click on Current Topics and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-current-topics']")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='study-current-topics']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
        await delay(3000);
    });
    Then('LPA-0030 Click on Youth Disciple and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-youth']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='study-youth']/div/div[1]/h1"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0030 Click on espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/study?linkId=study-espanol']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
	    await delay(3000);
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
    Then('LPA-0040 Click on Watch Movies and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-movies']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='watch-movies']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0040 Click on Documentaries and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-documentaries']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='watch-documentaries']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0040 Click on Apologetics and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-apologetics']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='watch-apologetics']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0040 Click on Watch Youth Disciple and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-youth']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='watch-youth']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0040 Click on watch espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/watch?linkId=watch-espanol']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='watch-espanol']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0050 Click on Listen Talks and Verify with parish admin', async () => {
        element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='listen-talks']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0050 Click on Listen audio drama and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-dramas']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='listen-dramas']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0050 Click on Listen audio books and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-audiobooks']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='listen-audiobooks']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0050 Click on Listen espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/listen?linkId=listen-espanol']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='listen-espanol']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });    
    Then('LPA-0060 Click on NonFiction and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-nonfiction']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='read-nonfiction']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0060 Click on Fiction and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-fiction']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='read-fiction']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    });
    Then('LPA-0060 Click on Read Youth and Verify with parish admin', async () => {
        element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	    await delay(6000);
    });
    Then('LPA-0060 Click on Read espanol and Verify with parish admin', async () => {
        element(by.xpath("//a[@href='/read?linkId=read-espanol']")).click();
        await delay(6000);
        await expect(browser.findElement(by.xpath(".//*[@id='read-espanol']/div/div[1]/h1"))).to.eventually.exist;
	    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	    await delay(3000);
    }); 
    Then('Verify Gifts', async () => {        
        element(by.xpath("//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).isDisplayed();
        element(by.xpath("//a[@href='https://market.beta.formed.org/6-month-formed-ondemand-subscription.html']")).isDisplayed();
    }); 
    When('Click on annual formed subscription', async () => {
        browser.navigate().refresh();
        await delay(15000);
        element(by.xpath(".//a[@href='https://market.beta.formed.org/annual-formed-ondemand-subscription.html']")).click();
        //element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/div/strong/a")).click();
        await delay(2000);
        browser.navigate().refresh();
        await delay(8000);
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
    Then('Click on Add to cart', async () => {        
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();    
        await delay(10000);
    }); 
    Then('Add to cart success message is displayed', async () => {        
        element(by.linkText("You added 1Year FORMED On Demand Gift Subscription to your shopping cart.")).isDisplayed();    
    });
    Then('Click on Cart', async () => {        
        element(by.xpath("//div[@class='formed__minicart']")).click(); 
        await delay(8000);   
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
    Then('CPS-0060 Enter Billing Information', async () => { 
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
        await delay(10000);
    });
    Then('Enter Billing Information for Monthly Individual', async () => { 
        browser.navigate().refresh()
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
        //element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        
        await delay(5000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        await delay(1000);
        //element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        await delay(1000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
    });
    Then('Enter Billing Information for Group', async () => { 
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
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("6002548421");
        await delay(1000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
        await delay(5000);
    });
    Then('CPS-0060 Enter Payment Method', async () => { 
        
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
        await delay(1000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
        await delay(10000);
    });
    Then('CPS-0070 Verify the Checkout Page', async () => { 
        element(by.linkText("Subtotal")).isDisplayed();
        element(by.linkText("Tax")).isDisplayed();
        element(by.linkText("Total")).isDisplayed();
        await delay(1000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
                          
        await delay(10000);
    });
    Then('Order Confirmation is displayed for Group', async () => { 
        
        await delay(10000);
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).isDisplayed();
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/strong")).isDisplayed();
        //element(by.linkText("Order Date")).isDisplayed();
        //element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
        //element(by.linkText("Payment summary")).isDisplayed();
        //element(by.linkText("Sent to: Fname Lname")).isDisplayed();
        //element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
        await delay(10000);
    });
    Then('Enter Payment Menthod for Group', async () => { 
        
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
        
    });
    Then('Enter Organisation information', async () => { 
        
        //await delay(5000);
        element(by.xpath(".//*[@id='group-subscription-organization']/div[2]/div/span/a/span")).click();
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath(".//*[@id='ui-id-5']")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='group-subscription-organization']/div[3]/div/span/a/span")).click();
        await delay(2000);
        element(by.xpath("html/body/ul[3]/li/a")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='group-subscription-organization']/div[4]/input")).sendKeys("formedwebsite");
        await delay(1000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
        
        await delay(10000);
    });
    Then('CPS-0080 Order Confirmation is displayed', async () => { 
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/header/h1"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[4]/div[1]/div[1]/div[2]/div[2]/strong"))).to.eventually.exist;
        await delay(10000);
    });
    Then('CPS-0090 Available credits are displayed', async () => { 
        
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
        
    });
    Then('Order Confirmation is displayed', async () => { 
        
        await delay(10000);
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/header/h1")).isDisplayed();
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[4]/div[1]/div[1]/div[2]/div[2]/strong")).isDisplayed();
        //element(by.linkText("Order Date")).isDisplayed();
        //element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
        //element(by.linkText("Payment summary")).isDisplayed();
        //element(by.linkText("Sent to: Fname Lname")).isDisplayed();
        //element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
        await delay(10000);
    });
    Then('Click on profile dropdown', async () => {  
        await delay(10000);       
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(1000);
    });
    Then('Click on account', async () => { 
        
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();

        await delay(10000);
    });
    Then('CPS-0100 Click on Change credit plan', async () => {  
        await delay(2000);       
        element(by.xpath(".//*[@href='https://market.beta.formed.org/creditplans.html/']")).click();
        await delay(6000);
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
    //When('Enter Name and password for individual user2', async () => {
      //  element(by.xpath("//input[@name='email']")).sendKeys("sampletest@gmail.com");
        //await delay(1000);
        //element(by.xpath("//input[@name='password']")).sendKeys("Beltone@123");
        //await delay(1000);
        //element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        //await delay(5000);
    //});
    When('Enter Name and password for individual user2', async () => {
        await delay(5000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("sampletest@gmail.com");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Beltone@123");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
          await delay(15000);
    });
    When('Enter Name and password for individual', async () => {
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("saicharan6828@gmail.com");
          await delay(5000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
          await delay(5000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
          await delay(15000);
    });
    When('Enter Name and password for individual user with multiple cards', async () => {
        await delay(5000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("multiplecards@gmail.com");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Beltone@123");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
          await delay(15000);

        //element(by.xpath("//input[@name='email']")).sendKeys("multiplecards@gmail.com");
        //await delay(1000);
        //element(by.xpath("//input[@name='password']")).sendKeys("Beltone@123");
        //await delay(1000);
        //element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        //await delay(5000);
    });
    Then('Select card 2', async () => {
        await delay(6000);
        element(by.xpath(".//*[@id='magedelight_cybersource_payment_profile_id']/option[2]")).click();
        await delay(1000);
    });
    Then('CPS-0110 Click on Cancel Credit Plan', async () => {
        await delay(6000);
        element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
        await delay(3000);
        element(by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
        await delay(10000);
    });
    Then('Order Details is displayed', async () => {
        await delay(6000);
        element(by.linkText("Order Number")).isDisplayed();
        element(by.linkText("Order Date")).isDisplayed();
        element(by.linkText("Items")).isDisplayed();
        element(by.linkText("Complete")).isDisplayed();
        element(by.linkText("Total")).isDisplayed();
        element(by.linkText("1 Yr On Demand Gift Subscription")).isDisplayed();

        await delay(1000);
    });
	When('ABP-0010 click on get credit plan', async () => {
      await delay(5000);
      element(by.xpath("//a[@href='https://market.beta.formed.org/rewards/account/']")).click();
      await delay(15000);
	});
	Then('ABP-0010 plan details are displayed', async () => {
	  await delay(5000);
      await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[1]/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[2]/a"))).to.eventually.exist;
	  await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[4]/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[6]/a"))).to.eventually.exist;
	  await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[8]/a"))).to.eventually.exist;
	  await delay(5000);
	  element(by.xpath(".//*[@id='account-nav']/ul/li[1]/a")).click();
      await delay(10000);
    });
	When('ABP-0010 account overview is displayed', async () => {
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section"))).to.eventually.exist;
	  await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[2]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[4]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[2]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[3]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[4]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[5]"))).to.eventually.exist;
	  await delay(3000);
	});
	When('ABP-0020 click on login settings', async () => {
	  element(by.xpath(".//*[@id='account-nav']/ul/li[4]/a")).click();
	  await delay(10000);
	});
	Then('ABP-0020 login details are displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[3]/div/input[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]"))).to.eventually.exist;
	  await delay(3000);
	  element(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]")).click();
	  await delay(15000);
	});
	Then('ABP-0020 Password settings are displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[3]/a[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[2]/div/input[1]"))).to.eventually.exist;
	  await delay(3000);
    });
	When('ABP-0030 click on payment method', async () => {
	  element(by.xpath("//a[@href='https://market.beta.formed.org/magedelight_cybersource/cards/listing/']")).click();
	  await delay(10000);
	});
	Then('ABP-0030 payment method details is displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/form[1]/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[3]/button"))).to.eventually.exist;
	  await delay(3000);
	  element(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/form[1]/a")).click();
	  await delay(10000);
	});
	Then('ABP-0040 edit page is displayed in payment method', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_firstname']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_lastname']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_street']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_city']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_region_id']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_zip']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='country']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/p/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='form_delete_93']/div/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='cybersource_add_card_btn']"))).to.eventually.exist;
	  await delay(3000);
	});
	When('ABP-0050 click on credit plan', async () => {
	  element(by.xpath(".//*[@id='account-nav']/ul/li[7]/a")).click();
	  await delay(10000);
	});
	Then('ABP-0050 credit plan details are displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/h3"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[1]/a"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[2]/a[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='cancel-credit-plan-btn']"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[6]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[1]"))).to.eventually.exist;
	  await delay(3000);
	  element(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[2]/a[1]")).click();
	  await delay(10000);
	
	});
	Then('ABP-0050 credit plan subscription is displayed', async () => {
	  await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]"))).to.eventually.exist;
	  await delay(3000);
	});
	When('ABP-0050 click on cancel credit plan', async () => {
	  element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
	  await delay(10000);
	});
	Then('ABP-0050 cancel credit plan prompt is displayed', async () => {
      await expect(browser.findElement(by.xpath("html/body/div[5]/aside[2]/div[2]/footer/button[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='plan-cancel-popup-container']"))).to.eventually.exist;
	  await delay(3000);
	  element(by.xpath("html/body/div[5]/aside[2]/div[2]/header/button")).click();
	  await delay(10000);
	});
	When('ABP-0060 click on your orders', async () => {
	  element(by.xpath("//a[@href='https://market.beta.formed.org/sales/order/history/']")).click();
	  await delay(10000);
	});
	Then('ABP-0070 orders page is displayed', async () => {
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[1]/strong"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span"))).to.eventually.exist;
	  await delay(3000);
	  element(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span")).click();
	  await delay(10000);
	});
	Then('ABP-0070 View details is displayed', async () => {
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[2]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[2]/div[1]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/div[2]/div[1]/div[2]"))).to.eventually.exist;
	  await delay(3000);
	  await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/span/span"))).to.eventually.exist;
	  await delay(3000);
    });
    When('LLP-0010 Unlogged user enters home page', async () => {
	   
        element(by.xpath("")).Click();
        await delay(3000);
    
    });
    Then('LLP-0010 Formed icon, Ondemand, Library, Market are displayed', async  () => {
        
        await expect(browser.findElement(by.xpath(".//*[@href='https://beta.formed.org/']"))).to.eventually.exist;	
        await delay(3000);   
        await expect(browser.findElement(by.xpath(".//*[@href='https://beta.formed.org//community']"))).to.eventually.exist;  
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/mylibrary/']"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@href='https://market.beta.formed.org/']"))).to.eventually.exist;
        await delay(3000);
});
    When('LLP-0020 Click on Login button', async  () => {
        
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(3000);
    });
    Then('LLP-0020 Email, Password, submit, Forgot password are displayed', async  () => {
              
        await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0040 When click on Forgot Password', async  () => {
        await delay(2000); 
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a")).click();
        await delay(2000);
    });
    Then('LLP-0040 Prompt is displayed to enter email', async  () => {
              
       await expect(browser.findElement(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[1]/div/input"))).to.eventually.exist;
        await delay(2000);
        
    });
    Then('click on back to enter email', async  () => {
              
        element(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[3]/label/a")).click();
        await delay(2000);
        
    });
    When('LLP-0050 Click on account drop down for parish user', async  () => {
          
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        await delay(15000);
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(1000);
    });
    Then('LLP-0050 Account, subscription, dashboard, logout are displayed', async  () => {
              
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[2]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[3]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[4]"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0060 Click on Account in username drop down', async  () => {
          
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        await delay(5000);
    });
    Then('LLP-0060 Name, Email, Password are displayed', async  () => {
              
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/h2"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0080 Click on Subscription in username drop down', async  () => {
          
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[2]")).click();
        await delay(12000);
    });
    Then('LLP-0080 Subscription, Parish, Payment information are displayed', async  () => {

        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/h3"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div/div/h3"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[3]/div/div/div[1]/h3"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0110 Click on dashboard in username drop down', async  () => {  
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
        await delay(2000);
    });
    When('LLP-0120 Click on logout button', async  () => {
          
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[5]")).click();
        await delay(2000);
    });
    Then('LLP-0120 market site login button is displayed', async  () => {
              
       await expect(browser.findElement(by.xpath(".//*[@id='simple-dropdown']"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0050 Click on username drop down for individual user', async  () => {
          
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(2000);
        element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("123456");
        await delay(1000);
        element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(2000);
    });
    Then('LLP-0050 Account, Subscription, logout are displayed', async  () => {
              
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
        await delay(2000);
    });
    When('LLP-0100 Click on Subscription for individual user', async  () => {
          
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        await delay(2000);
    });
    Then('LLP-0100 Subscription payement is displayed', async  () => {
              
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[1]/div[1]/a"))).to.eventually.exist;
        await delay(2000);
    });
    When('PVP-0010 click on market page', async () => {
        await delay(5000);
        element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
        await delay(12000);                                                       
	});
	Then('PVP-0010 Digital products link is displayed', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']")).isDisplayed();    
        await delay(8000);
	});
	When('i move to digital products',async () => {
	    browser.actions().mouseMove(element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
	});
	When('PVP-0010 Click on watch Link and Verify', async () => {
       await delay(5000);
       element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/watch.html']")).click();
       await delay(10000);
	});
	Then('PVP-0010 watch page is displayed', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol")).isDisplayed();    
        await delay(8000);
	});
	When('PVP-0020 i click on Item', async () => {
       await delay(5000);
       element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
       await delay(10000);
	});
	Then('PVP-0020 Product detailed page is displayed', async () => {
        
       element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1")).isDisplayed();    
       await delay(8000);
	   element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img")).isDisplayed();
       await delay(8000);
	   element(by.xpath(".//*[@id='options-1485-list']/div/label")).isDisplayed();    
       await delay(8000);
	   element(by.xpath(".//*[@id='related__items']/div[1]/h2")).isDisplayed();    
       await delay(8000);
	   element(by.xpath(".//*[@id='product-addtocart-button']")).isDisplayed();
       await delay(8000);
	});
	When('click on Add to cart button', async () => {
       await delay(5000);
       element(by.xpath(".//*[@id='product-addtocart-button']")).click();
       await delay(10000);
	});
	Then('PVP-0030 Confirmation message and is displayed and and Product is added to cart', async () => {
       element(by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div")).isDisplayed();
       await delay(8000);
	   element(by.xpath(".//*[@id='product-alreadyincart-button']")).isDisplayed();    
       await delay(8000);
	});
	When('PVP-0040 click on the Incart option', async () => {
       await delay(5000);
       element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
       await delay(10000);
	});
	Then('PVP-0040 drop down cart product is displayed', async () => {
        
       element(by.xpath(".//*[@id='ui-id-1']")).isDisplayed();    
       await delay(8000);
	});
	When('PVP-0050 click on product in you may also Like', async () => {
       await delay(5000);
       element(by.xpath(".//*[@id='related__items']/div[2]/div/ol/li[1]/div/a/img")).click();
       await delay(10000);
	
	});
	When('PVP-0080 Click on purchase product', async () => {
      await delay(3000);
      element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a")).click();
      await delay(10000);
	});
	Then('PVP-0080 View in my library button is displayed', async () => { 
        
        element(by.xpath(".//*[@id='product-viewinlibrary-button']")).isDisplayed();
		await delay(5000);
		element(by.xpath(".//*[@id='product-viewinlibrary-button']")).click();
        await delay(10000);
    });
	Then('PVP-0080 purchase video product is displayed', async () => { 
        
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).isDisplayed();
		await delay(5000);
    });
    When('PAP-0010 i navigate to listen and click on audio dramas', async () => {
	  
        element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
        await delay(5000);
    });
    Then('PAP-0010 Audio dramas page is displayed', async () => {
             
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
        await delay(2000);
    });
    When('PAP-0020 i click on Item', async () => {
         
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(5000);
    });
    Then('PAP-0020 Product detailed page is displayed', async () => {     
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='options-803-list']/div/label"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        await delay(3000);
    
    });
    Then('PAP-0020 Text, You May Also Like, Product card in right column with image, Add to cart button are displayed', async () => {
    
        await expect(browser.findElement(by.xpath(".//*[@id='related__items']/div[2]/div/ol/li[1]/div/a"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        await delay(5000);
    });	
    When('LP-0050 click on watch', async () => {
        element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[1]/a/label")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[1]"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]"))).to.eventually.exist;
        await delay(3000);
        element(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i")).click();
        await delay(10000);
    });
    Then('LP-0060 click on play button', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='close-modal-mylibrary-player-1969']")).click();
        await delay(5000);
    });
    Then('LP-0070 click on play button', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='close-modal-mylibrary-player-1665']")).click();
        await delay(5000);
    });
    When('LP-0070 click on Listen', async () => {
        element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[2]/a/label/div[1]")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[1]/div"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[2]"))).to.eventually.exist;
        await delay(5000);
        element(by.xpath(".//*[@id='open-modal-mylibrary-player-1665']/i")).click();
        await delay(15000);
    });
    When('LP-0080 click on Read', async () => {
        element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[3]/a/label/div[1]")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]/strong"))).to.eventually.exist;
        await delay(3000);
        element(by.xpath(".//*[@id='open-ebook-download-modal-2297']/i")).click();
        await delay(10000);
    });
    When('LPA-0010 click on login button', async () => {
        element(by.xpath(".//*[@id='simple-dropdown']")).click();
        await delay(10000);
    });
    Then('LP-0090 Download format is displayed', async () => {

        await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/p"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/a"))).to.eventually.exist;
        await delay(5000);
        await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/p"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[2]/a"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[2]/p"))).to.eventually.exist;
        await delay(3000);
        element(by.xpath(".//*[@class='action-close']")).click();
        await delay(5000);
    });
    When('LPA-0010 Enter Parish Admin Name and password', async () => {
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
        await delay(1000);
        element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
        await delay(15000);
    });
    When('Click on Watch in Digital products', async () => {
       element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/watch.html']")).click();
       await delay(10000);
    });
       Then('Click on Product in watch', async () => {
       element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
       await delay(10000);
    });
    Then('Click on Add to Cart in Product Detial Page', async () => {
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
        await delay(10000);
    });
    Then('Click on Product2 in watch', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
        await delay(10000);
    });
    Then('CO-0010 Verify Check Out in Cart', async () => {
       element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[1]/a")).click();
       await delay(10000);
    });
    Then('CO-0020 Cart should contain added products', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
      await delay(5000);
      element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
      await delay(10000);
    });
    Then('CO-0030 delete product from Cart', async () => {
     element(by.xpath(".//*[@id='mini-cart']/li[2]/div[1]/div/div/div/a")).click();
     await delay(10000);
    });
    Then('CO-0040 Create Account and Continue login is displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='register_modal_trigger']"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='login_modal_trigger']"))).to.eventually.exist;
      await delay(5000);
    });
    Then('CO-0050 Verify Details in create Account', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
      await delay(2000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input"))).to.eventually.exist;
      await delay(5000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input"))).to.eventually.exist;
      await delay(5000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label/span[2]"))).to.eventually.exist;
      await delay(3000);
      await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
      await delay(5000);
    });
    Then('CO-0050 Enter Details in create Account', async () => {
        var x = 999999;
        var rand = Math.floor(Math.random()*x) + 1;        
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("sair7989@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("krishna@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Krishna@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
        await delay(20000);   
    });  
    Then('CPS-0060 Click on Log Out', async () => {
        element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
        await delay(15000);
    });
    Then('CO-0070 Click on Continue login', async () => {
        element(by.xpath(".//*[@id='login_modal_trigger']")).click();
        await delay(10000);
    });
    Then('CO-0070 Enter Login details in Continue login', async () => {
        await delay(3000);
        element(by.xpath(".//*[@class='form-control gigya-input-text']")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(5000);
        element(by.xpath(".//*[@class='form-control gigya-input-password']")).sendKeys("123456");
        await delay(5000);
        element(by.xpath(".//[@class='btn btn-primary d-none d-md-inline-block']")).click();
        await delay(10000);
    });
    Then('Click on Product3 in watch', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/a/img")).click();
        await delay(10000);
    });
    Then('CO-0100 Click on Apply credits to disable', async () => {
       element(by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[2]/div/div[2]/label/span")).click();
       await delay(3000);
       await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']"))).to.eventually.exist;
       await delay(2000);
       await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']/button[2]"))).to.eventually.exist;
       await delay(2000);
       element(by.xpath(".//*[@id='minicart-apply-credits']/button[2]")).click();
       await delay(5000);
    });
    Then('CO-0080 Enter CVV', async () => {
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        await delay(2000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
        await delay(10000);
    });
    Then('Click on Product4 in watch', async () => {
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[14]/div/a/img")).click();
        await delay(10000);
    });
    When('CO-0010 Click on Watch in Digital products', async () => {
        await delay(8000);
        element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
        await delay(10000);

    });
    Then('VR-0010 entercode,getfreetrail,sign up group is displayed', async  () => {

        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/registration-column/modal-link/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[3]/registration-column/a"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a")).click();
        await delay(10000);
    });
    Then('VR-0020 sign in group detail is displayed', async  () => {      
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
        await delay(10000);
    });
    Then('VR-0020 click on checkout button', async  () => {
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
        await delay(8000);
        element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        await delay(15000);
    });
    Then('VR-0030 Billing information are displayed', async () => { 
        browser.navigate().refresh();
        element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
        await delay(5000);
        element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
        await delay(12000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
        await delay(5000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
        await delay(1000);
        element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
        await delay(1000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("9898985555");
        await delay(3000);
        element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
        await delay(1000);
        element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
        await delay(5000);
    });
    Then('VR-0030 Enter Payment Method', async () => { 
        
        //await delay(5000);
        //element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
        
        await delay(5000);
        //element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
        await delay(1000);
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
    });
    When('VR-0040 click on Entercupon', async () => {
        await delay(8000);
        element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
        await delay(10000);
        await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
        await delay(2000);
    });
    When('VR-0030 Choose organization', async () => {
        element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
        await delay(2000);
        element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[4]/div[2]/div/button")).click();
        await delay(15000);
    });
    When('VR-0050 order conformation is displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
        await delay(2000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/h2"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
        await delay(15000);

    });
    When('VR-0060 Enter organization information', async () => {
        element(by.xpath(".//*[@id='groupLeader']")).sendKeys("Krishna");
        await delay(2000);
        element(by.xpath(".//*[@id='groupMission']")).sendKeys("I love my country");
        await delay(2000);
        element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("Formed");
        await delay(2000);
        element(by.xpath(".//*[@class='btn btn-primary btn-large']")).click();
        await delay(5000); 
        element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[2]/div/div/p/button")).click();
        await delay(10000);
    });
    Then('VR-0060 Leader checklist is displayed', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[2]/label"))).to.eventually.exist;
        await delay(1000);
        await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[3]/label"))).to.eventually.exist;
        await delay(1000);
        await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[4]/label"))).to.eventually.exist;
        await delay(1000);
        await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[5]/label"))).to.eventually.exist;
        await delay(1000);
        element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
        await delay(4000);
        element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
        await delay(10000); 
    });
    Then('VR-0070 Account information is displayed', async () => {
      await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[1]/span"))).to.eventually.exist;
      await delay(2000);
      await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
      await delay(2000);
      await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
      await delay(2000);
      element(by.xpath(".//*[@id='simple-dropdown']")).click();
      await delay(4000);
      element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
      await delay(8000);             
  });
   Then('VR-0080 click on ondemand subscription' , async () => {
      element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
      await delay(10000);
      element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
      await delay(8000);
});
Then('VR-0090 sign in group detail is displayed', async  () => {
    
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='product-addtocart-button']")).click();
    await delay(10000);

});
Then('VR-0100 Billing information are displayed', async () => { 
    browser.navigate().refresh();
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(12000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
When('VR-0120 click on Entercupon', async () => {
    await delay(8000);
    element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[5]/div/button")).click();
    await delay(15000);
});
When('VR-0130 order conformation is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
    await delay(15000);
});
Then('VR-0140 subscription information', async () => {
    element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
    await delay(4000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
    await delay(10000); 
    element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div/div/div/div/div[3]/div[2]/modal-link/a/span")).click();
    await delay(2000);
    element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div/div/div/div/div[3]/div[2]/a")).click();
    await delay(2000);

});
Then('ICO-0020 Billing information are displayed in incart', async () => { 
    browser.navigate().refresh();
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(12000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
Then('ICO-0020 Verify the Checkout Page', async () => { 
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[5]/div/button")).click();
    await delay(15000);
});
When('ICO-0010 instant page is displayed', async () => {
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/h1"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/img"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('ICO-0030 order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('ICO-0040 7 days free trial page is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/div/p[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('getbronze order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('getsilver order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[3]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('getgold order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
    await delay(2000);
});
Then('getplatinum order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
    await delay(2000);
});
Then('SoG order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('BiaY order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('7daytrial conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('BiYa Verify the Checkout Page', async () => { 
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div/div[6]/div/button")).click();
    await delay(15000);
});
Then('BiaY Billing information are displayed in incart', async () => { 
    browser.navigate().refresh();
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(12000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
Then('click on ondemand subscription' , async () => {
    element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
    await delay(10000);
    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
    await delay(8000);
});
When('PBC-0010 click on pay by check' , async () => {
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div[2]/div/div/select")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div[2]/div/div/select/option[2]")).click();
    await delay(10000);
});
When('PBC-0030 order conformation is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/span[1]/span"))).to.eventually.exist;
    await delay(2000);
});
Then('PBC-0020 Billing information are displayed', async () => { 

    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/input")).sendKeys("Hulk");
    await delay(5000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("9898985555");
    await delay(3000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
    await delay(5000);
});
When('click on ondemand page', async () => { 
    element(by.xpath("//a[@href='https://beta.formed.org/']")).click();
    await delay(15000);
});
When('click on login user in ondemand page', async () => { 
    await delay(3000);
    element(by.xpath(".//*[@id='simple-dropdown']/i")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
    await delay(10000);
});
When('subscription information is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[1]"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[1]/div[1]/a"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
    await delay(5000);
});
When('parish admin code is not present', async () => {
    //element.all(by.xpath(".//*[@id='parishCode']")).then(function(items) {
      //  expect(items.length).toBe(0);
    //});
   // element.all(by.css('.k-loading-image')).then(function(items) {
     //   expect(items.length).to.be.true;
    //});
    expect(element(by.xpath(".//*[@id='parishCode']")).isDisplayed()).toBe(false);
    await delay(5000);
    //element.all(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]")).then(function(items) {
      //  expect(items.length).toBe(0);
    //});
    //await expect(element(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]")).isDisplayed()).to.equal(false);
    //await delay(5000);
    
});
When('click on Dashboard', async () => {
    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
    await delay(15000);
});
});
