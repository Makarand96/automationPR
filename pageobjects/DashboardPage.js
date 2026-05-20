class DashboardPage{

constructor(page)
{
    this.page=page;
    this.cardBody = page.locator(".card-body b").first();
    this.total_items = page.locator(".card-body b");
    this.AddcartButton =page.getByRole("button", { name: /Add To Cart/i });
    this.cartsButton =  page.locator("button[routerlink='/dashboard/cart']");
}


async selectIphone(product_name)
{
    await this.cardBody.waitFor();
    const count_items =await this.total_items.count();
    console.log(await count_items);

    for (let i = 0; i < count_items; i++)
    {
        if ((await this.total_items.nth(i).textContent()) ===product_name) 
            {
                if (await this.AddcartButton.isEnabled) 
                    {
                        await this.AddcartButton.nth(i).click();
                        break;
                    }
            }
    }

}

async NavigateToCartsPage()
{
    if (await this.cartsButton.isEnabled()) {
    await this.cartsButton.click();
  }
}

}

module.exports={DashboardPage};