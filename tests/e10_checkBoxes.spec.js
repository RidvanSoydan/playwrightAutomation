const {test, expect} = require ('@playwright/test')


test ('Handle Check Boxes', async({page}) => {

    // ! Radio Button => You can choose only one option 
    // ! Check Box => You can choose multiple options 


    // ! Code Block below will not work because url is not working
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    // Single Check Box
    await page.locator("//input[@id='monday' and @type='checkbox']").check() // Checking Monday Checkbox
    // await page.check("//input[@id ='monday' and @type ='checkbox']")

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked).toBeTruthy()
    // Sunday Checkbox
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked).toBeFalsy()
    

    // Multiple Checkboxes
    // I want to check Monday, Saturday and Sunday checkboxes
    const checkBoxLocators = [  "//input[@id='monday' and @type='checkbox']", 
                                "//input[@id='saturday' and @type='checkbox']",
                                "//input[@id='sunday' and @type='checkbox']"] // Put locatos in an Array

    for (const locator of checkBoxLocators) // Select multiple check boxes
    {
        await page.locator(locator).check() 
    }


    await page.waitForTimeout(5000) // Pausing code

    
    for (const locator of checkBoxLocators) // Unselect multiple selected check boxes
    {
        if (await page.locator(locator).isChecked())
            {
            await page.locator(locator).uncheck() 
            }      
    }
    
    await page.waitForTimeout(5000) // Pausing code
}
)