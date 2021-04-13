class Welcome {
    //page objects
    get welcomeCreateAccount() {
        return $(
            "//div[contains(@class,'mlb-onboarding-tile-label') and text()='Get Started']",
        );
    }
    get welcomeLogin() {
        return $(
            "//div[contains(@class,'mlb-onboarding-tile-label') and text()='Log In']",
        );
    }
    get welcomeBrowseNow() {
        return $(
            "//div[contains(@class,'mlb-onboarding-tile-label') and text()='Continue']",
        );
    }

    //functions
    clickBrowseNow() {
        browser.pause(1000);
        browser.keys('\uE014');
        browser.pause(1000);
        browser.keys('\uE014');
        //this.welcomeBrowseNow.click();
        browser.pause(1000);
        browser.keys('\uE006');
    }
}

export const welcome = new Welcome();
