const { Given, When, Then } = require('cucumber');
var assert = require('assert');

Given('I try to search using Wikipedia App', function () {
	var searchSelector = `~Search Wikipedia`;
	browser.waitForVisible(searchSelector, 30000);
	browser
		.element(searchSelector)
		.click();
})

When('I type in "BrowserStack"', function () {
	var insertTextSelector = 'android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")';
	browser.waitForVisible(insertTextSelector);
	browser
    	.element(insertTextSelector)
    	.keys('BrowserStack')
    	.pause(5000);
})

Then('I should see results', function () {
	var allProductsName = browser.elements(`android.widget.TextView`).value;
    assert(allProductsName.length > 0);
})