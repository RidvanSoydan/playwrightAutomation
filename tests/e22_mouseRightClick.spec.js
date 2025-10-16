const {test, expect} = require ('@playwright/test')


test ('Mouse Right Click', async({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo')

    const button = await page.locator('.context-menu-one.btn.btn-neutral')
    // const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    // Right Click
    await button.click({button: 'right'})
    //await button.click({button: 'middle'})
    
    await page.waitForTimeout(3000)

}
)