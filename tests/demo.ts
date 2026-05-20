import { expect, type Locator, type Page } from '@playwright/test';

class MyCartPage
{
    page:Page
    productText:Locator;
    checkoutButton:Locator;
    
    constructor(page:any)
    {
        
        this.page=page;
        this.productText= page.locator(".cartSection h3");
        this.checkoutButton = page.getByRole("button", {name: /Checkout/i});
    }

}   