const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/pom for details

import { LoginPage } from '../pages/LoginPage'



test ('POM test', async({page}) => {

   // Login
    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

}
)