# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLogin.spec.js >> Client App Login with API
- Location: tests\ApiLogin.spec.js:26:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
  3  | const loginPayLoad = {email:"mak7796@yopmail.com",password:"Satara@12345"};
  4  | 
  5  | 
  6  | test.beforeAll(async()=>
  7  | {
  8  | const apiContext = await request.newContext();
  9  | const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  10 |     
  11 |     {
  12 |     data:loginPayLoad,
  13 |     headers: {"Content-Type": "application/json"}
  14 |     
  15 |     })
  16 |     console.log("Login Response Status:", loginResponse.status());
  17 |     const responseBody = await loginResponse.json();
  18 |     console.log("Login Response Body:", responseBody);
  19 |     
> 20 |     expect(loginResponse.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  21 |     const getToken = responseBody.token;
  22 |     console.log("Token:", getToken);
  23 |     
  24 | });
  25 | 
  26 | test('Client App Login with API',async({page})=>{
  27 | 
  28 |    await page.goto("https://rahulshettyacademy.com/client");
  29 | 
  30 | 
  31 | })
  32 | 
  33 | 
```