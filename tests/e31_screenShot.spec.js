const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/screenshots for details

// ! If you want to take screen shot of all test executions go playwright.config.js => find use {} 
// ! and write screenshot: "on"(All Options : on, off, only-on-failure) under trace: 'on-first-retry'
// ! Test screenshots will be inside test results folder by default
    

test ('Page Screenshot', async({page}) => {

    await page.goto('https://demo.opencart.com/')

    await page.screenshot({path: 'tests/screenShots/' + Date.now() + 'HomePage.png'})
    // ! Date.now() => For not overwrite the old file. (Time Step)
    
}
)


test ('Full Page Screenshot', async({page}) => {

    await page.goto('https://demo.opencart.com/')
    
    await page.waitForTimeout(3000)

    await page.screenshot({path: 'tests/screenShots/' + Date.now() + 'FullPage.png', fullPage:true})
    // ! Date.now() => For not overwrite the old file

    
}
)


test.only ('Element Screenshot', async({page}) => {

    await page.goto('https://demo.opencart.com/')
    await page.reload()
    await page.waitForTimeout(5000)    

    await page.locator('//*[@id="content"]/div[2]/div[1]/div').screenshot({path: 'tests/screenShots/' + Date.now() + 'MacBookSS.png'})
    // ! Date.now() => For not overwrite the old file

    
}
)