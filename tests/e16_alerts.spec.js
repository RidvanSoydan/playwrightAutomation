const {test, expect} = require ('@playwright/test')
// ! Check https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs for details
/*
alert(), confirm(), prompt() dialogs
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
However, you can register a dialog handler before the action that triggers 
the dialog to either dialog.accept() or dialog.dismiss() it.
page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();
*/
// ! 3 types of Alert (Only OK button, Confirmation OK or Cancel, Prompt Input Box)
         
// ? test.skip => Will skip this test
test.skip ('Alert with OK Button', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ? Enabling dialog window handler
    // ! We need to enable this handler before triggering the event/opening alert 
    page.on('dialog', async dialog => 
        {        
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
        }
        )
    // ! We need to enable this handler before triggering the event/opening alert 
    
    // Clicking alert button
    await page.click("//button[normalize-space()='Alert']")

    await page.waitForTimeout(3000)    
}
)


test.skip ('Confirmation Dialog => Alert with OK and Cancel Buttons', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ? Enabling dialog window handler
    // ! We need to enable this handler before triggering the event/opening alert 
    page.on('dialog', async dialog => 
        {        
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        // await dialog.accept()    // Will close with OK button
        await dialog.dismiss()      // Will close with Cancel button
        }
        )
    // ! We need to enable this handler before triggering the event/opening alert 
    
    // Clicking confirm box button
    await page.click("//button[normalize-space()='Confirm Box']")
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(3000)    
}
)


test ('Prompt Dialog => Alert with Input Box and OK-Cancel Buttons', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ? Enabling dialog window handler
    // ! We need to enable this handler before triggering the event/opening alert 
    page.on('dialog', async dialog => 
        {        
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter') // Captured default value
        await dialog.accept('Rıdvan')    // Will write Rıdvan and then will close with OK button
        }
        )
    // ! We need to enable this handler before triggering the event/opening alert 
    
    // Clicking confirm box button
    await page.click("//button[normalize-space()='Prompt']")
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Rıdvan! How are you today?")


    await page.waitForTimeout(3000)    
}
)



