const {test, expect} = require ('@playwright/test')

test ('Bootstrap Dropdown', async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click() // click on the dropdown

    // 1 

    const options = await page.locator("ul>li label input") // String format
    await expect(options).toHaveCount(11)
    
    // 2 
    const options2 = await page.$$ ("ul>li label input") // Array format
    await expect(options2.length).toBe(11)
    
    //3 Select options from dropdown
    const options3 = await page.$$('ul>li label')
    for (let option of options3)
        {
            const value = await option.textContent()
            // console.log("Value is", value)
            if (value.includes('Angular') || value.includes('Java'))
                {
                await option.click()
                }                
        }
    
    //4 Deselect options from dropdown
    const options4 = await page.$$('ul>li label')
    for (let option of options4)
    {
        const value = await option.textContent()
        // console.log("Value is", value)
        if (value.includes('HTML') || value.includes('CSS'))
            {
            await option.click()
            }                
    }



    await page.waitForTimeout(5000)
}
)