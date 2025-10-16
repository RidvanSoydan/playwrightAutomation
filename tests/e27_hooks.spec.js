const {test, expect} = require ('@playwright/test')

/*
beforeEach  : This hook is executed before each individual test.
afterEach   : This hook is executed after each individual test.

beforeAll   : This hook is executed once before any of the tests start running.
afterAll    : This hook is executed once after all the tests have been run.
*/

/*
test 1 => Login, Home Page Test, Logout
test 2 => Login, Add to cart, Logout
Before Each => Login    => Home Page test and Add to cart  => After Each    => Logout
Before All  => Login    => Home Page test and Add to cart  => After All     => Logout
*/


test('Home Page Test', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    // Home Page
    const allProducts = await page.$$(".hrefch")
    expect(allProducts).toHaveLength(9)

    // Logout
    await page.locator("#logout2").click()

}
)

test('Add to Cart Test', async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()

    // Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog =>
        {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()   
        }
        )

    // Logout
    await page.locator("#logout2").click()

}
)