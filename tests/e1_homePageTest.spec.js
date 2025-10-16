const { test, expect } = require ('@playwright/test'); 
/*  We are importing required modules from "@playwright/test" folder, Test and Expect 
    Test to create test, Expect to add validations for test.
    So we can use packages inside them.
*/

test('Home Page', async ({page}) => {
/** 
() => Anonymous function 
'page' fixture => Contains so many functions and through them we can automate web applications => When you 
interact with some elements => click, get text, elements presence, launch web page... We can access all methods
page fixture is mandatory

'async' have to specified before page function=>JS is asyncronized language but in automation steps must be sync.
The keyword 'async' before a function makes the function return a promise

'await' have to specified before accessing page methods everytime.
The keyword 'await' before a function makes the function wait for a promise  
*/

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = page.title(); // Storing in a variable.
    console.log('Page title is:', pageTitle); //Printing, not compulsory 
    await expect(page).toHaveTitle('STORE'); // Validation
    
    const pageURL = page.url();
    console.log('Page URL is:', pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

}
)                                                   

