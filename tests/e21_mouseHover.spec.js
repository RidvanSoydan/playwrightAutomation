const {test, expect} = require ('@playwright/test')



test ('Mouse Hover', async({page}) => {

    await page.goto('https://demo.opencart.com')

    const desktops = await page.locator("//a[normalize-space()='Desktops']")
    const macBook = await page.locator("//a[normalize-space()='Mac (1)']")

    // Mouse Hover
    await desktops.hover()
    await page.waitForTimeout(3000)

    await macBook.hover()
    await page.waitForTimeout(3000)

}
)