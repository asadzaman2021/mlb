class Favorites {
    //page objects
    get favoriteTitle() {
        return $("//*[@class='mlb-favorites']//*[@class='favorites-title']");
    }
    get favoritesNationalLeague() {
        return $(
            "//*[@class='mlb-favorites']//*[@class='favorites-league-title favorites-national-league']",
        );
    }
    get favoritesTeamInfo() {
        return $(
            "//*[@class='mlb-favorites']//*[@class='favorites-team-info']",
        );
    }
    get next() {
        return $("//*[contains(@aria-label,'Next')]");
    }
    get done() {
        return $("//*[contains(@aria-label,'Done')]");
    }
    get favoriteTeamChicagoWhiteFox() {
        return $("//*[contains(@aria-label,'Chicago White Sox')]");
    }
    get favoriteTeamNewYorkYankees() {
        return $("//*[contains(@aria-label,'New York Yankees')]");
    }

    //functions
    selectFavoritesTeam() {
        //browser.refresh()
        browser.keys('\uE014');
        browser.pause(3000);

        browser.keys('\uE014');
        browser.pause(3000);

        browser.keys('\uE014');
        this.favoriteTeamChicagoWhiteFox.waitForExist({ timeout: 10000 });
        //this.favoriteTeamChicagoWhiteFox.click();
        browser.pause(3000);
        browser.keys('\uE006');
        browser.keys('\uE006');
    }

    changeFavoritesTeam() {
        this.favoriteTeamChicagoWhiteFox.click();
        this.done.click();
    }
}

export const favorites = new Favorites();
