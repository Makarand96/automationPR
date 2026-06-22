const { test, expect } = require("@playwright/test");

test("fill form", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

  //  expect (await page.title()).toBe("Let's Shop");

  await expect(page).toHaveTitle("Let's Shop");

  await page.getByPlaceholder("First Name").fill("Makarand");
  await page.getByPlaceholder("Last Name").fill("Makarand");
  await page.locator("#userEmail").fill("Mak55@yopmail.com");
  await page.locator("#userMobile").fill("8888888888");
  await page
    .locator("select[formcontrolname='occupation']")
    .selectOption("Engineer");
  const role = await page.getByRole("radio", { name: "Male" }).first();
  if (!(await role.isChecked())) {
    await role.check();
  }
  await expect(role).toBeChecked();
  await page.locator("#userPassword").fill("Satara@12345");
  await page.locator("#confirmPassword").fill("Satara@12345");
  // page.pause();

  const check_age = await page.getByRole("checkbox");

  await check_age.highlight();

  if (!(await check_age.isChecked())) {
    await check_age.check();
  }

  await expect(check_age).toBeChecked();

  await page.locator("#login").click();

  // page.pause();
});

test("Login Page", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  console.log(await page.title());
  console.log(await page.url());

  await page
    .getByRole("textbox", { name: "email@example.com" })
    .fill("mak7796@yopmail.com");

  await page
    .getByRole("textbox", { name: "enter your passsword" })
    .fill("Satara@12345");

  await page.locator("#login").click();

  await page.locator(".card-body b").first().waitFor();

  const all_product_names = await page.locator(".card-body b");

  const count_check = await all_product_names.count();

  for (let i = 0; i < count_check; i++) {
    const text_product = await all_product_names.nth(i).textContent();
    if (text_product.includes("ADIDAS")) {
      let k = 0;
      while (k < 3) {
        await page.getByRole("button", { name: " Add To Cart" }).nth(i).click();
        k++;
      }
    }
  }
});

test("Child page handle", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const [docRequestPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("a[href*='documents-request']").click(),
  ]);

  const pages = await page.context().pages();
  for (const p of pages) {
    console.log(await p.title());
  }

  await docRequestPage.waitForLoadState();
  const text_red = await docRequestPage.locator(".red").textContent();
  console.log(text_red);
  const get_username = await text_red.split('@')[1].split('.')[0].trim();
  console.log(get_username);

  await expect(get_username).toBe('rahulshettyacademy');

  await page.bringToFront();

  await page.locator(".text-white b").first().waitFor();

  const username = await page.locator(".text-white b").first().textContent();
  const password = await page.locator(".text-white b").last().textContent();

  await page.locator("#username").fill(get_username);
  await page.locator("#password").fill(password);


  await page.getByRole("checkbox", { name: /I Agree/i }).check(); //i is for case sensitive ; / / - is for partial text matching

  await expect(page.getByRole("checkbox", { name: /I Agree/i })).toBeChecked();

  await page.getByRole("button", { name: /Sign/i }).click();
});
