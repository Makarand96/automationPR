const { test, expect } = require("@playwright/test");

test("handle popup", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.goto("https://www.google.com");
  await page.goBack();
  //await page.goForward();

  await page.locator("h1").waitFor();

  await expect(page.locator("#confirmbtn")).toBeEnabled();
  await page.locator("#confirmbtn").click();

  await page.on("dialog", (dialog) => dialog.accept());

  // Frames handling, tagname iframe or frameset


  const framesPage = page.frameLocator("#courses-iframe");
  const checkframe = framesPage.locator("li a[href*='lifetime-access']");
  const count = await checkframe.count();
  console.log(count);

  for (let i = 0; i < count; i++) {
    const visibilitycheck = await checkframe.nth(i).isVisible();
    if (visibilitycheck) {
      await checkframe.nth(i).click();
      break;
    }
  }

  const text = await framesPage.locator(".text h2").textContent();
  console.log(text.split(" ")[1]);
});
