const {test, expect} = require ('@playwright/test')

// ! Look https://playwright.dev/docs/test-annotations for details

// ! npx playwright test tests/e35_tagTests.spec.js --project=chromium --grep '@sanity@reg'
// ! Dont forget single quotes ('')
// ! To be able to include some tag exclude some tags use => --grep '@sanity' --grep-invert '@reg'
// ? npx playwright test tests/e35_tagTests.spec.js --project=chromium --grep '@sanity' --grep-invert '@reg' 


test ('Tag Tests 1@sanity', async({page}) => {

    console.log("Test 1")    

}
)

test ('@sanity Tag Tests 2', async({page}) => {

    console.log("Test 2")    

}
)

test ('Tag Tests 3 @reg', async({page}) => {

    console.log("Test 3")    

}
)

test ('Tag Tests 4 @reg', async({page}) => {

    console.log("Test 4")    

}
)

test ('Tag Tests 5 @sanity@reg', async({page}) => {

    console.log("Test 5")    

}
)