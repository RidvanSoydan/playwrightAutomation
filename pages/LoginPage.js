// ! Look https://playwright.dev/docs/pom for details

const { expect } = require('@playwright/test');



exports.LoginPage = class LoginPage {

    constructor(page)

    {
        this.page=page;
        this.loginLink ='id=login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = "input[id='loginpassword']";
        this.loginButton="//button[normalize-space()='Log in']"
    }


    async goToLoginPage ()

    {
        await this.page.goto('https://www.demoblaze.com/')
    }


    async login(username, password)
    
    {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();           
    }

}