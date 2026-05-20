# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiLogin.spec.js >> End to End using API
- Location: tests\ApiLogin.spec.js:36:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.table-bordered tbody tr').first().getByRole('button') resolved to 2 elements:
    1) <button tabindex="0" _ngcontent-hvw-c43="" class="btn btn-primary">View</button> aka getByRole('button', { name: 'View' }).first()
    2) <button _ngcontent-hvw-c43="" class="btn btn-danger">Delete</button> aka getByRole('button', { name: 'Delete' }).first()

Call log:
  - waiting for locator('.table-bordered tbody tr').first().getByRole('button')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "6a0cb9b917ee3e78ba894930 ADIDAS ORIGINAL $ 11500 Tue May 19 View Delete" [ref=e38]:
          - rowheader "6a0cb9b917ee3e78ba894930" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ADIDAS ORIGINAL" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Tue May 19" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "6a0cb92417ee3e78ba894776 ADIDAS ORIGINAL $ 11500 Tue May 19 View Delete" [ref=e49]:
          - rowheader "6a0cb92417ee3e78ba894776" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ADIDAS ORIGINAL" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Tue May 19" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "6a0cb92017ee3e78ba89476c ADIDAS ORIGINAL $ 11500 Tue May 19 View Delete" [ref=e60]:
          - rowheader "6a0cb92017ee3e78ba89476c" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ADIDAS ORIGINAL" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Tue May 19" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "69d68298f86ba51a65535498 iphone 13 pro $ 55000 Wed Apr 08 View Delete" [ref=e71]:
          - rowheader "69d68298f86ba51a65535498" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "iphone 13 pro" [ref=e75]
          - cell "$ 55000" [ref=e76]
          - cell "Wed Apr 08" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "69d68288f86ba51a6553543c iphone 13 pro $ 55000 Wed Apr 08 View Delete" [ref=e82]:
          - rowheader "69d68288f86ba51a6553543c" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "iphone 13 pro" [ref=e86]
          - cell "$ 55000" [ref=e87]
          - cell "Wed Apr 08" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "69d68240f86ba51a655352f7 iphone 13 pro $ 55000 Wed Apr 08 View Delete" [ref=e93]:
          - rowheader "69d68240f86ba51a655352f7" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "iphone 13 pro" [ref=e97]
          - cell "$ 55000" [ref=e98]
          - cell "Wed Apr 08" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "69d68238f86ba51a655352c3 iphone 13 pro $ 55000 Wed Apr 08 View Delete" [ref=e104]:
          - rowheader "69d68238f86ba51a655352c3" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "iphone 13 pro" [ref=e108]
          - cell "$ 55000" [ref=e109]
          - cell "Wed Apr 08" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
  3  | const loginPayLoad = {userEmail:"mak7796@yopmail.com",userPassword:"Satara@12345"};
  4  | const orderPayload  ={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
  5  | 
  6  | let token;
  7  | let orderId;
  8  | test.beforeAll(async()=>
  9  | {
  10 | const apiContext = await request.newContext();
  11 | const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  12 |     {
  13 |     data:loginPayLoad,
  14 |     })
  15 |     const responseBody = await loginResponse.json();
  16 |     expect(loginResponse.ok()).toBeTruthy();
  17 |     token = responseBody.token;
  18 |     console.log("Token:", token);
  19 | 
  20 |     const orderResponse =await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
  21 |         {
  22 |             data:orderPayload,
  23 |             headers:
  24 |             {
  25 |                 'Authorization':token,
  26 |                 'Content-Type': 'application/json'   
  27 |             },
  28 |             
  29 |         })
  30 |         const OrderResponseJson= await orderResponse.json();
  31 |         orderId = await OrderResponseJson.orders[0];
  32 |         console.log(orderId);
  33 |     
  34 | });
  35 | 
  36 | test('End to End using API', async ({ page }) => {
  37 |   await page.goto('https://rahulshettyacademy.com/client/');
  38 |    await page.evaluate((value)=>{localStorage.setItem('token',value);},token);
  39 |     await page.reload();
  40 | 
  41 |    await page.locator('.card-body b').last().waitFor();    // we are waiting here for specific element. Wait for works for only 1 element, so we provided first/last
  42 |    console.log(await page.locator('.card-body b').allTextContents()); // we are using wait above as method allTextContents  do not support auto wait from  Playwright
  43 | 
  44 |    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");
  45 | 
  46 |    const rows = page.locator(".table-bordered tbody tr");
  47 |    const rowCount  = await rows.count();
  48 | 
  49 |    for(let i =0; i<rowCount;i++)
  50 |    {
  51 |     const orderIdRow =await rows.nth(i).locator('th').textContent();
  52 |     if(orderIdRow.trim().includes(orderId))
  53 |     {
> 54 |         await rows.nth(i).getByRole('button',{hasText:"View"}).click();
     |                                                                ^ Error: locator.click: Error: strict mode violation: locator('.table-bordered tbody tr').first().getByRole('button') resolved to 2 elements:
  55 |         break;
  56 |     }
  57 |    }
  58 |    await page.locator(".col-text").waitFor({state:"visible"});
  59 |    expect(page.locator(".col-text").textContent).toStrictEqual(orderId);
  60 |     //Create a new Order
  61 | 
  62 | })
  63 | 
  64 | 
```