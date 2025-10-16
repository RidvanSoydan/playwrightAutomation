const {test, expect} = require ('@playwright/test')


test ('Handle Radio Button', async({page}) => {

    // ! Radio Button => You can choose only one option 
    // ! Check Box => You can choose multiple options 


    // ! Code Block below will not work because url is not working
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    // Radio Button
    await page.locator("//input[@value ='option2']").check() // Checking male radio button
    // await page.check("//input[@value ='option2']")
    await expect(await page.locator("//input[@value ='option2']")).toBeChecked()
    await expect(await page.locator("//input[@value ='option2']").isChecked()).toBeTruthy()
    // Female Radio Button
    await expect(await page.locator("//input[@value ='option1']").isChecked()).toBeFalsy() // Female

    
    await page.waitForTimeout(5000) // Pausing code
}
)