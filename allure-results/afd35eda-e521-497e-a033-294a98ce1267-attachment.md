# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLogin.spec.js >> Login
- Location: tests\ApiLogin.spec.js:20:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
  3  | const loginPayLoad = {email:"mak7796@yopmail.com", password:"Satara@12345"};
  4  | 
  5  | let token;
  6  | test.beforeAll(async()=>
  7  | {
  8  | const apiContext = await request.newContext();
  9  | const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  10 |     {
  11 |     data:loginPayLoad,
  12 |     })
  13 |     const responseBody = await loginResponse.json();
> 14 |     expect(loginResponse.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  15 |     token = responseBody.token;
  16 |     console.log("Token:", token);
  17 |     
  18 | });
  19 | 
  20 | test('Login', async ({ page }) => {
  21 |     await page.goto('https://rahulshettyacademy.com/client');
  22 |     await page.evaluate((token) => { localStorage.setItem('token', token); }, token);
  23 |     await page.reload();
  24 | 
  25 |     await page.locator('.card-body b').last().waitFor();    // we are waiting here for specific element. Wait for works for only 1 element, so we provided first/last
  26 |     console.log(await page.locator('.card-body b').allTextContents()); // we are using wait above as method allTextContents do not support auto wait from Playwright
  27 | 
  28 | })
  29 | 
  30 | 
```