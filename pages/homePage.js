// ! Look https://playwright.dev/docs/pom for details

const { use } = require("../playwright.config");


exports.loginPage = 
class loginPage{

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





test ('POM', async({page}) => {

    await page.goto("https://www.demoblaze.com/");

    await page.click('id=login2')    
    
    await page.waitForTimeout(3000)

    await page.fill ('#loginusername', 'pavanol')

    await page.fill("input[id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']");

    const logoutLink = page.locator("//a[normalize-space()='Log out']")

    await expect(logoutLink).toBeVisible();
    

}
)