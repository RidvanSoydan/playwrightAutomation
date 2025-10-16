const {test, expect} = require ('@playwright/test');


// Check details of Built-In Locators => https://playwright.dev/docs/locators#locate-by-label

test ('Built-in_Locators', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText()     - to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()


    // page.getByPlaceholder() - to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    // page.getByRole()        - to locate by explicit and implicit accessibility attributes.
    // Whenever you have Button or Link or Performing action on element you can use page.getByRole()
    // Role is not an attribute

    /* The page.getByRole() locator reflects how users and assistive technology perceive the page, 
    for example whether some element is a button or a checkbox. When locating by role, 
    you should usually pass the accessible name as well, so that the locator pinpoints the exact element. 
    */
    await page.getByRole('button', {type:'submit'}).click() // Locating and clicking Login button


    // page.getByText()        - to locate by text content.
    // await expect (await page.getByText('Shivam TestjVyPc')).toBeVisible()
    // Getting element by text content and Checking visible or not

    // When the user changes the text will change so we will make it dynamic 
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent() // Dynamicly getting name
    await expect(await page.getByText(name)).toBeVisible() // Checking the name visible or not


    // page.getByLabel()       - to locate a form control by associated label's text.
    // label and input box different, we must find LABEL TAG to be able to use getByLabel()  
    /*
    Most form controls usually have dedicated labels that could be conveniently used to interact with the form. 
    In this case, you can locate the control by its associated label using page.getByLabel().
    */


    // Password    <label>Password <input type="password" /></label>
    // You can fill the input after locating it by the label text:
    // await page.getByLabel('Password').fill('secret');




    // page.getByTitle() - to locate an element by its TITLE ATTRIBUTE.

    // Locate an element with a matching title attribute using page.getByTitle().
    // 25 issues <span title='Issues count'>25 issues</span>
    // You can check the issues count after locating it by the title text:
    // await expect(page.getByTitle('Issues count')).toHaveText('25 issues');




    //page.getByTestId() - to locate an element based on its DATA-TESTID ATTRIBUTE  
    // (other attributes can be configured).

    /*
    Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes 
    the test will still pass. QA's and developers should define explicit test ids and query them 
    with page.getByTestId(). However testing by test ids is not user facing. If the role or text value 
    is important to you then consider using user facing locators such as role and text locators.
    */

    // <button data-testid="directions">Itinéraire</button>
    // You can locate the element by its test id:
    // await page.getByTestId('directions').click();











}
)

/*
Built-in Locators
-----------------

page.getByAltText()     - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole()        - to locate by explicit and implicit accessibility attributes.
page.getByText()        - to locate by text content.
page.getByLabel()       - to locate a form control by associated label's text.
page.getByTitle()       - to locate an element by its title attribute.
page.getByTestId()      - to locate an element based on its data-testid attribute (other attributes can be configured).
*/