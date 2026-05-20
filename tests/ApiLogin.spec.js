import {test,expect,request} from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../Utils_ts/placeorderTestData.json")));
const loginPayLoad = {userEmail:"mak7796@yopmail.com",userPassword:"Satara@12345"};
const orderPayload  ={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};

let token;
let orderId;
test.beforeAll(async()=>
{
const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
    data:loginPayLoad,
    })
    const responseBody = await loginResponse.json();
    expect(loginResponse.ok()).toBeTruthy();
    token = responseBody.token;
    console.log("Token:", token);

    const orderResponse =await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data:orderPayload,
            headers:
            {
                'Authorization':token,
                'Content-Type': 'application/json'   
            },
            
        })
        const OrderResponseJson= await orderResponse.json();
        orderId = await OrderResponseJson.orders[0];
        console.log(orderId);
    
});

test('End to End using API', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
   await page.evaluate((value)=>{localStorage.setItem('token',value);},token);
    await page.reload();

   await page.locator('.card-body b').last().waitFor();    // we are waiting here for specific element. Wait for works for only 1 element, so we provided first/last
   console.log(await page.locator('.card-body b').allTextContents()); // we are using wait above as method allTextContents  do not support auto wait from  Playwright

   await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");

   const rows = page.locator(".table-bordered tbody tr");
   const rowCount  = await rows.count();

   for(let i =0; i<rowCount;i++)
   {
    const orderIdRow =await rows.nth(i).locator('th').textContent();
    if(orderIdRow.trim().includes(orderId))
    {
        await rows.nth(i).locator('td').filter({has: page.getByRole('button',{name:"View"})}).click();
        break;
    }
   }
   await page.locator(".col-text").waitFor();
   console.log(await page.locator(".col-text").textContent());
   expect(await page.locator(".col-text").textContent()).toMatch(orderId);
    //Create a new Order

})

