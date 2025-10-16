// const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test'          // We have 2 ways to import


test('Locators', async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    // click on login button  --property
    // await page.locator('id=login2').click()  
    await page.click('id=login2')                // Two way is same

    //provide username   --css
    // await page.locator('#loginusername').fill('pavanol') 
    // await page.fill ('#loginusername', 'pavanol')
    await page.type ('#loginusername', 'pavanol')

    // Provide password 
    await page.fill("input[id='loginpassword']", 'test@123')

    // Click on log in button
    await page.click("//button[normalize-space()='Log in']");

    // Verify logout link presence

    const logoutLink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutLink).toBeVisible();
    await page.close() 

}
)