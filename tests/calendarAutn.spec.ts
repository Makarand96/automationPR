import { test, expect } from '@playwright/test';

test('@calendar Calendar Authentication', async ({ browser }) => {

    const monthNo = "7";
    const yearNo = "2028";
    const dateNo = "20";

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByRole('link', { name: 'Top Deals' }).click()
    ])

    newPage.bringToFront();
    await newPage.locator(".react-date-picker__inputGroup").waitFor();
    await newPage.locator(".react-date-picker__inputGroup").click();
    await newPage.waitForTimeout(1000);
    await newPage.locator('.react-calendar__navigation__label').click();
        await newPage.waitForTimeout(1000);

    await newPage.locator('.react-calendar__navigation__label').click();
        await newPage.waitForTimeout(1000);

    const years =  newPage.locator('.react-calendar__tile');
    const yearsCount= await years.count();

    for(let i=0;i<yearsCount;i++)
    {
        const yearText:any = await years.nth(i).textContent();
        if(yearText.trim() === yearNo)
        {
            await years.nth(i).click();
            break;
        }
    }
    //await newPage.pause();

    await newPage.waitForTimeout(1000);
    await newPage.locator(".react-calendar__year-view__months__month").nth(Number(monthNo)-1).click();
     await newPage.waitForTimeout(1000);

    await newPage.locator(".react-calendar__month-view__days__day").nth(Number(dateNo)).click();
     await newPage.waitForTimeout(1000);

    const dateValue =await newPage.locator("input[name='date']").getAttribute('value');

    await console.log(dateValue);

});