class Paywall {
    //page objects
    get paywallTitle() {
        return $('.mlb-paywall-title');
    }
    get paywallSubTitle() {
        return $('.mlb-paywall-subtitle');
    }
    get pawallFreeAccountContinue() {
        return $(
            "//*[contains(@aria-label,'Create a free account')]//*[text()='Continue']",
        );
    }
    get pawallYearlyContinue() {
        return $(
            "//*[contains(@aria-label,'MLB.TV Yearly')]//*[text()='Continue']",
        );
    }
    get pawallSingleTeamContinue() {
        return $(
            "//*[contains(@aria-label,'MLB.TV Single Team')]//*[text()='Continue']",
        );
    }
    get pawallYearlyPrice() {
        return $(
            "//*[contains(@aria-label,'MLB.TV Yearly')]//*[contains(@class,'mlb-paywall-tile-price')]",
        );
    }
    get pawallSingleTeamPrice() {
        return $(
            "//*[contains(@aria-label,'MLB.TV Single Team')]//*[contains(@class,'mlb-paywall-tile-price')]",
        );
    }

    //functions
}

export const paywall = new Paywall();
