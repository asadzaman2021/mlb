class CreateAccount {
    //page objects
    get loginMessage() {
        return $('.mlb-create-account-main-message');
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
    get checkbox() {
        return $('#checkbox');
    }
    get createAccount() {
        return $('#submit');
    }
    get cancel() {
        return $('#cancel');
    }
    get loginTerms() {
        return $('.mlb-form-terms');
    }
    get createAccountLogo() {
        return $('.mlb-create-account-logo');
    }
    get createAccountWhiteCheck() {
        return $('.mlb-create-account-white-check');
    }
    get createAccountSuccessMessage() {
        return $('.mlb-create-account-success-message');
    }
    get createAccountContinue() {
        return $("//*[contains(@class,'mlb-create-account-continue-button')]");
    }

    //functions
}

export const createAccount = new CreateAccount();
