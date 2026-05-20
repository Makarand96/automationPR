# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestRUn.spec.ts >> @Smoke End to End Test for Custom data in fixture
- Location: tests\TestRUn.spec.ts:37:11

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Checkout/i }) to be visible

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
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class MyCartPage
  4  | {
  5  | 
  6  |     page:Page;
  7  |     productText:Locator;
  8  |     checkoutButton:Locator;
  9  |     constructor(page:Page)
  10 |     {
  11 |         this.page=page;
  12 |         this.productText= page.locator(".cartSection h3");
  13 |         this.checkoutButton = page.getByRole("button", {name: /Checkout/i});
  14 |     }
  15 | 
  16 | 
  17 |     async checkoutProduct(product_name:string)
  18 |     {
> 19 |         await this.checkoutButton.waitFor();
     |                                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  20 |       //  await expect(this.productText).toHaveText(product_name);
  21 |         if (await this.checkoutButton.isEnabled()) 
  22 |         {
  23 |             await this.checkoutButton.click();
  24 |         }
  25 |     }
  26 | 
  27 | 
  28 | }
  29 | 
  30 | 
```