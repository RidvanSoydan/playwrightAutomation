const {test, expect} = require ('@playwright/test')

// ! Check https://playwright.dev/docs/frames for details

// ? Frame or iframe is Page inside another page, page embedded another page
// ? We cannot directly interact with the elements inside frames, 
// ? First we need to switch to the particular frame  

/*
A Page can have one or more Frame objects attached to it. 
Each page has a main frame and page-level interactions (like click) are assumed to operate in the main frame.
A page can have additional frames attached with the iframe HTML tag. 
These frames can be accessed for interactions inside the frame.

* Locate element inside frame
const username = await page.frameLocator('.frame-class').getByLabel('User Name');
await username.fill('John');
* Frame objects
One can access frame objects using the page.frame() API:
* Get frame using the frame's name attribute
const frame = page.frame('frame-login');
* Get frame using frame's URL
const frame = page.frame({ url: /.'domain.'/ });
* Interact with the frame
await frame.fill('#username-input', 'John');
*/

// ? test.skip => Will skip this test
test ('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total frames 
    const allFrames = await page.frames() // Returns Array of frames
    console.log("Number of frames:", allFrames.length)
    
    // ! 2 way of interacting with elements inside frames => 1)frame("") => Name or Url, 2) frameLocator("")
    
    // ? 1) Using name or url of the page
    // const frame1 = await page.frame('name') => Name not available in this page
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']", 'Hello')

    await page.waitForTimeout(5000)


    // ? 2) Using frameLocator()
    const frame1InputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    frame1InputBox.fill("Rıdvan")

    await page.waitForTimeout(5000)

}
)




