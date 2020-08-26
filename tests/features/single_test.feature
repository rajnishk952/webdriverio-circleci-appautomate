Feature: Search in Wikipedia App

Scenario: Search for a term
  Given I try to search using Wikipedia App
  When I type in "BrowserStack"
  Then I should see results