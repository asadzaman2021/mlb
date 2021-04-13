class Logout {
    //page objects
    get logoutMlbLogo() {
        return $(
            "//*[contains(@class,'mlb-log-out-content')]//*[contains(@class,'mlb-login-logo')]",
        );
    }
    get logoutText() {
        return $(
            "//*[contains(@class,'mlb-log-out-content')]//*[contains(@class,'mlb-log-out-title')]",
        );
    }
    get logoutMessage() {
        return $(
            "//*[contains(@class,'mlb-log-out-content')]//*[contains(@class,'mlb-log-out-message-text')]",
        );
    }
    get logoutButton() {
        return $(
            "//*[contains(@class,'mlb-log-out-content')]//*[contains(@aria-label,'Log Out')]",
        );
    }
    get logoutCancel() {
        return $('#cancel');
    }

    //function
}

export const logout = new Logout();
