// Open terminal and write and run "npx playwright codegen" then 2 pages will be opened.

// npx playwright codegen --help => You can customize => Create outomatic new file, different languages

// npx playwright codegen -o (or --output)  tests/codegen_testGenerator.spec.js => Creating new file and copying 

// npx playwright codegen --target java --browser Webkit => By default JS and Chromium 

// npx playwright codegen --device "iPhone 13" => Opening iPhone 13 simulator

// npx playwright codegen --viewport-size "1280, 720" => Opening window with given size 

// Stop record and choose Pick Up Locator => You can locate specific element and copy

// Look "https://playwright.dev/docs/codegen" for details 


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in'}).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  
});