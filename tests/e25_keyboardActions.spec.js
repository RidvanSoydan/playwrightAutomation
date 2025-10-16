const {test, expect} = require ('@playwright/test')

// ! Check https://playwright.dev/docs/api/class-keyboard for details

test ('Keyboard Actions', async({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    // await page.locator("textarea[placeholder='Paste one version of the text here.']").fill("Welcome to automation")
    await page.type("[name='text1']", "Welcome to automation")

    // CTRL + A
    await page.keyboard.press("Control+A")  // ! Must use press()to combine of 2 or more keys.
    
    // CTRL + c
    await page.keyboard.press("Control+C")         
    
    // TAB
    await page.keyboard.down('Tab')     // ! Tab is a single key so we can use down() 
                                        // ? down() is pressing       
    await page.keyboard.up('Tab')       // ? up() is releasing   

    // CTRL + V
    await page.keyboard.press('Control+V')         
        

    await page.waitForTimeout(3000)
}
)