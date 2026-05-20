# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestRUn.spec.ts >> @Web End to End Test for iphone 13 pro
- Location: tests\TestRUn.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.ta-results').locator('button').nth(3)

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
    - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
      - /url: http://qasummit.org/
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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: iphone 13 pro
      - generic [ref=e34]: $ 55000
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: mak7796@yopmail.com
            - textbox [ref=e81]: mak7796@yopmail.com
            - generic [ref=e83]:
              - textbox "Select Country" [active] [ref=e84]: ind
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
                - button " Indonesia" [ref=e93] [cursor=pointer]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: 
                    - text: Indonesia
            - generic [ref=e97] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class PaymentsPage
  4  | {
  5  | 
  6  |     page:Page;
  7  |     countrySelect:Locator; 
  8  |     resultsIND:Locator; 
  9  |     buttonsResultsInd:Locator; 
  10 |     placeOrderButton:Locator;    
  11 | 
  12 | constructor(page:Page)
  13 | {
  14 |     this.page=page;
  15 |     this.countrySelect =  page.getByPlaceholder("Select Country");
  16 |     this.resultsIND =  page.locator('.ta-results');
  17 |     this.buttonsResultsInd =  page.locator('.ta-results').locator('button');
  18 |     this.placeOrderButton = page.getByText('Place Order');
  19 | }
  20 | 
  21 | async PlaceOrder(countryName:string)
  22 | {
  23 |     await this.page.locator(".details__user").waitFor();
  24 |     await this.countrySelect.pressSequentially("ind", { delay: 100 });
  25 |     await this.page.locator('.ta-results').waitFor();
  26 |     const  printCountbuttonsResultsInd=await this.buttonsResultsInd.count();
  27 | 
  28 |      for (let k=0;k<printCountbuttonsResultsInd;k++)
  29 |     {
  30 |       let text:any;
> 31 |       text =await this.buttonsResultsInd.nth(k).textContent();
     |                                                 ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  32 |       console.log(text);
  33 | 
  34 |         if(text.trim()===countryName)
  35 |         {
  36 |            await this.buttonsResultsInd.nth(k).click();
  37 |           break;
  38 |         }
  39 |     }
  40 |     await this.placeOrderButton.click();
  41 | }
  42 | 
  43 | }
  44 | 
```