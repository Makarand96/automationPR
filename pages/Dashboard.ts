import { Page, Locator, expect } from "@playwright/test";

export class Dashboard {

    page: Page;
    productNames: Locator;
    addToCart: Locator;
    cartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productNames = page.locator('.card-body b');
        this.addToCart = page.getByRole('button', { name: /Add to Cart/i });
        this.cartButton = page.locator("button[routerlink='/dashboard/cart']");
    }

    async addProductToCart(productName: string) {
        await this.productNames.first().waitFor();
        const count = await this.productNames.count();
        
        for (let i = 0; i < count; i++) {

            await this.productNames.nth(i).waitFor({state:'visible'});

            const name= await this.productNames.nth(i).textContent();
            if ( name?.trim() === productName) 
                {
                   console.log(await this.productNames.nth(i).textContent());
                  await expect.soft(this.addToCart.nth(i)).toBeEnabled();
                        await this.addToCart.nth(i).click();
                        break;
                }
        }

    }

    async navigateToCartPage()
    {
        await this.cartButton.click();
    }
}