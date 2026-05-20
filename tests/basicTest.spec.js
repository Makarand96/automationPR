const { test, expect } = require('@playwright/test');

test('Register Page', async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
   console.log(await page.title());

   await page.getByLabel('First Name').fill('Makarand');
   await page.getByLabel('Last Name').fill('Ethape');
   await page.getByPlaceholder('email@example.com').fill('mak7796@yopmail.com');
   await page.locator('#userMobile').fill('8888888888');
   await page.locator("select[formcontrolname='occupation']").selectOption({label:'Engineer'});
   await page.locator("input[type='radio']").nth(0).check();
   await expect(page.locator("input[type='radio']").nth(0)).toBeChecked();
   await page.locator("#userPassword").fill('Satara@12345');
   await page.locator('#confirmPassword').fill('Satara@12345');
   expect(await page.locator("input[type='checkbox']").isChecked()).toBeFalsy();
   await page.locator("input[type='checkbox']").check();
   await page.locator('#login').click();
   const textLogin = await page.locator('.headcolor').textContent();
   await expect(page.locator('.headcolor')).toContainText('Created');

})

test('Login', async ({ page }) => {
   await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   await page.getByPlaceholder('email@example.com').fill('mak7796@yopmail.com');
   await page.getByPlaceholder('enter your passsword').fill('Satara@12345');
   await page.locator('#login').click();
   // console.log( await page.locator('.card-body b').nth(1).textContent());
   // await page.waitForLoadState('networkidle');    // will wait till all API's of that page are loaded, and available on UI .
   // It is flaky , not much used.
   await page.locator('.card-body b').last().waitFor();    // we are waiting here for specific element. Wait for works for only 1 element, so we provided first/last
   console.log(await page.locator('.card-body b').allTextContents()); // we are using wait above as method allTextContents  do not support auto wait from  Playwright

}
)