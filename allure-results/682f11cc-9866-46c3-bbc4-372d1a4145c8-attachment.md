# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLogin.spec.ts >> Client App Login with API
- Location: tests\ApiLogin.spec.ts:23:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | import { POManager } from '../pageobjects_ts/POManager';
  3  | const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
  4  | const loginPayLoad = {username:"mak7796@yopmail.com",password:"Satara@12345"};
  5  | 
  6  | 
  7  | test.beforeAll(async()=>
  8  | {
  9  | const apiContext = await request.newContext();
  10 | const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client/#/auth/login",
  11 |     
  12 |     {
  13 |     data:loginPayLoad
  14 |     
  15 |     })
  16 |     expect(loginResponse.ok()).toBeTruthy();
> 17 |     const loginResponseJson  = await loginResponse.json();
     |                                ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  18 |     const getToken =loginResponseJson.token;
  19 |     console.log(getToken);
  20 |     
  21 | });
  22 | 
  23 | test('Client App Login with API',async({page})=>{
  24 | 
  25 |    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  26 | 
  27 | 
  28 | })
  29 | 
  30 | 
```