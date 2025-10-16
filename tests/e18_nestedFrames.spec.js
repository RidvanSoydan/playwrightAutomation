const {test, expect} = require ('@playwright/test')

// ? test.skip => Will skip this test
test ('Nested Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
   
    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator("input[name='mytext3']").fill('Welcome')
    await page.waitForTimeout(3000)


    // ? Nested Frame
    const childFrames = await frame3.childFrames() // return Array of the Child Frames
    console.log("Number of Child Frame/s:", childFrames.length)
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check()
    // ! Change Index Number of Child Frame to be able interact with element in other Child Frame

    await page.waitForTimeout(3000)
}
)


