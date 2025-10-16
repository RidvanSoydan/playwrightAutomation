const {test, expect} = require ('@playwright/test')

test ('Soft Assertions', async ({page})=> {

    await page.goto('https://www.demoblaze.com/')

    /*
    // Hard Assertions
    await expect(page).toHaveTitle('STOREE') // Intentionaly failing
    //! Failed in line 9 and stopped execution
    
    Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
        Locator: locator(':root')
        Expected string: "STOREE"
        Received string: "STORE"  
     
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(await page.locator(".navbar-brand")).toBeVisible()

    */

    // Soft Assertions
    await expect.soft(page).toHaveTitle('STOREE') // Intentionaly failing
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(await page.locator(".navbar-brand")).toBeVisible()

    // Failed in ine 22 but keeped executing
    // ! Every Assertions has soft() function.



}
)
