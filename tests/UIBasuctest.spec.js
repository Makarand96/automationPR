const { test, expect } = require('@playwright/test');

test('Browser context First PWT', async ({ browser }) => {


   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   const password = page.getByLabel('password');
   const signin = page.locator('#signInBtn');
   const product = page.locator(".card-body a");
   // css
   await page.getByLabel('username').fill('rahulshettyacademy');
   await password.fill('Mak@71196');

   await signin.click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   await password.fill("");
   await page.waitForTimeout(2000);
   await password.fill("learning");
   await page.locator("select[class='form-control']").selectOption('Student');
   await page.getByRole('checkbox', { name: 'terms' }).click;
   // await page.waitForTimeout(4000); // wait for 3 seconds
   await signin.click();

   //let productName = await page.getByRole('link', { name: 'iphone X' }).textContent();
   //  console.log(await product.textContent());

   console.log(await product.allTextContents());

   //  


})

test('Handle Child browser', async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   const [newPage] = await Promise.all(
      [
         context.waitForEvent('page'),
         await page.locator("a[href*='documents-request']").click()

      ])
   await newPage.waitForLoadState("networkidle");
   const testString = await newPage.locator(".im-para.red").textContent();
   console.log(testString);
   const emailRS = testString.split("@")[1].split(".com")[0].trim();
   console.log(emailRS);
   await expect(emailRS).toStrictEqual("rahulshettyacademy");
   await page.bringToFront();
   await page.getByLabel('username').fill(emailRS);



})