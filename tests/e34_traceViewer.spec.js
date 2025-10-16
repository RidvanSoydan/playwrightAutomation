const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/trace-viewer-intro for details


test ('Trace Viewer', async({page}) => {

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