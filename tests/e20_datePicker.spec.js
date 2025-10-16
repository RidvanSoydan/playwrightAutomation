const {test, expect} = require ('@playwright/test')



test ('Date Pickers', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ! 2 ways => 1) If it is allowed by using fill() method, 2) If not allowed to fill by using logic

    // await page.fill('#datepicker', '03/15/2024')

    // Date Picker
    const year = "2020"
    const month = "April"
    const day = "15"
    
    await page.click('#datepicker')  // Opens calendar
    
    while(true)
        {
            const currentYear = await page.locator('.ui-datepicker-year').textContent()
            const currentMonth = await page.locator('.ui-datepicker-month').textContent()

            if (currentYear==year && currentMonth==month)
                {
                    break
                }
                // await page.locator('[title="Next"]').click()   // Clicks the next button
                await page.locator('[title="Prev"]').click()   // Clicks the previous button
                // ! If you want to select previous date use above
        }
    
    // ! Selecting Date (Day)
    const dates = await page.$$("//a[@class='ui-state-default']")  // return all days (dates) in form of Array
   
    // ! Date selection using loop
    /*
    for (const date of dates)
        {
            if (await date.textContent() == day)
                {
                 await date.click()
                 break   
                }
        }
    */

    // ! Direct selection without loop
    
    await page.click(`//a[@class='ui-state-default'][text()='${day}']`) // ! Syntax is important


    await page.waitForTimeout(3000)

}
)