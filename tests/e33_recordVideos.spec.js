const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/videos for details

// ! If you want to take video of all test executions go playwright.config.js => find use {} 
// ! and write video: "on" {on, off, on-first-retry, retain-on-failure, retry-with-video} under trace: 'on-first-retry'
// ! Test screenshots will be inside test results folder and will be attached to the report by default
    

test ('Recording Video Test', async({page}) => {

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