import{Page,Locator, expect} from '@playwright/test';

export class MyCartPage{

    page:Page;
    productCart:Locator;
    buyBtn:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.productCart = page.locator('.cartSection h3');
        this.buyBtn =page.getByRole('button',{name:'Buy Now'});
    }

    async buyProduct(productName:string)
    {
        const productCartName= await this.productCart.textContent();
        await expect(productCartName).toEqual(productName);
        await this.buyBtn.click();
    }
}