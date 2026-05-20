const { test, expect } = require("@playwright/test");
const {customTest} = require('../Utils/test-base');

const dataset = JSON.parse(JSON.stringify(require("../Utils/placeorderTestData.json")));  //json --> string --> java object

for (const data of dataset)
{

test(`End to End Test for ${data.product_name}`, async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page
    .getByRole("textbox", { name: "email@example.com" })
    .fill(data.username);

  await page
    .getByRole("textbox", { name: "enter your passsword" })
    .fill(data.password);

  await page.locator("#login").click();

  await page.locator(".card-body b").first().waitFor();

  const count_items = await page.locator(".card-body b").count();

  const product_name = "iphone 13 pro";

  for (let i = 0; i < count_items; i++) {
    if (
      (await page.locator(".card-body b").nth(i).textContent()) ===
      data.product_name
    ) {
      const add_to_cart = await page.getByRole("button", { name: /To Cart/i });
      if (await add_to_cart.isEnabled) {
        await add_to_cart.nth(i).click();
        break;
      }
    }
  }
  await page.locator("div li").first().waitFor();

  if (await page.locator("button[routerlink='/dashboard/cart']").isEnabled()) {
    await page.locator("button[routerlink='/dashboard/cart']").click();
  }

  await page.locator(".cartSection h3").waitFor();
  await expect(page.locator(".cartSection h3")).toHaveText(data.product_name);

  const checkoutButton = await page.getByRole("button", {
    name: /Checkout/i,
  });

  if (await checkoutButton.isEnabled()) {
    await page.getByRole("button", { name: /Checkout/i }).click();
  }

  await page.locator(".details__user").waitFor();

  await page
    .getByPlaceholder("Select Country")
    .pressSequentially("ind", { delay: 100 });

   const resultsIND =  page.locator('.ta-results');

   await page.locator('.ta-results').waitFor();
   //await resultsIND.locator('button').first().waitFor();

    const buttonsResultsInd = await resultsIND.locator('button');
    const  printCountbuttonsResultsInd= await buttonsResultsInd.count();


    for (let k=0;k<printCountbuttonsResultsInd;k++)
    {

      const text =(await buttonsResultsInd.nth(k).textContent()).trim();
      console.log(text);

        if(text==='India')
        {
           await resultsIND.locator("button").nth(k).click();
          break;
        }
    }

  await page.getByText('Place Order').click();

});

}


customTest('End to End Test for Custom Fixture data passing', async ({ browser, testDataFixture }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page
    .getByRole("textbox", { name: "email@example.com" })
    .fill(testDataFixture.username);

  await page
    .getByRole("textbox", { name: "enter your passsword" })
    .fill(testDataFixture.password);

  await page.locator("#login").click();

  await page.locator(".card-body b").first().waitFor();

  const count_items = await page.locator(".card-body b").count();

  const product_name = "iphone 13 pro";

  for (let i = 0; i < count_items; i++) {
    if (
      (await page.locator(".card-body b").nth(i).textContent()) ===
      testDataFixture.product_name
    ) {
      const add_to_cart = await page.getByRole("button", { name: /To Cart/i });
      if (await add_to_cart.isEnabled) {
        await add_to_cart.nth(i).click();
        break;
      }
    }
  }
  await page.locator("div li").first().waitFor();

  if (await page.locator("button[routerlink='/dashboard/cart']").isEnabled()) {
    await page.locator("button[routerlink='/dashboard/cart']").click();
  }

  await expect(page.locator(".cartSection h3")).toHaveText(testDataFixture.product_name);

  const checkoutButton = await page.getByRole("button", {
    name: /Checkout/i,
  });

  if (await checkoutButton.isEnabled()) {
    await page.getByRole("button", { name: /Checkout/i }).click();
  }

  await page.locator(".details__user").waitFor();

  await page
    .getByPlaceholder("Select Country")
    .pressSequentially("ind", { delay: 100 });

   const resultsIND =  page.locator('.ta-results');

   await page.locator('.ta-results').waitFor();
   //await resultsIND.locator('button').first().waitFor();

    const buttonsResultsInd = await resultsIND.locator('button');
    const  printCountbuttonsResultsInd= await buttonsResultsInd.count();


    for (let k=0;k<printCountbuttonsResultsInd;k++)
    {

      const text =(await buttonsResultsInd.nth(k).textContent()).trim();
      console.log(text);

        if(text==='India')
        {
           await resultsIND.locator("button").nth(k).click();
          break;
        }
    }

  await page.getByText('Place Order').click();

});