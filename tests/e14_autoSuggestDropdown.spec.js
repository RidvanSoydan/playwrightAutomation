const {test, expect} = require ('@playwright/test')

test ('Auto Suggest Dropdown', async ({page})=>{

    // ! Auto suggest dropdown => After you provide value it will give auto suggest and dynamically changes 
    await page.goto('https://www.redbus.in')

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]") // Waiting for Auto Suggest
   
    const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

    for(let option of fromCityOptions)
        {
            const value = await option.textContent()
            // console.log(value)

            if (value.includes('Delhi Cantt'))
                {
                    option.click()
                    break
                }
        }



    await page.waitForTimeout(5000)

}
)