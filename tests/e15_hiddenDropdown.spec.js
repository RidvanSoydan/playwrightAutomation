const {test, expect} = require ('@playwright/test')

test ('Hidden Dropdown', async ({page})=>{

    // ! Hidden dropdowns => When you click the Inspect button disappear, will use SelectorHub Debugger 
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()
    
    //Click on dropdown 
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
    // ! First Turn on Debugger and then in 5 seconds click to the Hidden Dropdown, in 5 sec it will freeze.

    // Wait for options
    await page.waitForTimeout(5000)

    const options = await page.$$("//div[@role='listbox']//span")

    for (let option of options)
        {
            const jobTitle = await option.textContent()
            // console.log("Job Title:", jobTitle)
            if (jobTitle.includes('QA Lead'))
                {
                    option.click()
                    break
                }
            
        }   




    await page.waitForTimeout(5000)

}
)