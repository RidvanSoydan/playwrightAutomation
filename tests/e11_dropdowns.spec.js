const {test ,expect} = require ('@playwright/test')

test ('Dropdown', async({page}) => {

    
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    // ! Selecting one Dropdown option at a time 

    // ! Multiple ways to select option from the dropdown
    
    // await page.locator('#country').selectOption({label:'India'})     // ! By label and visible text
    // await page.locator('#country').selectOption('India')             // ! By visible text
    // await page.locator('#country').selectOption({value:'uk'})        // ! By using value
    // await page.locator('#country').selectOption({index:6})           // ! By using index => // Start from 0
    
    // ! Use first, second or the below one because the others could change
    
    // await page.selectOption('#country', "India")
    
    
    // ! Assertions for Dropdowns
    // ! 1) Checking number of options in dropdown
    const options = await page.locator('#country option') //This locator will return all web elements 
    await expect (options).toHaveCount(10) // assertion

    // ! 2) Checking number of options in dropdown in Array format
    const options2 = await page.$$('#country option')       //!$$=>This will return all elements in Array form
    // console.log('Number of options:', options2.length)   // Printing number of options
    await expect(options2.length).toBe(10)                  // Checking number of options


    // ! 3) Checking presence of value in dropdown
    const content = await page.locator('#country').textContent()// It will return all countries in String form
    await expect(content.includes('Japan')).toBeTruthy()
    await expect(content.includes('abc')).toBeFalsy()

    
    // ! 4) Checking presence of value in dropdown by looping
    // ! Sometimes we dont see Select tag especially when working with bootstrap element, Looping will be more useful  

    const options3 = await page.$$('#country option') // ! $$=> It will return all countries in Array form
    
    let status = false

    for (const option of options3)  // Reaching each option one by one
        {
            // console.log(await option.textContent()) 
            let value = await option.textContent()      // From option we are getting content 
            if (value.includes('Germany'))              // Looking for the content including expected text 
                {
                    status=true
                    break
                }
        }
    await expect(status).toBeTruthy()


    // ! 5) Selecting option from dropdown which dont have Select tag => By using looping

    const options4 = await page.$$('#country option') 
    
    for (const option of options4)  
        {
            let value = await option.textContent()      
            if (value.includes('France'))              
                {
                    await page.selectOption('#country', value)
                    break
                }
        }
    

    

    await page.waitForTimeout(5000)

}
)