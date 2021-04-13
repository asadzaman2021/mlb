class Login {
    //page objects
    get loginMessage() {
        return $('.mlb-login-main-message');
    }
    get loginSubMessage() {
        return $('.mlb-login-sub-message');
    }

    get email() {
        return $('#email');
    }
    get password() {
        return $('#password');
    }
    get showPassword() {
        return $('.mlb-button-eye-icon');
    }
    get login() {
        return $('#submit');
    }
    get cancel() {
        return $('#cancel');
    }

    get loginTerms() {
        return $('.mlb-form-terms');
    }

    get loginSuccessMessage() {
        return $('.mlb-login-success-message');
    }

    get getStartedButton() {
        return $('.mlb-login-get-started-button');
    }

    //functions
}

export const login = new Login();
