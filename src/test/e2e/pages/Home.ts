class Home {
    //page objects
    get home() {
        return $('#home-link');
    }
    get games() {
        return $('#games-link');
    }
    get settings() {
        return $('#settings-link');
    }
    get login() {
        return $('#login-button');
    }
    get getMLB() {
        return $('#paywall-button');
    }

    //function
    open() {
        browser.url('/html5/browser_browser_es5/');
    }
}

export const home = new Home();
