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
        await delay(15000);
    });
    Then('navigate to formed page', async () => {
        
        element(by.xpath("/html/body/header/section[1]/div[1]/strong/span")).click;
        await delay(5000);
    });
	When('Formed icon is displayed in home page', async () => {
	   
		
	    element (by.xpath("html/body/header/section[1]/div[1]/strong/span")).to.eventually.exist;
		
	    element (by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[2]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).isDisplayed();
		   
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
    When('navigate to market page path', async () => {
        await browser.get("https://market.beta.formed.org");
        await delay(15000);
    });
    Then('Show products link is displayed', async () => {
        element(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']")).isDisplayed();    
        await delay(8000);
    });
    When('I click on On Demand page', async () => {
        await delay(8000);
        element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
        await delay(12000);
    });          
	 When('On Demand page is displayed', async () => {	 
	    element(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div")).isDisplayed();
	});
	When('I click on Learn more', async () => {
        element(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div/a/p")).click();	
	});

	When('video plays', async () => {
	    element(by.xpath(".//*[@id='player']/div/div/div[3]")).isDisplayed();	
	});	
	
	When('there is On demand , Library , market is displayed', async () => {
	   
        element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
	   
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).isDisplayed();   
	   
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[3]/a")).isDisplayed();
	
	});
	When('i click on Market page',async () => {
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	});
	 
	When('Get credit link is displayed',async () => {
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).isDisplayed();
	});
	 
	 When('i click on Get credits plan',async () => {
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();	 
	});
	When('Credit Plans page is displayed',async () => {
	    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]")).isDisplayed();	 
	});
	 
	When('i click on cart icon when there are no items in cart', async () => {
	
	    element(by.xpath(".//*[@id='ui-id-1']")).click();
	    await delay(1000);                 
    });
	When('cart page is displayed',async () => {
	
	    element(by.xpath(" .//*[@id='minicart-content-wrapper']/div/strong")).isDisplayed();
	    await delay(1000);                 
    });
	 
	  
	When('i move to Digital products',async () => {
	    browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
        await delay(5000);
	});

	When('Digital products drop down list is displayed',async () => {
	 
        await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/shop-products.html']"))).to.eventually.exist;
        await delay(5000);
		
	});
	 
	When('i navigate to market page to serach for search button',async () => {
        element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	});
						  
	When('search icon is displayed', async () => {
	 
       element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).isDisplayed();
    });   
	   
	When('i click on market button', async () => {
	  
	   element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	});
	  
	  
	When('Special offers are displayed', async () => {
	    await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/h1[1]"))).to.eventually.exist;
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[1]"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[1]/h3v"))).isDisplayed();	
		await expect(browser.indElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[2]"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[2]/div"))).isDisplayed();	
        await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[3]"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[3]/div"))).isDisplayed();	
	
        await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/h1[2]"))).to.eventually.exist;
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[1]"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[1]/div"))).isDisplayed();	
        await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[2]"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[2]/div"))).isDisplayed();	
		await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[3]"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath(".//*[@id='homepage_featured_products']/ul[2]/li[3]/div[1]"))).isDisplayed();	
		
	});
	   
	   
	When('i click on Terms of use',async () => {
	 
	                      
       element(by.xpath("html/body/main/div/footer/div/div/ul/li[1]/a")).click();   
	});
	   
	   
	When('terms of use is displayed',async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/h1"))).isDisplayed();	
	});  
	   
	When('i click on privacy policy', async () => {
	    element(by.xpath("html/body/main/div/footer/div/div/ul/li[2]/a")).click();
	   
	});
	When('privacy policy page is displayed',async () => {
	 
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/h1"))).isDisplayed();
	});
	   
	When('i click on help', async () => {
	 
	                      
        element(by.xpath("html/body/main/div/footer/div/div/ul/li[3]/a")).click();
	});
	When('help page is displayed', async () => {
	 
	   
        await expect(browser.findElement(by.xpath("html/body/div[1]/section"))).isDisplayed();
	});  
	   
	When('i move to digital products', async () => {
	 
	    browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
        await delay(5000);
	});
	When('mega-menu is displayed', async () => {
		
	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a"))).to.eventually.exist;
        await delay(5000);
		
        await expect(browser.findElement(by.xpath(" html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[1]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[2]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[3]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[4]/div/a"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[5]/div/a"))).isDisplayed();	

		
		
		
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[1]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[2]/div/a"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[3]/div/a"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[4]/div/a"))).isDisplayed();	
								  

        await delay(5000);
						  
    });
						  
    When('i click on search icon and enter text', async () => {
	 
	   element(by.xpath(".//*[@id='search']")).sendKeys("Listen");
	                      
       element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	});
	   
	When('results page is displayed', async () => {
			 
			 
       element(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/p/a/span")).isDisplayed();
			 
	});
	
	   
	   
	  
	When('unlogged in user on clicking on demand', async () => {
	   
	   
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	   
	    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
	    
		element(by.xpath(" html/body/header/section[1]/div[2]/ul/li[1]/a")).click();
	});
		
	When('on demand page with enter free trail , enter code , Sign up group is displayed',async () => {

		
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/registration-column/modal-link/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[3]/registration-column/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[4]/registration-column/a"))).isDisplayed();	
		
		
	});
	   
	   
	When('i click on library page if there is no content', async () => {
	   
                         
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
				   
				   
	});

	When('your library is empty and some message is displayed', async () => {
	   
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).isDisplayed();	
                      
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p"))).isDisplayed();	
	   
	});
       
	When('i click on market page and move to Digital products',async () => {
		 
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
		  
	
	});
	When('menu elements are displayed',async () => {
		 
		  
	    browser.actions().mouseMove(element(by.xpath("html/body/header/section[2]/section/div[1]/div[1]/a/span[1]"))).perform();
        await delay(5000);
		
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a"))).to.eventually.exist;
        await delay(5000);
		
        await expect(browser.findElement(by.xpath(" html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[1]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[2]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[3]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[4]/div/a"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/ul/li[5]/div/a"))).isDisplayed();	
		
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[1]/div/a"))).to.eventually.exist;
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[1]/div/a"))).isDisplayed();	
        await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[2]/div/a"))).isDisplayed();	
	    await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[3]/div/a"))).isDisplayed();	
		await expect(browser.findElement(by.xpath("html/body/header/section[2]/section/div[1]/div[2]/ul/li[2]/ul/li[4]/div/a"))).isDisplayed();	
								  

        await delay(5000);
						  
	});	   
	   
	When('i click on login button and enter username and password', async () => {
        element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath("//input[@name='password']")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]']")).click();
        await delay(5000);
	});
	When('there is On demand , Library , market is displayed	', async () => {
	   
	   element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
	   
	   element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).isDisplayed();
	   
	   
	   element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[3]/a")).isDisplayed();
	
	});
	   
	   
	When('an unlogged in user enters home page', async () => {
	   
	    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
		
    });
		
	When('Formed icon is displayed', async () => {
	   
		
	    element (by.xpath("html/body/header/section[1]/div[1]/strong/span")).to.eventually.exist;
		
	    element (by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[2]/a")).isDisplayed();
		element (by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).isDisplayed();
		   
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
	   
	   
	When('i click on library link and there is no content', async () => {
	   
                         
	    element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[2]/a")).click();
    });
				
	When('your library is  empty and some message is displayed',async () => {
	      
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).isDisplayed();	
                      
        await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p"))).isDisplayed();	
	   
	});
	   
	When('i navigate to market page and click on Get credits plan', async () => {
	   
                         
	    element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).click();
				   
	});
				   
				   
	When('credits plan page is displayed', async () => {
	   
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/h1"))).isDisplayed();	
                      	
	   
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
	   
	   element(by.xpath("html/body/header/section[1]/div[1]/a/span")).to.eventually.exist;
	   
    });
	   
	When ('i navigate to Account drop down and click on logout', async () => {
		
	    element(by.xpath("html/body/header/section[1]/div[2]/ul/li[3]/a")).click();
	   
	                    
	    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	   
	    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
					 
	});
					 
	When ('Home page is displayed', async () => {
		
	    element(by.xpath(" html/body/header/section[1]/div[1]/strong/span")).isDisplayed();
	});		 
	When('i click on login button to verify for forgot password', async  () => {
	  
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        
        });
    When('forgot password is displayed', async  () => {    
      await delay(1000);  
      element(by.xpath(".//*[@class='forgotPassword']")).isDisplayed();
      //element(by.xpath("html/body/header/section[1]/div[6]/ul/li/div/div/div/div/div/div/div/div/div[2]/div/form/div/div[3]/a")).isDisplayed();
         
    });
    When('i Enter Name and password for individual user', async () => {
        await delay(5000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
          await delay(1000);
          element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
          await delay(15000);
         });
    When('Login page is displayed', async () => {    
         element(by.xpath(".//*[@id='header']/div/div/div/div/global-nav/ul/li[1]/a")).isDisplayed();  
    });
      
    When('i click on market', async () => {
          element(by.xpath(".//a[@href='https://market.beta.formed.org/']")).click();
          await delay(15000);
    });
          
    When('there is get credit plan', async () => {
          element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
          await delay(10000);
    });
    When('a user without get credit plan click on shopping product', async () => {
      
        element(by.xpath(".//*[@id='homepage_featured_products']/ul[1]/li[1]")).click();
        element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[1]/div[2]/div[3]/div/span/button")).isDisplayed();
        await delay(10000);
    });
          
    When('i click on get credits plan', async () => {      
      element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).click();
      await delay(5000);
    });
      
    When('get credits plan link is displayed', async () => {      
       element(by.linkText("Find a Credit Membership Plan that is right for you...")).isDisplayed();
       await delay(5000);
    });
      
      
    When('i click on user name drop down', async () => {  
       element(by.xpath(".//*[@id='account-dropdown-button']")).click();
       await delay(5000);
    });  
    When('then account is displayed', async () => {     
       element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).isDisplayed();
      
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
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
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
		
	      
		
		 When(' ', async () => {
	 
	 
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
		

	 
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
	When(' Cart displayed with following items', async () => {
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
        await expect(browser.findElement(by.xpath("//a[@href='https://market.beta.formed.org/no-hay-amor-mas-grande.html']"))).to.eventually.exist;
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
        element(by.xpath(".//a[@href='https://market.beta.formed.org/shop-products/formed-subscriptions/gifts.html']")).click();
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
    When('Enter CVV', async () => {
        element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
        await delay(1000);
        element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div/div[2]/div[2]/div[2]/div[5]/div/button")).click();
        await delay(5000);
    });
    Then('Select card 2', async () => {
        await delay(6000);
        element(by.xpath(".//*[@id='magedelight_cybersource_payment_profile_id']/option[2]")).click();
        await delay(1000);
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
});
