const { Given, When, Then } = require('cucumber');
var assert = require('assert');
var path = require('path');

Given('I start test on the Local Sample App', function () {
	var searchSelector = 'android=new UiSelector().resourceId("com.example.android.basicnetworking:id/test_action")';
    browser.waitForVisible(searchSelector, 30000);
    browser
      .element(searchSelector)
      .click(); 
})

Then('I should see "Up and running"', function () {
    var insertTextSelector = `android.widget.TextView`;
    browser.waitForVisible(insertTextSelector, 30000);

    var allTextElements = browser.elements(`android.widget.TextView`).value;
    browser.pause(10000);

    var testElement = null;
    allTextElements.forEach(function (textElement) {
      var textContent = browser.elementIdText(textElement['ELEMENT']).value;
      if (textContent.indexOf('The active connection is') !== -1) {
        testElement = textElement;
      }
    });

    if (testElement === null) {
        var screenshotPath = path.resolve(__dirname, 'screenshot.png');
        browser.saveScreenshot(screenshotPath);
        console.log('Screenshot stored at ' + screenshotPath);
        throw new Error('Cannot find the needed TextView element from app');
    }

	var matchedString = browser.elementIdText(testElement['ELEMENT']).value;
    console.log(matchedString);
    assert(matchedString.indexOf('The active connection is wifi') !== -1);
    assert(matchedString.indexOf('Up and running') !== -1);
})