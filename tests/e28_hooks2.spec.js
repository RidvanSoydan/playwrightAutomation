const {test, expect} = require ('@playwright/test')

/**
beforeEach  : This hook is executed before EACH individual test.
afterEach   : This hook is executed after EACH individual test.

beforeAll   : This hook is executed ONCE before any of the tests start running.
afterAll    : This hook is executed OCE after all the tests have been run.
*/

/*
test 1 => Login, Home Page Test, Logout
test 2 => Login, Add to cart, Logout
Before Each => Login    => Home Page test and Add to cart  => After Each    => Logout
Before All  => Login    => Home Page test and Add to cart  => After All     => Logout
*/

// ! BeforeEach or AfterEach does not accept page fixture, it will accept browser fixture.
// ! And we dont need to create page fixture for every test, we will create common page fixture 
// ! And this page will be used every test => See below for details 
// ? Be careful about browser and page fixtures, Common page variable

let page;  //* Common variable

test.beforeEach (async({browser})=>{    

    page = await browser.newPage();  // * Common page fixture will be used in every test
    
    await page.goto('https://www.demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForTimeout(3000)
}
)

test.afterEach (async()=>{      
    await page.locator("#logout2").click()
}
)


test('Home Page Test', async()=>{
    // Home Page
    const products = await page.$$(".hrefch")
    expect(products).toHaveLength(9)
}
)


test('Add to Cart Test', async()=>{

    // Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()   
    }
    )

}
)