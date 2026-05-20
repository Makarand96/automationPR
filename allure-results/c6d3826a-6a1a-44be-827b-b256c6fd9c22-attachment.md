# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: calendarAutn.spec.ts >> @calendar Calendar Authentication
- Location: tests\calendarAutn.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/seleniumPractise/#/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('@calendar Calendar Authentication', async ({ browser }) => {
  4  | 
  5  |     const monthNo = "6";
  6  |     const yearNo = "2027";
  7  |     const dateNo = "15";
  8  | 
  9  |     const context = await browser.newContext();
  10 |     const page = await context.newPage();
  11 | 
> 12 |     await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  13 | 
  14 |     const [newPage] = await Promise.all([
  15 |         context.waitForEvent('page'),
  16 |         await page.getByRole('link', { name: 'Top Deals' }).click()
  17 |     ])
  18 | 
  19 |     newPage.bringToFront();
  20 |     await newPage.locator(".react-date-picker__inputGroup").waitFor();
  21 |     await newPage.locator(".react-date-picker__inputGroup").click();
  22 |     await newPage.waitForTimeout(1000);
  23 |     await newPage.locator('.react-calendar__navigation__label').click();
  24 |         await newPage.waitForTimeout(1000);
  25 | 
  26 |     await newPage.locator('.react-calendar__navigation__label').click();
  27 |         await newPage.waitForTimeout(1000);
  28 | 
  29 |     const years =  newPage.locator('.react-calendar__tile');
  30 |     const yearsCount= await years.count();
  31 | 
  32 |     for(let i=0;i<yearsCount;i++)
  33 |     {
  34 |         const yearText:any = await years.nth(i).textContent();
  35 |         if(yearText.trim() === yearNo)
  36 |         {
  37 |             await years.nth(i).click();
  38 |             break;
  39 |         }
  40 |     }
  41 |     //await newPage.pause();
  42 |     const index = Number(monthNo)-1;
  43 |     const dateNum = Number(dateNo)-1;
  44 | 
  45 |     await newPage.waitForTimeout(1000);
  46 |     await page.locator(".react-calendar__tile react-calendar__year-view__months__month").nth(index).click();
  47 |      await newPage.waitForTimeout(1000);
  48 | 
  49 |     await page.locator(".react-calendar__month-view__days__day").nth(dateNum).click();
  50 |      await newPage.waitForTimeout(1000);
  51 | 
  52 |     const dateValue =await page.locator(".react-date-picker__inputGroup").locator('input').nth(1).getAttribute('value');
  53 | 
  54 |     await console.log(dateValue);
  55 | 
  56 | });
```