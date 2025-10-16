const {test, expect} = require ('@playwright/test')


test ('Handle InputBox', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com')

    // Input Box - email
    await expect(await page.locator("input[placeholder='Username']")).toBeVisible()
    await expect(await page.locator("input[placeholder='Username']")).toBeEmpty()
    await expect(await page.locator("input[placeholder='Username']")).toBeEditable()
    await expect(await page.locator("input[placeholder='Username']")).toBeEnabled()


    await page.locator("input[placeholder='Username']").fill("Admin")
    // page.fill("//input[@placeholder='Username']", 'Admin')

    await page.waitForTimeout(5000) // Pausing code
}
)
