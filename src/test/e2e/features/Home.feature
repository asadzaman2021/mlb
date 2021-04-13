Feature: Home Page

    Background: Pre-condition
        Given The user arrives on home page
            And User sees home page

    @validLogin
    Scenario: Login - Valid
        When The user click login button in home page
        Then The user sees login screen
        When User type email "tvyearly@gmail.com"
            And User type password "Password1"
            And User click login
        Then User sees success message
        When User click Get started button
        Then User sees home page

    @settings
    Scenario: Login - Invalid
        When The user click settings on home page
        Then Entitled User should see settings menu options displayed
