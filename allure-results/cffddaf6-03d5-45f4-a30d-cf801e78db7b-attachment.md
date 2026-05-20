# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLogin.spec.js >> Client App Login with API
- Location: tests\ApiLogin.spec.js:22:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
  3  | const loginPayLoad = {username:"mak7796@yopmail.com",password:"Satara@12345"};
  4  | 
  5  | 
  6  | test.beforeAll(async()=>
  7  | {
  8  | const apiContext = await request.newContext();
  9  | const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  10 |     
  11 |     {
  12 |     data:loginPayLoad
  13 |     
  14 |     })
> 15 |     expect(loginResponse.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  16 |     const loginResponseJson  = await loginResponse.json();
  17 |     const getToken =loginResponseJson.token;
  18 |     console.log(getToken);
  19 |     
  20 | });
  21 | 
  22 | test('Client App Login with API',async({page})=>{
  23 | 
  24 |    await page.goto("https://rahulshettyacademy.com/client");
  25 | 
  26 | 
  27 | })
  28 | 
  29 | 
```