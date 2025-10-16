const {test, expect} = require('@playwright/test');


test ('LocateMultipleElements', async ({page}) => {

await page.goto('https://www.demoblaze.com/index.html')

//Locating all links displayed on Home Page
const links = await page.$$('a')

for(const link of links)      // for each loop
{    
    const linkText = await link.textContent()   // textContent() => Returns text of elements.
                                                // Similar method with getText()
    console.log(linkText)

}    

// Locating all the Products displayed on Home Page 
page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); 
// waitForSelector('Locator') => This command will wait till all the element/s displayed on the Web page.
// Optional, If everything not loaded properly can be used.   

const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

for(const product of products)
{
    const productName = await product.textContent()
    console.log(productName)
}




}

)