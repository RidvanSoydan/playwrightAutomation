
const {test, expect} = require ('@playwright/test')

// open app url
test('AssertionsTest', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // 1) expect(page).toHaveURL()   Page has URL
    // ! 1) expect(page).not.toHaveURL()  =>  Every Assertions have Positive/Negative Assertions
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') 


    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')


    // 3) expect(locator).toBeVisible()  Element is visible
    // Logo is presented or not
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()


    // 4) expect(locator).toBeEnabled()  Control is enabled => Input box => We can pass value if not cannot
    // 4) expect(locator).toBeDisabled() Control is disabled =>  Negative Assertions
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect (searchStoreBox).toBeEnabled()


    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked

    // Radio Button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()  // Select Male radio button
    await expect(maleRadioButton).toBeChecked()

    //Check Box
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()
    

    // 6) expect(locator).toHaveAttribute() Element has attribute
    const registerButton = await page.locator('#register-button')
    await expect (registerButton).toHaveAttribute('type', 'submit')


    // 7) expect(locator).toHaveText()  Element matches text, will check exactly match 
    await expect(await page.locator('.page-title h1')).toHaveText('Register') // full text

    // 8) expect(locator).toContainText()  Element contains text, will check partial match
    await expect(await page.locator('.page-title h1')).toContainText('Reg')  // partial text

    
    // 9) expect(locator).toHaveValue(value) Input has a value

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@test.com')
    await expect(emailInput).toHaveValue('test@test.com')


    // 10) expect(locator).toHaveCount()  List of elements has given length => Dropdowns, ComboBox

    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13) // expecting 13


    // ! Important => Every Assertions have Negative Assertions, can be used not. keyword
    // ! expect(value).not.toEqual(0);
    // ! await expect(locator).not.toContainText('some text');




}
)











/*
Assertions
-----------

Playwright includes test assertions in the form of expect function.
Reference: https://playwright.dev/docs/test-assertions

1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/
