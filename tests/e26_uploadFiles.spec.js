const {test, expect} = require ('@playwright/test')
const path = require('path')

// ! Check https://playwright.dev/docs/input#upload-files for details

// ! Important: When Copy Relative Path by default it is getting tests\e26UploadFiles\file1.docx but,
// !            To be able to find the file change the \ with / => Correct form: tests/e26UploadFiles/file1.docx 
// !            Otherwise it will give "error: enoent: no such file or directory" error 

test ('Upload Single File', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator("#file-upload").setInputFiles('tests/e26UploadFiles/file1.docx')

    
    await page.waitForTimeout(5000)
}
)

// ! test.only => will run only the choosen test
test ('Upload Multiple Files', async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator("#filesToUpload").
            setInputFiles(['tests/e26UploadFiles/file1.docx', 
                            'tests/e26UploadFiles/file2.docx'])

    await page.waitForTimeout(5000)
    
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('file1.docx')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('file2.docx')
    
    await page.waitForTimeout(5000)
    
    
    // Removing Files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(5000)
    

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(5000)

}
)