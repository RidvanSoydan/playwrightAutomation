const {test, expect} = require ('@playwright/test')


test ('Double Click', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    
    const copyTextButton = await page.locator("//button[normalize-space()='Copy Text']")

    // Double Click
    await copyTextButton.dblclick()

    const field2 = await page.locator("#field2")

    await expect(field2).toHaveValue('Hello World!')
    
    await page.waitForTimeout(3000)

}
)