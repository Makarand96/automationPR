class PaymentsPage
{

constructor(page)
{
    this.page=page;
    this.countrySelect =  page.getByPlaceholder("Select Country");
    this.resultsIND =  page.locator('.ta-results');
    this.buttonsResultsInd =  page.locator('.ta-results').locator('button');
    this.placeOrderButton = page.getByText('Place Order');
}

async PlaceOrder(countryName)
{
    await this.page.locator(".details__user").waitFor();
    await this.countrySelect.pressSequentially("ind", { delay: 100 });
    await this.page.locator('.ta-results').waitFor();
    const  printCountbuttonsResultsInd=await this.buttonsResultsInd.count();

     for (let k=0;k<printCountbuttonsResultsInd;k++)
    {

      const text =(await this.buttonsResultsInd.nth(k).textContent()).trim();
      console.log(text);

        if(text===countryName)
        {
           await this.buttonsResultsInd.nth(k).click();
          break;
        }
    }
    await this.placeOrderButton.click();
}

}
module.exports = {PaymentsPage};