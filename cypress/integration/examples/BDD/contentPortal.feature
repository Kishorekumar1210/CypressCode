Feature: Login page with valid username and password

Scenario: Valid username and password flow
Given user provide username
When user provide password
Then user click on login button

Scenario: Check End to End flow
Given user provide username
When user provide password
Then user click on login button
And user click on selectAll
And user click on ViewSelected

Scenario: Validate the settings page
Given user provide username
When user provide password
Then user click on login button
And user click on selectAll
And user click on ViewSelected
And user validate settings page