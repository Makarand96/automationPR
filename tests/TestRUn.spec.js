const { test, expect } = require("@playwright/test");
const {POManager} =  require('../pageobjects/POManager');


test("End to End Test", async ({ page }) => {

  const pom = new POManager(page);

  const product_name = "iphone 13 pro";
  const countryName ='India';
  const loginPage = pom.loginPageOject();
  await loginPage.OpenPageURL();
  await loginPage.ValidLogin("mak7796@yopmail.com","Satara@12345");


  const dashboard =pom.dashboardPageObject();
  await dashboard.selectIphone(product_name);
  await dashboard.NavigateToCartsPage();

  const cartPage = pom.cartPageObject();
  await cartPage.checkoutProduct(product_name);

  const paymentPage = pom.paymentPageObject();
  await paymentPage.PlaceOrder(countryName);
   

});

