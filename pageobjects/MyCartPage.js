class MyCartPage
{
    constructor(page)
    {
        this.page=page;
        this.productText= page.locator(".cartSection h3");
        this.checkoutButton = page.getByRole("button", {name: /Checkout/i});
    }


    async checkoutProduct(product_name)
    {
        await this.checkoutButton.waitFor();
      //  await expect(this.productText).toHaveText(product_name);
        if (await this.checkoutButton.isEnabled()) 
        {
            await this.checkoutButton.click();
        }
    }


}

module.exports={MyCartPage};