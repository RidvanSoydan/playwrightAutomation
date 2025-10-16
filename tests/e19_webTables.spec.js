const {test, expect} = require ('@playwright/test')



test ('Web Tables', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // ? th => Table Header 
    // ? tr => Table Row 
    // ? td => Table Data 
    
    const paginationTable = await page.locator('#productTable')

    // 1) Total number of rows and columns
    const columns = await paginationTable.locator('thead tr th')
    console.log("Number of columns:", await columns.count()) // Number of columns
    await expect(await columns.count()). toBe(4)
    
    const rows = await paginationTable.locator('tbody tr')
    console.log("Number of rows:", await rows.count()) // Number of rows
    await expect(await rows.count()). toBe(5)

    // 2) Select check box for Product 4 (Filter by Product Name)
    
    const matchedRow = rows.filter({  
        has: page.locator('td'),
        hasText: 'Product 4'           // Filtering row by text
    })
    await matchedRow.locator('input').check()   

    await page.waitForTimeout(5000)

    // 3) Select multiple check boxes
    // ! Will create a reusable function outside the test block

    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 3')
    await selectProduct(rows, page, 'Product 5')

    // 4) Print all product details using loop

    // ! This is for reading Datas from Table in One Page
    for (let i=0; i<await rows.count(); i++)            // Representing rows
        {
            const row = rows.nth(i)  //        
            //nth() => Will start from 0
            const tds = row.locator('td')

            for(let j=0; j<await tds.count()-1; j++)    // Representing columns
                {
                    console.log(await tds.nth(j).textContent())
                }           
        }

        await page.waitForTimeout(5000)

    // 5) Print all product details from Different Pages (Pagination) using loop

    // ! This is for reading Datas from Table in Different Pages
    
    const pages = await page.locator('#pagination li a')
    console.log("Number of pages in table:", await pages.count())
    const numberOfPages = await pages.count()
    
    for(let k=0; k<await numberOfPages; k++)
        {
            if(k>0)     // The first page is opened by default so no need to click 1
                {
                    await pages.nth(k).click()        
                }
            for (let i=0; i<await rows.count(); i++)        // Representing rows
                {
                    const row = rows.nth(i)  //        
                    //nth() => Will start from 0
                    const tds = row.locator('td')

                    for(let j=0; j<await tds.count()-1; j++)  // Representing columns
                        {
                            console.log(await tds.nth(j).textContent())
                        }           
                }
                
        }

    await page.waitForTimeout(5000)

}
)

// ! Reusable function to be able Select Products
async function selectProduct(rows, page, nameOfProducts)
    {
        const matchedRow = rows.filter({  
            has: page.locator('td'),
            hasText: nameOfProducts           
        })
        await matchedRow.locator('input').check()   
    }