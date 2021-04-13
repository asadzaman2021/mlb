import { Given, When, Then } from 'cucumber';
import { home } from '../pages/Home';
import { favorites } from '../pages/Favorites';
import { welcome } from '../pages/Welcome';
import { login } from '../pages/Login';

import * as systemMessages from '../constants/SystemMessages.constant';
import { settings } from '../pages/Settings';

Given(/^The user arrives on home page$/, () => {
    home.open();
    browser.execute("document.body.style.zoom='70%'");
    favorites.selectFavoritesTeam();
    welcome.clickBrowseNow();
    expect(home.home).toBeDisplayed();
});

When(/^The user click login button in home page$/, () => {
    browser.keys('\uE013');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE006');
    //home.login.click();
    browser.pause(5000);
});

When(/^The user click settings on home page$/, () => {
    browser.keys('\uE013');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE014');
    browser.pause(1000);
    browser.keys('\uE006');
    //home.login.click();
    browser.pause(5000);
});

Then(/^The user sees login screen$/, () => {
    expect(login.loginMessage).toBeDisplayed();
    expect(login.loginSubMessage).toBeDisplayed();
    expect(login.email).toBeDisplayed();
    expect(login.password).toBeDisplayed();
    expect(login.showPassword).toBeDisplayed();
    expect(login.login).toBeDisplayed();
    expect(login.cancel).toBeDisplayed();
    expect(login.loginTerms).toBeDisplayed();
});

When(/^User type email "([^"]*)"$/, (email) => {
    login.email.setValue(email);
    browser.pause(3000);
});

When(/^User type password "([^"]*)"$/, (password) => {
    login.password.setValue(password);
    browser.pause(3000);
});

When(/^User click login$/, () => {
    browser.keys('\uE015');
    browser.pause(1000);
    browser.keys('\uE015');
    //login.login.click();
    browser.pause(1000);
    browser.keys('\uE006');
    //browser.pause(10000);
});

When(/^User sees success message$/, () => {
    login.loginSuccessMessage.waitForDisplayed({ timeout: 20000 });
});

When(/^User click Get started button$/, () => {
    browser.keys('\uE006');
    //login.getStartedButton.click();
    browser.pause(5000);
});

When(/^User sees home page$/, () => {
    expect(home.home).toBeDisplayed();
    expect(home.games).toBeDisplayed();
    //expect(home.login).toBeDisplayed();
    expect(home.settings).toBeDisplayed();
    //expect(home.getMLB).toBeDisplayed();
    browser.pause(5000);
});

When(
    /^(Entitled|UnEntitled) User should see settings menu options displayed$/,
    (userType) => {
        if (userType.includes('Entitled')) {
            expect(settings.settingsMenuInfoText).toBeDisplayed();
            expect(settings.settingsMenuHideSpoilers).toBeDisplayed();
            expect(settings.settingsMenuLogout).toBeDisplayed();
            expect(
                settings.settingsMenuAutoplayLiveFeaturedGame,
            ).toBeDisplayed();
            //expect(home.getMLB).toBeDisplayed();
        }
        // eslint-disable-next-line no-dupe-else-if
        else if (userType.includes('UnEntitled')) {
            expect(home.login).toBeDisplayed();
        }
    },
);
