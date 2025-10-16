const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/screenshots for details

// ! If you want to take screen shot of all test executions go playwright.config.js => find use {} 
// ! and write screenshot: "on"(All Options : on, off, only-on-failure) under trace: 'on-first-retry'
// ! Test screenshots will be inside test results folder by default
    

test ('Test for taking screenshot by default', async({page}) => {

    await page.goto('https://www.demoblaze.com/')

    await page.waitForTimeout(3000)     

    await page.click('id=login2')

    await page.waitForTimeout(3000)                

    await page.fill ('#loginusername', 'pavanol')

    await page.waitForTimeout(3000)   

    await page.fill("//input[@id='loginpassword']", 'test@123')

    await page.waitForTimeout(3000)   

    await page.click("//button[normalize-space()='Log in']");
    
}
)

