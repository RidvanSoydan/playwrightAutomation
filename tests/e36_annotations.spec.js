const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/test-annotations for details

// ? only => test.only ('Test 1', async({page}) => {}
// ? skip => test.skip ('Test 1', async({page}) => {}



test ('Test 1', async({page}) => {

    console.log("Test 1")    

}
)

test.skip ('Test 2', async({page}) => {

    console.log("Test 2")    

}
)

// ! Using skip() annotation based on certain condition
test ('Test 3', async({page, browserName}) => {

        if (browserName ==='chromium')
        {
            test.skip()
        }

    console.log("Test 3")    
})

// ! fixme() => I want to skip test till I fix the bug or complete the test
// ! I dont want to run it for now
test ('Test 4', async({page}) => {
    test.fixme()
    console.log("Test 4")    
}
)


// ! fail() => I want to fail the test
// ! Negative assertion
test ('Test 5', async({page}) => {
    test.fail()             // Expected is fail
    console.log("Test 5")   
    expect(1).toBe(2)       // But actual Passed
    // ! If both actual and expected is failed then the test pass
}
)


// ! fail() => we can use fail() based on condition, test will check the condition first
test ('Test 6', async({page, browserName}) => {
    
    console.log("Test 6")   

    if (browserName==='firefox')    // False
    {
        test.fail()                 // Expect to fail (to be false)
    }       
           
}
)



// ! slow() => This is related to timeout

// ! By default max timeout 30 seconds for any test, if any test take more than that will fail
// ! We can it from playwright.config.js page under use {}, outsite the block => timeout:2000, above projects []
// ! We made it 2 seconds, If any test take more than 2 sec, test will fail => Test timeout of 2000ms exceeded.
// ! In this case we can use slow() => This slow() will increase the timeout THREE times => Now timeout 6000
// ! If I want to set the timeout in specific test level=> test.setTimeout(50000)   
 
test ('Test 7', async({page}) => {
    
    test.slow()     // Will triple the actual timeout
    // test.setTimeout(10000)
    console.log("Test 7")   
    await page.goto('https://www.demoblaze.com/')

           
}
)