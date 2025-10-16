const {test ,expect} = require ('@playwright/test')

test ('Multiple Select Dropdowns', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ! Select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    // Assertions

    // 1) Check number of options in dropdown
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    // 2) Check number of options in dropdown using JS Array
    const options2 = await page.$$('#colors option')
    // console.log("Number of colors:", options2.length)
    await expect(options2.length).toBe(5)

    // 3) Checking presence of value/option in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Green')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()




    await page.waitForTimeout(3000)

}
)