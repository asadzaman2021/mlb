class Settings {
    //page objects
    get settingsMenuLogout() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Log Out')]",
        );
    }
    get settingsMenuLogoutArrow() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Log Out')]//img[@alt='arrow']",
        );
    }
    get settingsMenuChangeYourFavoriteTeam() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Change Your Favorite Team')]",
        );
    }
    get settingsMenuChangeYourFavoriteTeamArrow() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Change Your Favorite Team')]//img[@alt='arrow']",
        );
    }
    get settingsMenuSelectTeamsToFollow() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Select Teams To Follow')]",
        );
    }
    get settingsMenuSelectTeamsToFollowArrow() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Select Teams To Follow')]//img[@alt='arrow']",
        );
    }
    get settingsMenuHideSpoilers() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Hide Spoilers')]",
        );
    }
    get settingsMenuHideSpoilersStatus() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Hide Spoilers')]//*[contains(@class,'settings-menu-item-value')]",
        );
    }
    get settingsMenuAutoplayLiveFeaturedGame() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Autoplay Live Featured Game')]",
        );
    }
    get settingsMenuAutoplayLiveFeaturedGameStatus() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Autoplay Live Featured Game')]//*[contains(@class,'settings-menu-item-value')]",
        );
    }
    get settingsMenuClosedCaptions() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Closed Captions')]",
        );
    }
    get settingsMenuClosedCaptionsStatus() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Closed Captions')]//*[contains(@class,'settings-menu-item-value')]",
        );
    }
    get settingsMenuTermsOfServiceAndPrivacyPolicy() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Terms of Service and Privacy Policy')]",
        );
    }
    get settingsMenuContactMLBSupport() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Contact MLB Support')]",
        );
    }
    get settingsMenuContactMLBSupportArrow() {
        return $(
            "//*[contains(@class,'settings-menu-item')]//*[contains(@aria-label,'Contact MLB Support')]//img[@alt='arrow']",
        );
    }
    get settingsMenuInfoText() {
        return $("//*[contains(@class,'mlb-settings-info-text')]");
    }

    //function
    turnHideSpoilerOn() {
        if (this.settingsMenuHideSpoilersStatus.getText() == 'Off')
            this.settingsMenuHideSpoilers.click();
    }
}

export const settings = new Settings();
