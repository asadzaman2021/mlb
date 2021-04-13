class Games {
    //page objects
    get datePicker() {
        return $("//*[contains(@class,'date-picker-button')]//span");
    }
    get datePrevious() {
        return $("//*[contains(@aria-label,'Previous')]");
    }
    get dateNext() {
        return $("//*[contains(@aria-label,'Next date')]");
    }
    get firstScoreTile() {
        return $(
            "//*[contains(@class,'mlb-scores-row')][1]//*[contains(@class,'mlb-scores-tile')]",
        );
    }
    get feedSelector() {
        return $("//*[@class='feed-selector']");
    }
    get feedSelectorTeamAway() {
        return $(
            "//*[@class='feed-selector']//*[@class='feed-select-header-team away']",
        );
    }
    get feedSelectorTeamScore() {
        return $(
            "//*[@class='feed-selector']//*[@class='feed-select-header-state-score']",
        );
    }
    get feedSelectorTeamHome() {
        return $(
            "//*[@class='feed-selector']//*[@class='feed-select-header-team home']",
        );
    }
    get feedSelectorContent() {
        return $(
            "//*[@class='feed-selector']//*[@class='feed-select-content']",
        );
    }
    get teamSelectorDropdown() {
        return $(
            "//*[@class='mlb-calendar-header']//*[contains(@class,'mlb-calendar-team-selector')]",
        );
    }
    get teamSelectorDropdownItem() {
        return $("//*[@class='mlb-dropdown-item'][1]");
    }
    get teamSelectorDropdownItemLogo() {
        return $(
            "//*[@class='mlb-dropdown-item'][1]//*[@class='mlb-team-selector-logo']",
        );
    }
    get teamSelectorDropdownItemName() {
        return $(
            "//*[@class='mlb-dropdown-item'][1]//*[@class='mlb-team-selector-name']",
        );
    }
    get calendarWeekDay() {
        return $(
            "//*[contains(@class,'calendar-grid-header')]//*[contains(@class,'calendar-grid-header-weekday')][1]",
        );
    }
    get firstCalendarCelll() {
        return $(
            "//*[contains(@class,'mlb-calendar-row')][1]//*[contains(@class,'mlb-calendar-cell')][1]",
        );
    }
    get firstCalendarCelllDay() {
        return $(
            "//*[contains(@class,'mlb-calendar-row')][1]//*[contains(@class,'mlb-calendar-cell')][1]//*[contains(@class,'tile-calendar-day')]",
        );
    }
    get firstCalendarCelllVenuIndicator() {
        return $(
            "//*[contains(@class,'mlb-calendar-row')][1]//*[contains(@class,'mlb-calendar-cell')][1]//*[contains(@class,'tile-calendar-venue-indicator')]",
        );
    }
    get firstCalendarCelllCalanderLogo() {
        return $(
            "//*[contains(@class,'mlb-calendar-row')][1]//*[contains(@class,'mlb-calendar-cell')][1]//*[contains(@class,'tile-calendar-logo')]",
        );
    }
    get firstCalendarCelllCalanderStatus() {
        return $(
            "//*[contains(@class,'mlb-calendar-row')][1]//*[contains(@class,'mlb-calendar-cell')][1]//*[contains(@class,'tile-calendar-status text')]",
        );
    }

    get buttonLogin() {
        return $('.login');
    }

    get buttonLoginToMLB() {
        return $(
            '//div[@class="mlb-onboarding-tile-label" and text()="Log In"]',
        );
    }
    get inputEmail() {
        return $('body #email');
    }

    get inputPassword() {
        return $('body #password');
    }

    get buttonSignIn() {
        return $('body #submit');
    }

    get userLoggedIn() {
        return $('.account');
    }

    get successMessage() {
        return $('.mlb-login-success-message');
    }

    get scoresMenu() {
        return $(
            '//button[contains(@class,"navigation-item menu-button")]//*[text()="Scores"]',
        );
    }

    get homeMenu() {
        return $(
            '//button[contains(@class,"navigation-item menu-button")]//*[text()="Home"]',
        );
    }

    get baltimore() {
        return $('//*[contains(@aria-label,"Chicago White Sox")]');
    }

    get done() {
        return $('//*[contains(@aria-label,"Next")]');
    }

    get continue() {
        return $(
            "//div[contains(@class,'mlb-onboarding-tile-label') and text()='Continue']",
        );
    }

    get prevDateArrow() {
        return $(
            '//*[contains(@class,"date-picker-button")]//img[@alt="Previous Date"]',
        );
    }

    login(email: string, password: string) {
        this.baltimore.waitForExist({ timeout: 10000 });
        this.baltimore.click();
        //this.done.waitForExist({ timeout: 10000 });
        browser.pause(3000);
        browser.keys('\uE006');

        //this.done.click()
        this.continue.waitForExist({ timeout: 10000 });
        this.continue.click();

        //this.inputEmail.waitForEnabled();
        //this.inputEmail.clearValue();
        //this.inputEmail.setValue(email);
        //this.inputPassword.clearValue();
        //this.inputPassword.setValue(password);
        //browser.pause(3000);

        //browser.debug();

        //ArrowRight
        browser.keys('\uE014');
        //browser.pause(3000);
        //console.log("ArrowRight")

        //ArrowDown
        //browser.keys("\uE015");
        //browser.keys("\uE015");
        //console.log("ArrowDown")

        //
        browser.keys('\uE006');
        console.log('Enter');
        //this.buttonSignIn.click();
        this.successMessage.waitForExist({ timeout: 10000 });
        browser.keys('\uE006');
        browser.pause(3000);
        browser.keys('\uE012');
        this.scoresMenu.waitForExist({ timeout: 10000 });
        browser.keys('\uE013');
        browser.pause(3000);
        browser.keys('\uE006');
        //browser.debug();
        this.datePicker.waitForExist({ timeout: 10000 });
        this.prevDateArrow.click();
        browser.pause(3000);
        this.prevDateArrow.click();
        browser.pause(3000);
        this.prevDateArrow.click();
        browser.pause(3000);
        this.datePicker.click();
        browser.pause(3000);
    }
}

export const games = new Games();
